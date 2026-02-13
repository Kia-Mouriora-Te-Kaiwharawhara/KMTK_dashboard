import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { link } from "fs"
import { ChevronDownIcon } from 'lucide-react'
import { title } from "process"

export function LayerCollapse({ title, description, links, linkTitles }: { title: string; description: string; links: string[]; linkTitles: string[] }) {
  return (
    <div className="w-full">
      <CardContent>
        <Collapsible className="data-[state=open]:bg-muted ">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="group w-full h-full">
              <span className="w-full text-wrap">{title}</span>
              <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-1 pt-0 text-sm">
            {description ? <p>{description}</p> : <p>No description available.</p>}
            {links.map((l, i) => (
                <a key={l} href={l} className="text-vivid-orange hover:underline">{linkTitles[i] || l}</a>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </div>
  )
}
