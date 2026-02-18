import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function HomeDescription() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-lg">
                Welcome to the home page! Here you can find an overview of the website and a description of a catchment.
            </p>
            <p className="text-lg">
                Hover over the birds to hear their bird calls!
            </p>
            <img
                src={"/page-info-pictures/bird.png"}
                alt="Bird picture"
                className="object-center border-sea-blue border-8"
            />
        </div>
    );
}

export function MapDescription() {
    return (
        <ScrollArea className={"w-full h-[80vh] border p-3"}>
        <div className="flex flex-col gap-4">
            <p className="text-lg pb-3">
                Welcome to the map page! Here you can find an interactive map of the catchment,
                with various layers of information that you can toggle on and off.
                You can also click on the points on the map to learn more about them.
            </p>

            <p className="text-lg">
                Click on these filters located in the top-left corner of the screen
                to sort through different map layers
            </p>
            <img
                src={"/page-info-pictures/mapFilters.png"}
                alt="map filters"
                className="object-center border-sea-blue border-8"
            />

            <p className="text-lg pt-3">
                Click the checkbox to toggle different map layers. Clicking the
                arrow will open a menu containing more layer information and
                where you can find the source.
            </p>
            <img
                src={"/page-info-pictures/mapLayers.png"}
                alt="map layers"
                className="self-center border-sea-blue border-8"
            />
        </div>
        </ScrollArea>
    );
}

export function HistoryDescription() {
    return (
        <ScrollArea className={"w-full h-[80vh] border p-3"}>
            <div className="flex flex-col gap-4">
                <p className="text-lg pb-3">
                    Welcome to the history page! Here you can find a timeline of historical events related to the catchment,
                    as well as an interactive map that shows the locations of these events. You can click on the
                    points on the map to learn more about them.
                </p>

                <p className="text-lg">
                    Click on a timeline entry to view a description of the event, some
                    associated images, and the location of the event on the map.
                </p>

                <img
                    src={"/page-info-pictures/timelineEvent.png"}
                    alt="map filters"
                    className="object-center border-sea-blue border-8"
                />

                <p className="text-lg pt-3">
                    Locations can also be selected on the map to bring up the event
                    information.
                </p>
                <img
                    src={"/page-info-pictures/timelineMap.png"}
                    alt="map layers"
                    className="self-center border-sea-blue border-8"
                />

                <p className="text-lg pt-3">
                    At the top of the page, there is also an option to filter timeline events
                    by their type. The up/down arrow button will flip the order of the timeline.
                </p>
                <img
                    src={"/page-info-pictures/timelineFilter.png"}
                    alt="map layers"
                    className="self-center border-sea-blue border-8"
                />
                <p className={"text-2xl underline pt-3 pb-0"}>Task</p>
                <p className="text-lg pt-0">
                    Now that you've learned how this page works, try to solve a quick task!
                </p>
                <p className="text-lg pt-0 whitespace-pre-line">
                    Find the event about the establishment of Otari-Wilton's Bush and Scenic Reserve by:{"\n\n"}
                    1. Click the filter button and uncheck all filters except for "Restoration"{"\n"}
                    2. Scroll down the timeline until year 1906{"\n"}
                    3. Click on the event!

                </p>

            </div>
        </ScrollArea>
    );
}

export function GetInvolvedDescription() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-lg">
                This is the get involved page! Scroll through to find information
                about groups and activities that you can do to support KMTK.
            </p>
        </div>
    );
}

export function AboutDescription() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-lg">
                This is the about page! Scroll through to find information about Kia Mouriora Te Kaiwharawhara and
                the strategy group involved in the initiative.
            </p>
            <p className="text-lg pt-3">
                Clicking on one of the strategy group logos will take you to their website to
                learn more about them and what they do.
            </p>
            <img
                src={"/page-info-pictures/aboutLogo.png"}
                alt="map layers"
                className="self-center border-sea-blue border-8"
            />
        </div>
    );
}