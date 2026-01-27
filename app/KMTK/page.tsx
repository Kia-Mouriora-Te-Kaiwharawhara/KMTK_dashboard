'use client';

import {TimelineColor, TimelineLayout, TimelineSize, TimelineStatus} from "@/components/custom/timeline-layout";
import { historicaldata } from "@/lib/historicaldata";
import {ReactNode, useState} from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image";

interface TimelineElement {
    id: string;
    date: string;
    title: string;
    description: string;
    icon?: ReactNode | (() => ReactNode);
    status?: TimelineStatus;
    color?: TimelineColor;
    size?: TimelineSize;
    loading?: boolean;
    error?: string;
    image?: string;
}

export default function KMTK() {

    const [selectedID, setSelectedID] = useState('0');

    const timelineItems: TimelineElement[] = [];
    let id = 0;

    historicaldata.locations.forEach((location) => {
        location.timeline.forEach((item) => {
            timelineItems.push({
                id: String(id++),
                date: String(item.year),
                title: 'placeholder',
                description: item.event,
                image: item.img[0].src
            });
        });
    });

  return (
      <div className="flex flex-row w-full justify-between">
          <ScrollArea className="w-1/2 h-screen ">
            <TimelineLayout
                className={'shadow-black'}
                connectorColor={'accent'}
                iconColor={'accent'}
                selectedID={selectedID}
                setSelectedID={setSelectedID}
                items={timelineItems}
            />
          </ScrollArea>
          {/* Add images related to the timeline here */}
          <div className="w-1/2 h-screen bg-white">
              <Image
                  src={timelineItems[parseInt(selectedID)].image}
                  alt={""}
                  width={400}
                  height={400}
              >
              </Image>
          </div>
      </div>

  );
}
