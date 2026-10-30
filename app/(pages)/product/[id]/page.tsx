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
	CircleAlert,
} from 'lucide-react';
import { getProductDetailController } from '../../../../features/catalog-detail/controller/catalog-detail.controller';
import { CatalogDetailType } from '../../../../features/catalog-detail/domain/catalog-detail.entity';
import { getCurrentBalanceController } from '../../../../features/balance/controller/balance.controller';
import ProductImage from '../../../shared/presentation/components/molecules/ProductImage';
import { checkoutMapper } from '../../../../features/checkout/infrastructure/api/checkout.mapper';
import { postCheckoutController } from '../../../../features/checkout/controller/user.controller';

export default function Detail({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);
	// const dispatch = useDispatch();

	// console.log('balance', balance);
	const [busy, setBusy] = useState(false);
	const [done, setDone] = useState<any>(null);
	const [err, setErr] = useState('');
	const [loading, setLoading] = useState(true);
	const [balance, setBalance] = useState<number>(0);
	const [data, setData] = useState<CatalogDetailType>();

	useEffect(() => {
		async function fetchData() {
			setBusy(true);
			setLoading(true);
			const productDetail = await getProductDetailController(id);
			const { balance } = await getCurrentBalanceController();

			if (!productDetail) {
				setErr('Product not found');
				setLoading(false);
				return;
			}
			setBalance(balance);
			setData(productDetail);
			setLoading(false);
			setBusy(false);
			if (productDetail?.price > balance) {
				setDone(true);
			}

		}

		fetchData();
	}, [])

	async function buy() {
		if (busy || done) return;
		setBusy(true);
		setErr('');
		try {
			const payload = checkoutMapper.toPayload({ id: data?.id ?? '', price: data?.price.toString() ?? '' });
			const result = await postCheckoutController(payload);
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
					<span className="orbit-mark">◉</span> orbit
					<span className="logo-dot">.</span>
				</Link>
				<nav>
					<Link href="/" className="nav-active">
						Discover
					</Link>
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
				) : !data ? (
					<div className="empty">
						<h1>Device not found.</h1>
						<p role="alert">{err}</p>
						<Link className="primary-button" href="/">
							Back to dashboard <ArrowRight size={17} />
						</Link>
					</div>
				) : (
					<div className="detail-grid">
						<ProductImage tone={data?.tone} tag={data?.tag} type={data?.type} brand={data?.brand} color={data?.color} url={data?.image} />
						<div className="detail-copy">
							<div className="eyebrow">
								{data?.brand} / {data?.type}
							</div>
							<h1>{data?.name}</h1>
							<p className="description">
								A little more possibility in your hands. Beautifully designed, effortlessly powerful, and ready for whatever your day brings.
							</p>
							<div className="detail-price">
								${data?.price.toLocaleString('en-US')} <span>USD · One-time payment</span>
							</div>
							<div className="divider" />
							<div className="option-label">
								COLOR <strong>{data?.color}</strong>
							</div>
							<div className={'color-swatch ' + data?.tone}>
								<Check size={16} />
							</div>
							<div className="option-label">STORAGE</div>
							<div className="storage-option">
								{data?.storage}
								<Check size={15} />
							</div>
							<h2 className="spec-heading">Small details. Big difference.</h2>
							<div className="specs">
								{[
									[Monitor, 'Display', data?.screen],
									[Cpu, 'Processor', data?.chip],
									[Camera, 'Camera', data?.camera],
									[Battery, 'Battery', data?.battery],
									[HardDrive, 'Storage', data?.storage],
									[Smartphone, 'Operating system', data?.os],
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
							{err && (
								<p role="alert" className="error">
									{err}
								</p>
							)}
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
										Make it yours{' '}
										<span>
											${data?.price.toLocaleString('en-US')} <ArrowRight size={18} />
										</span>
									</>
								)}
							</button>
							<p className="purchase-note">Demo purchase · No payment or personal details needed</p>
							<div className="detail-perks">
								<span>
									<Truck size={16} /> Free shipping
								</span>
								<span>
									<ShieldCheck size={16} /> 1-year warranty
								</span>
							</div>
						</div>
					</div>
				)}
			</main>

			<footer>
				<Link href="/" className="logo">
					◉ orbit.
				</Link>
				<span>A better everyday starts here.</span>
				<span className="footer-end">A demo store, made for learning.</span>
			</footer>

			{done && data && (
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
								<>Your {data?.name} is one step closer to being your new everyday essential.</>
							) : (
								<>
									Your wallet balance is ${balance.toLocaleString('en-US')} USD. You need $
									{(data?.price - balance).toLocaleString('en-US')} USD more to purchase this {data?.name}.
								</>
							)}
						</p>
						<div className="order-info">
							<span>{done.status === 'success' ? 'Order reference' : 'Device price'}</span>
							<strong>
								{done.status === 'success' ? done.order_id : '$' + data?.price.toLocaleString('en-US') + ' USD'}
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