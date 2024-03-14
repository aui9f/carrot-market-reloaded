import { NextRequest } from "next/server";

// http://localhost:3000/api/users 
export async function GET(request: NextRequest){
  console.log('request: ', request)
  return Response.json({
    ok: true
  })
}

export async function POST(request: NextRequest){
  console.log('LOG THE USER IN');
  const data = await request.json()
  return Response.json(data)
}