import { NextResponse } from 'next/server';
import { mocks } from './mocks';

export async function GET(request: Request): Promise<Response> {

	const url = new URL(request.url)
	const search = url.searchParams.get('search')
	const type = url.searchParams.get('type')
	const sort = url.searchParams.get('sort')

	let filtered = mocks.filter((item) => {
		const matchesSearch = item.name.toLowerCase().includes(search?.toLowerCase() || '')
		const matchesType = !type || type === 'All devices' || item.type === type
		return matchesSearch && matchesType
	})

	if (sort === 'low') {
		filtered.sort((a, b) => a.price - b.price)
	}

	if (sort === 'high') {
		filtered.sort((a, b) => b.price - a.price)
	}

	return NextResponse.json({
		status: true,
		code: 200,
		message: "Success GET data",
		data: filtered
	})
}