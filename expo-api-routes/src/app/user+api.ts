export async function POST(request: Request): Promise<Response> {
  const { email, password } = await request.json();

  if (email === "aninhaoctober@hotmail.com" && password === "123") {
    return new Response(
      JSON.stringify({
        email,
        name: "Paula Rodrigues",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new Response("Usuário e/ou senha incorreta!", {
    status: 404,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
