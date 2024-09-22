import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/shared/ui/card"
  import Link from "next/link"
  
  interface CardAssessmentProps {    
    name: string;
    description: string;
    disabled?: boolean;
    href: string;
}

  export const CardAction = ({
    name, description, disabled, href
  }: CardAssessmentProps) =>  {
    return (
        <Link href={href}>
            <Card x-chunk="dashboard-02-chunk-0" className='w-200'
      >
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle>{name}</CardTitle>
          <CardDescription>
          {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">          
        </CardContent>
      </Card>
      </Link>
    )
  }