export type AssessmentsApplications = {
    id: string
    type: string
    created_at: string
    completed_at?: string,
    interviewed_id: string,
    updated_at?: string
  }

export type AssessmentsAnswer = {
    id: string
    question: string
    type: string
    value: string,
    created_at?: string
}