import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/shared/ui/toggle-group"

import { OptionsGroupProps } from "@/interfaces/ui"
import { useState } from "react";


export function ToggleGroupDemo({ options, name }: OptionsGroupProps) {
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <ToggleGroup
            type="single"
            className="grid gap-2 grid-cols-2">
            {options.map((item, index) => {
                const value = `${name}-${index + 1}`;
                return (
                    <div key={value}>
                        <input
                            type="checkbox"
                            hidden={true}
                            style={{ display: "none" }}
                            className="toggle-switch-checkbox"
                            name={name}                            
                            checked={selectedItem == value}
                            value={selectedItem ? selectedItem : ""}
                            id="toggleSwitch"
                        />                        
                        <ToggleGroupItem
                            aria-label="Toggle bold" variant="outline"
                            value={value} id={value}
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