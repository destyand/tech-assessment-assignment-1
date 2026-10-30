import { NextResponse } from 'next/server';
import { mocks } from '../mocks';

export async function GET(request: Request, { params }: { params: { id: string } }): Promise<Response> {
	const id = request.url.split("/").at(-1) ?? "";
	const data = mocks.find(x => x.id.toString() === id.toString()) ?? null;
	if (id) {
		return NextResponse.json({
			status: true,
			code: 200,
			message: "Success GET data",
			data: data
		})
	}

	return NextResponse.json({
		status: false,
		code: 400,
		message: "Failed GET data",
		data: null
	})
}