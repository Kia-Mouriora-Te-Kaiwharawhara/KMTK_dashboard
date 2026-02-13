import Layer from "@arcgis/core/layers/Layer";
import { NextResponse } from "next/server";
import Papa, { ParseResult } from "papaparse";
import { env } from "process";

interface DataLayer {
  id: string;
  title: string;
  description: string;
  links: string;
  linkTitles: string;
  tags: string;
  layer: Layer;
}

export async function GET() {
    const url = process.env.LAYER_CSV_URL;

  if (!url) {
    return NextResponse.json(
      { error: "LAYER_CSV_URL is not defined" },
      { status: 500 }
    );
  }
    const res = await fetch(url);
    if (!res.ok) return NextResponse.json({ error: "Failed to fetch CSV data" }, { status: 500 });
    const csv: string = await res.text();

    const results: ParseResult<DataLayer> = Papa.parse<DataLayer>(csv, {
        header: true,
        skipEmptyLines: true,
    });

    const parsedData = results.data.map((row) => ({
    ...row,
    tags: row.tags? row.tags.split(",").map((t) => t.trim()): [],
    links: row.links ? row.links.split(",").map((l) => l.trim()) : [],
    linkTitles: row.linkTitles ? row.linkTitles.split(",").map((t) => t.trim()) : [],
    layer: null
    }));

  return NextResponse.json({
    data: parsedData,
  });
}
