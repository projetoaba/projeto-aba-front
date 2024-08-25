import {
    ToggleGroup,
    ToggleGroupItem,
  } from "@/components/shared/ui/toggle-group"
  
  
  export function ToggleGroupDemo() {
    return (
      <ToggleGroup type="single" className="grid gap-2 grid-cols-2">
        <ToggleGroupItem value="bold" aria-label="Toggle bold" variant="outline">
          Randomico
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic" variant="outline">
          Sequencial
        </ToggleGroupItem>
      </ToggleGroup>
    )
  }