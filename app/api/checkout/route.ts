import { NextResponse } from 'next/server';


export async function POST(request: Request): Promise<Response> {
	const body = await request.json();
	const product_id = body?.product_id ?? "";
	const price = body?.price ?? "";
	if (product_id) {
		return NextResponse.json({
			status: true,
			code: 200,
			message: "Success GET data",
			data: {
				order_id: 'ORB-' + Date.now().toString().slice(-8),
				product_id: product_id,
				total: price ?? 0,
				status: 'success'
			}
		})
	}

	return NextResponse.json({
		status: false,
		code: 400,
		message: "Failed GET data",
		data: null
	})
}