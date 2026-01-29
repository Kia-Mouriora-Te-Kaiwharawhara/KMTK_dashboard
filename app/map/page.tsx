import { TextBox } from "@/components/text-box";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

export default function Map() {
  return (
    <div className="">
        <TextBox text="The data displayed is sourced from various open source databases. Use the side panel to manage data displays and access source data." type="dark" className="m-5"/>
        <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="min-w-1/3 h-100">
            <h1>MAP</h1>
        </ResizablePanel>
        <ResizableHandle className="border border-gray-300 border-l0 m-1"/>
        <ResizablePanel className="min-w-1/4">
            <h1>SIDEBAR</h1>
        </ResizablePanel>
        </ResizablePanelGroup>
    
    </div>
  );
}
