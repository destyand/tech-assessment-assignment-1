'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
	ArrowLeft,
	ArrowRight,
	Check,
	ShieldCheck,
	Truck,
	LoaderCircle,
	Smartphone,
	Cpu,
	Camera,
	Battery,
	HardDrive,
	Monitor,
	CircleAlert
} from 'lucide-react';

interface Product {
	id: string;
	name: string;
	brand: string;
	type: string;
	price: number;
	color: string;
	tone: string;
	storage: string;
	screen: string;
	chip: string;
	camera: string;
	battery: string;
	os: string;
	stock: number;
}

export default function Detail({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);
	const dispatch = useDispatch();
	const balance = useSelector((state: any) => state.walletBalance);

	const [product, setProduct] = useState<Product | null>(null);
	const [busy, setBusy] = useState(false);
	const [done, setDone] = useState<any>(null);
	const [err, setErr] = useState('');
	const [loading, setLoading] = useState(true);

	// Fetch product data
	useEffect(() => {
		let mounted = true;
		setLoading(true);

		new Promise<Product>((resolve, reject) =>
			setTimeout(() => {
				const db = [
					['1', 'iPhone 16 Pro', 'Apple', 'Smartphones', 999, 'Desert Titanium', 'sand', '128 GB', '6.3-inch', 'A18 Pro', '48 MP', 'Up to 27 hours', 'iOS 18'],
					['2', 'Galaxy S25 Ultra', 'Samsung', 'Smartphones', 1299, 'Titanium Gray', 'gray', '256 GB', '6.9-inch', 'Snapdragon 8 Elite', '200 MP', '5,000 mAh', 'Android 15'],
					['3', 'iPad Air', 'Apple', 'Tablets', 599, 'Sky Blue', 'blue', '128 GB', '11-inch', 'Apple M3', '12 MP', 'Up to 10 hours', 'iPadOS 18'],
					['4', 'Pixel 9 Pro', 'Google', 'Smartphones', 999, 'Sage', 'sage', '128 GB', '6.3-inch', 'Google Tensor G4', '50 MP', '4,700 mAh', 'Android 14'],
					['5', 'Galaxy Tab S10+', 'Samsung', 'Tablets', 999, 'Moonstone Gray', 'purple', '256 GB', '12.4-inch', 'Dimensity 9300+', '13 MP', '10,090 mAh', 'Android 14'],
					['6', 'iPhone 16', 'Apple', 'Smartphones', 799, 'Ultramarine', 'indigo', '128 GB', '6.1-inch', 'A18', '48 MP', 'Up to 22 hours', 'iOS 18']
				];

				const row = db.find(x => x[0] === id);
				if (!row) {
					reject(new Error('We couldn’t find that device.'));
					return;
				}

				resolve({
					id: row[0],
					name: row[1],
					brand: row[2],
					type: row[3],
					price: row[4] as number,
					color: row[5],
					tone: row[6],
					storage: row[7],
					screen: row[8],
					chip: row[9],
					camera: row[10],
					battery: row[11],
					os: row[12],
					stock: 12
				});
			}, 600)
		)
			.then(data => {
				if (mounted) {
					setProduct(data);
					dispatch({ type: 'SELECTED', payload: data });
				}
			})
			.catch(e => {
				if (mounted) setErr(e.message);
			})
			.finally(() => {
				if (mounted) setLoading(false);
			});

		return () => {
			mounted = false;
		};
	}, [id, dispatch]);

	// Focus trap for modal
	useEffect(() => {
		if (!done) return;
		const previous = document.activeElement as HTMLElement | null;
		const link = document.getElementById('success-cta');
		link?.focus();

		const trap = (e: KeyboardEvent) => {
			if (e.key === 'Tab') {
				e.preventDefault();
				link?.focus();
			}
		};

		document.addEventListener('keydown', trap);
		return () => {
			document.removeEventListener('keydown', trap);
			previous?.focus();
		};
	}, [done]);

	// Purchase handler
	async function buy() {
		if (busy || done) return;
		setBusy(true);
		setErr('');

		try {
			const result: any = await new Promise((resolve, reject) =>
				setTimeout(() => {
					if (!product || product.stock < 1) {
						reject(new Error('This device is out of stock.'));
						return;
					}
					if (product.price > balance) {
						resolve({ status: 'insufficient_balance' });
						return;
					}
					resolve({
						order_id: 'ORB-' + Date.now().toString().slice(-8),
						product_id: product.id,
						total: product.price,
						status: 'success'
					});
				}, 1100)
			);

			if (result.status === 'success') {
				dispatch({ type: 'ORDER', payload: result });
			}
			setDone(result);
		} catch (e) {
			setErr(e instanceof Error ? e.message : 'Purchase failed. Please try again.');
		} finally {
			setBusy(false);
		}
	}

	return (
		<>
			<header>
				<Link href="/" className="logo">
					<span className="orbit-mark">◉</span> orbit<span className="logo-dot">.</span>
				</Link>
				<nav>
					<Link href="/" className="nav-active">Discover</Link>
				</nav>
				<div className="header-right">
					<span className="header-note">A little upgrade. A lot of possibility.</span>
					<div className="avatar small">AM</div>
				</div>
			</header>

			<main className="detail-main">
				<Link className="back-link" href="/">
					<ArrowLeft size={16} /> Back to discover
				</Link>

				{loading ? (
					<div className="loading">A closer look is on its way…</div>
				) : !product ? (
					<div className="empty">
						<h1>Device not found.</h1>
						<p role="alert">{err}</p>
						<Link className="primary-button" href="/">
							Back to dashboard <ArrowRight size={17} />
						</Link>
					</div>
				) : (
					<div className="detail-grid">
						{/* Product Art / Preview */}
						<div>
							<div className={`detail-art product-art ${product.tone}`}>
								<span className="badge">THE EVERYDAY, REIMAGINED</span>
								<div className={`device ${product.type === 'Tablets' ? 'tablet' : ''}`}>
									<div className="device-back">
										<div className={`cameras ${product.brand === 'Google' ? 'pixel' : ''}`}>
											<i /><i /><i />
										</div>
										<span className="device-brand">
											{product.brand === 'Apple' ? '●' : product.brand === 'Google' ? 'G' : 'SAMSUNG'}
										</span>
									</div>
									<div className="device-front">
										<div className="dynamic-island" />
										<div className="wallpaper" />
									</div>
								</div>
								<span className="art-caption">Designed for your everyday.</span>
							</div>
							<p className="illustration-note">Illustrative device preview. Specifications are demo data.</p>
						</div>

						{/* Product Copy & Options */}
						<div className="detail-copy">
							<div className="eyebrow">{product.brand} / {product.type}</div>
							<h1>{product.name}</h1>
							<p className="description">
								A little more possibility in your hands. Beautifully designed, effortlessly powerful, and ready for whatever your day brings.
							</p>

							<div className="detail-price">
								${product.price.toLocaleString('en-US')} <span>USD · One-time payment</span>
							</div>

							<div className="divider" />

							<div className="option-label">COLOR <strong>{product.color}</strong></div>
							<div className={`color-swatch ${product.tone}`}>
								<Check size={16} />
							</div>

							<div className="option-label">STORAGE</div>
							<div className="storage-option">
								{product.storage}<Check size={15} />
							</div>

							<h2 className="spec-heading">Small details. Big difference.</h2>
							<div className="specs">
								{[
									[Monitor, 'Display', product.screen],
									[Cpu, 'Processor', product.chip],
									[Camera, 'Camera', product.camera],
									[Battery, 'Battery', product.battery],
									[HardDrive, 'Storage', product.storage],
									[Smartphone, 'Operating system', product.os]
								].map(([Icon, label, value]: any) => (
									<div key={label}>
										<Icon size={17} />
										<span>
											<small>{label}</small>
											<strong>{value}</strong>
										</span>
									</div>
								))}
							</div>

							<div className="in-stock">
								<span /> In stock. Ready for your next chapter.
							</div>

							{err && <p role="alert" className="error">{err}</p>}

							<button
								className="primary-button buy"
								disabled={busy || !!done}
								onClick={buy}
							>
								{busy ? (
									<>
										<LoaderCircle className="spin" size={18} /> Making it yours…
									</>
								) : (
									<>
										Make it yours <span>${product.price.toLocaleString('en-US')} <ArrowRight size={18} /></span>
									</>
								)}
							</button>

							<p className="purchase-note">Demo purchase · No payment or personal details needed</p>

							<div className="detail-perks">
								<span><Truck size={16} /> Free shipping</span>
								<span><ShieldCheck size={16} /> 1-year warranty</span>
							</div>
						</div>
					</div>
				)}
			</main>

			<footer>
				<Link href="/" className="logo">◉ orbit.</Link>
				<span>A better everyday starts here.</span>
				<span className="footer-end">A demo store, made for learning.</span>
			</footer>

			{/* Success / Error Modal */}
			{done && product && (
				<div className="modal-overlay">
					<div
						className="modal"
						role="dialog"
						aria-modal="true"
						aria-labelledby="success-title"
						aria-describedby="success-description"
					>
						<div className="success-icon">
							{done.status === 'success' ? <Check size={32} /> : <CircleAlert size={32} />}
						</div>

						<div className="eyebrow">
							{done.status === 'success' ? 'GOOD THINGS ARE ON THEIR WAY' : 'A LITTLE SHORT THIS TIME'}
						</div>

						<h2 id="success-title">
							{done.status === 'success' ? 'It’s officially in your orbit.' : 'Insufficient balance'}
						</h2>

						<p id="success-description">
							{done.status === 'success' ? (
								<>Your {product.name} is one step closer to being your new everyday essential.</>
							) : (
								<>
									Your wallet balance is ${balance.toLocaleString('en-US')} USD. You need ${(product.price - balance).toLocaleString('en-US')} USD more to purchase this {product.name}.
								</>
							)}
						</p>

						<div className="order-info">
							<span>{done.status === 'success' ? 'Order reference' : 'Device price'}</span>
							<strong>
								{done.status === 'success' ? done.order_id : '$' + product.price.toLocaleString('en-US') + ' USD'}
							</strong>
						</div>

						<Link id="success-cta" className="primary-button" href="/">
							Back to dashboard <ArrowRight size={18} />
						</Link>

						<small>This is a simulated purchase. No charge was made.</small>
					</div>
				</div>
			)}
		</>
	);
}