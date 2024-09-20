"use client"

import * as React from "react"

import { Button } from "@/components/shared/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card"
import { Input } from "@/components/shared/ui/input"
import { Label } from "@/components/shared/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select"
import { Textarea } from "@/components/shared/ui/textarea"

export function CardsReportIssue() {
  const id = React.useId()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Novo</CardTitle>
        <CardDescription>
          What area are you having problems with?
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor={`area-${id}`}>Area</Label>
            <Select defaultValue="billing">
              <SelectTrigger id={`area-${id}`} aria-label="Area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team">Team</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="account">Account</SelectItem>
                <SelectItem value="deployments">Deployments</SelectItem>
                <SelectItem value="support">Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`security-level-${id}`}>Security Level</Label>
            <Select defaultValue="2">
              <SelectTrigger
                id={`security-level-${id}`}
                className="line-clamp-1 w-full truncate"
                aria-label="Security Level"
              >
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Severity 1 (Highest)</SelectItem>
                <SelectItem value="2">Severity 2</SelectItem>
                <SelectItem value="3">Severity 3</SelectItem>
                <SelectItem value="4">Severity 4 (Lowest)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`subject-${id}`}>Subject</Label>
          <Input id={`subject-${id}`} placeholder="I need help with..." />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`description-${id}`}>Description</Label>
          <Textarea
            id={`description-${id}`}
            placeholder="Please include all information relevant to your issue."
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Criar</Button>
      </CardFooter>
    </Card>
  )
}

export default function NewInterventionPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center px-8 py-4">
        <h1 className="text-lg font-semibold md:text-2xl">
          Plano de Intervenção
        </h1>
      </div>

      <div className="px-8 pb-4 border border-gray-200 rounded-lg">
        <div className="text-gray-600 space-y-3 py-8">
          <CardsReportIssue/>
        </div>        
      </div>
    </main>
  );
}
