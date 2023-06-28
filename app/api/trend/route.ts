import { NextResponse } from "next/server";

export function GET(res:Response):NextResponse{
    return NextResponse.json({name:"karan"})
}