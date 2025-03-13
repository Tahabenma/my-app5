import { NextRequest, NextResponse } from "next/server";
/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
    console.log('POST /api/contacter');

    const data = await request.json();
    console.log(data)

    return NextResponse.json(
    { message: 'recu avec succes' },
    { status: 200 }
    );
}
