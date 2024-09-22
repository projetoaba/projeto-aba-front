// @ts-nocheck
import '@/app/globals.css'
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
import React, {useState} from 'react'
import {api} from '@/lib/api'
import {logIn} from '@/lib/auth'


export default function LoginForm() {

  const [formInput, setFormInput] = useState({email: '', password: ''})
  const [error, setError] = useState(null)

    const updateFormInput = e => {
        e.persist()

        setFormInput(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const signIn = e => {
        e.preventDefault()        

        api().get('/sanctum/csrf-cookie').then(() => {
          api().post('/api/login', formInput).then(response => {            
                if (response.status == 401) {                    
                    setError('Credenciais inválidas')
                } else {
                    localStorage.setItem('token', response.data.access_token)
                    logIn()
                }
            })
        }).catch(e => console.log('Credenciais inválidas'))
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Faça Login com Email e senha
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" onChange={updateFormInput} type="email" name="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" onChange={updateFormInput} type="password" name="password" required />
          { error && <h3>Credenciais inválidas</h3>}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full"  onClick={signIn}>Login</Button>
      </CardFooter>
    </Card>
    </main>
  )
}
