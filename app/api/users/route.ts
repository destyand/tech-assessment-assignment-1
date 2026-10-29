import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
	return NextResponse.json({
		status: true,
		code: 200,
		message: "Success GET data",
		data: null
	})
}