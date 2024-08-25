import { CirclePlus, MessageCircleQuestion} from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/shared/ui/tooltip"
import { Label } from "@/components/shared/ui/label"

interface TooltipFormLabelProps {    
    description: string;
}

interface FormLabelTooltipedProps {    
    tooltip: string;
    label: string;
    htmlFor: string
}

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/shared/ui/alert-dialog"
  
  export function AlertDialogDemo({description}: TooltipFormLabelProps) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
            <MessageCircleQuestion/>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            {/* <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle> */}
            <AlertDialogDescription>
              {description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
            <AlertDialogAction>Entendi</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  
  export default function FormLabelWithHelp({htmlFor, label, tooltip}: FormLabelTooltipedProps) {
    return (<Label htmlFor={htmlFor}>{label} <AlertDialogDemo description={tooltip}/></Label>)
}