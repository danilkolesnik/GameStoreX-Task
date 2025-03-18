import { NextResponse } from "next/server";

export async function POST() {

  try {
    // const { email, password } = await req.json(); 
    
    // приклад реального запиту
    // const response = await fetch(`https://api-example.com/auth/register`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    // });

    // const data = await response.json();

    //приклад вiдповiдi серверу

    const data = {
        user : {
            name: 'Daniel',
            lastName: 'Kolisnyk',
        },
    }
    
    return NextResponse.json({ data },{ status: 200 });

  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 400 });
  }
}
