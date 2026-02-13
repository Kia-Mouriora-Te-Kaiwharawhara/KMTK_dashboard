import Layer from "@arcgis/core/layers/Layer";
import { NextResponse } from "next/server";
import Papa, { ParseResult } from "papaparse";
import { env } from "process";

interface FilterLL {
  name: string;
  next: FilterLL[];
}

export async function GET() {
  const url = process.env.LAYER_FILTER_CSV_URL;
  if (!url) {
    return NextResponse.json(
      { error: "LAYER_FILTER_CSV_URL is not defined" },
      { status: 500 }
    );
  }
  const res = await fetch(url);
  if (!res.ok)
    return NextResponse.json(
      { error: "Failed to fetch CSV data" },
      { status: 500 }
    );
  const csv: string = await res.text();

  const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
  const rows = parsed.data as Record<string, string>[];
  const headers = parsed.meta.fields || [];

  const childrenMap = new Map<string, string[]>();
  
  headers.forEach((header) => {
    const children: string[] = [];
    rows.forEach((row) => {
      const child = row[header];
      if (child && child.trim()) {
        children.push(child.trim());
      }
    });
    childrenMap.set(header, children);
  });

  function buildNode(name: string): FilterLL {
    const children = childrenMap.get(name) || [];
    return {
      name,
      next: children.map((childName) => buildNode(childName)),
    };
  }

  const rootName = headers[0];
  const parsedData = buildNode(rootName);

  return NextResponse.json({
    data: parsedData,
  });
}