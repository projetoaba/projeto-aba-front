import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/shared/ui/toggle-group"

import { OptionsGroupProps } from "@/interfaces/ui"
import { useState } from "react";
import {string_to_slug} from "@/lib/transforms/str-utils"


export function ToggleGroupDemo({ options, name }: OptionsGroupProps) {
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <ToggleGroup
            type="single"
            className="grid gap-2 grid-cols-2">
            {options.map((item, index) => {
                const key = `${name}-${index + 1}`;
                const value = string_to_slug(item);
                return (
                    <div key={key}>
                        <input
                            type="checkbox"
                            hidden={true}
                            style={{ display: "none" }}                            
                            name={name}
                            readOnly={true}               
                            checked={selectedItem == value}
                            value={selectedItem ? selectedItem : ""}
                            id="toggleSwitch"
                        />                        
                        <ToggleGroupItem
                            aria-label="Toggle bold" variant="outline"
                            value={value} id={value}
                            className="w-full"
                            onClick={() => setSelectedItem(() => value ? value : "")}
                        >
                            {item}
                        </ToggleGroupItem>
                    </div>
                );
            })}
        </ToggleGroup>
    )
}