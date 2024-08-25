import { CirclePlus, MessageCircleQuestion } from "lucide-react"

import { Label } from "@/components/shared/ui/label"

interface TooltipFormLabelProps {
    description: string;
    title: string;
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

export function AlertDialogDemo({ description, title }: TooltipFormLabelProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <MessageCircleQuestion className="w-4 hover:bg-primary-300/80 "/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
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

export default function FormLabelWithHelp({ htmlFor, label, tooltip }: FormLabelTooltipedProps) {
    return (
        <div className="flex items-center">
            <Label htmlFor={htmlFor} className="pr-2">{label}</Label>
            <AlertDialogDemo description={tooltip} title={label} />
        </div>)
}