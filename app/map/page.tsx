import ArcGISMap from "@/components/map";
import MapPanel from "@/components/map-panel";
import { TextBox } from "@/components/text-box";

function toggleLayer(layer: __esri.Layer) {
  layer.visible = !layer.visible;
}


export default async function Map() {
  const resLD = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/layers`, {
    cache: "no-store",
  });

  const layerData = await resLD.json();

  const resLF = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/layers/filters`, {
    cache: "no-store",
  });

  const filters = await resLF.json();
  
  return (
    <div className="w-full h-5/10">

      <ArcGISMap id="bda891e30a384c4f9108fd9fdb6b07e9" layerData={layerData.data} filters={filters.data} />
    </div>
  );
}
