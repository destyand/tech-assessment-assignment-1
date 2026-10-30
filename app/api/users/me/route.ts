import { NextResponse } from 'next/server';
import { mocks } from '../mocks';

export async function GET(request: Request): Promise<Response> {
	return NextResponse.json({
		status: true,
		code: 200,
		message: "Success GET data",
		data: mocks
	})
}