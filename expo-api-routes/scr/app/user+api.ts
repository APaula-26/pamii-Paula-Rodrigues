import { Request, Response } from "expo-router/server"


export async function POST(request: Request): Promise<Response> {
  const { email, password } = await request.json()

  if (email === "aninhaoctober@gmail.com" && password === "123") {
    return Response.json({
      email,
      name: "Paula Rodrigues",
    })
  }

  return new Response("Usuário e/ou senha incorreta!", {
    status: 401,
    headers: {
      "Content-Type": "text/plain",
    },
  // } catch (error) {
  //   // Caso haja algum erro inesperado
  //   return new Response("Erro interno no servidor.", {
  //     status: 500,
  //     headers: { "Content-Type": "text/plain" },
  //   })
  })
}