import Link from "next/link";
import {
	ArrowRight,
	Package,
	ShieldCheck,
	Truck,
	Sparkles,
	CircleHelp,
} from 'lucide-react';
import { getCurrentUserController } from "../features/user/controller/user.controller";
import { getCurrentBalanceController } from "../features/balance/controller/balance.controller";
import Catalog from "./shared/presentation/components/Catalog";

export default async function Dashboard() {
	const user = await getCurrentUserController();
	const balance = await getCurrentBalanceController();

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
					<div className="avatar small">{user.alias}</div>
				</div>
			</header>

			<main>
				<section className="welcome" aria-label="User information">
					<div className="welcome-user">
						<div className="avatar">{user.alias}</div>
						<div>
							<div className="welcome-label">YOUR PERSONAL SPACE</div>
							<h2>
								Welcome back, {user.name}
								<span className="wave">✳</span>
							</h2>
							<p>{user?.email}</p>
						</div>
					</div>

					<div className="member">
						<span className="plus">
							<Sparkles size={13} /> {user.membership}
						</span>
						<p>A little extra, just for you.</p>
					</div>

					<div className="points">
						<span>YOUR WALLET BALANCE</span>
						<strong>
							{balance.currency.symbol}{balance.balance.toLocaleString('en-US')} <small>{balance.currency.code}</small>
						</strong>
						<p>Ready for your next upgrade.</p>
					</div>
				</section>

				<Catalog />

				<section className="benefits">
					<div>
						<Truck />
						<span>
							<strong>On its way, on us.</strong>
							<small>Free shipping on every device</small>
						</span>
					</div>
					<div>
						<ShieldCheck />
						<span>
							<strong>Peace of mind included.</strong>
							<small>1-year warranty on all devices</small>
						</span>
					</div>
					<div>
						<Package />
						<span>
							<strong>Find your perfect fit.</strong>
							<small>Easy returns within 14 days</small>
						</span>
					</div>
				</section>
			</main>

			<footer>
				<Link href="/" className="logo">
					◉ orbit.
				</Link>
				<span>A better everyday starts here.</span>
				<span className="footer-end">
					<CircleHelp size={14} /> A demo store, made for learning.{' '}
					<ArrowRight size={14} />
				</span>
			</footer>
		</>
	)
}
