export type Patient = {
    id: string
    birthdate: string
    created_at: string,
    status: "em plano" | "novo" | "desligado" | "failed"
    name: string
}