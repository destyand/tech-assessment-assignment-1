'use client'

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { fetchAllProducts } from "../store/actions/catalog.action"
import { useEffect, useState } from "react"

import Link from 'next/link';
import {
    ArrowUpRight,
    Search,
    Smartphone,
    Tablet,
    LayoutGrid,
} from 'lucide-react';

const error = false
const loading = false

export default function Catalog() {
    const dispatch = useDispatch()
    const { allProducts } = useSelector((state: RootState) => state.catalog)
    const [filters, setFilters] = useState({ search: '', type: '', sort: 'featured' })

    useEffect(() => {
        dispatch(fetchAllProducts(filters) as any)
    }, [filters])

    return (
        <section>
            <section className="collection-heading" id="devices">
                <div className="eyebrow">THE COLLECTION</div>
                <h2>Your next everyday essential.</h2>
                <p>Big ideas. Beautiful screens. Meet your next upgrade.</p>
            </section>

            <div className="toolbar">
                <div className="tabs">
                    {['All devices', 'Smartphones', 'Tablets'].map((t, i) => {
                        const Icon = [LayoutGrid, Smartphone, Tablet][i];
                        return (
                            <button
                                key={t}
                                className={filters.type === t ? 'active' : ''}
                                onClick={() => setFilters({ ...filters, type: t })}
                            >
                                <Icon size={15} />
                                {t}
                            </button>
                        );
                    })}
                </div>
                <div className="tools">
                    <label className="search">
                        <Search size={16} />
                        <input
                            aria-label="Search devices"
                            placeholder="Search devices…"
                            value={filters.search}
                            onChange={(e) =>
                                setFilters({ ...filters, search: e.target.value })
                            }
                        />
                    </label>
                    <select
                        aria-label="Sort devices"
                        value={filters.sort}
                        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                    >
                        <option value="featured">Featured</option>
                        <option value="low">Price: low to high</option>
                        <option value="high">Price: high to low</option>
                    </select>
                </div>
            </div>

            {error ? (
                <p role="alert">{error}</p>
            ) : loading ? (
                <div className="loading">
                    Getting your next favorites ready<span>…</span>
                </div>
            ) : (
                <>
                    <div className="result-count">
                        {allProducts?.length || 0} devices, endless possibilities
                    </div>
                    <section className="product-grid" aria-label="Product list">
                        {allProducts?.map((p: any) => (
                            <Link
                                className="product-card"
                                key={p.id}
                                href={'/product/' + p.id}
                            >
                                <div className={'product-art ' + p.tone}>
                                    {p.tag && (
                                        <span
                                            className={
                                                'badge ' + (p.tag === 'NEW ARRIVAL' ? 'green' : '')
                                            }
                                        >
                                            {p.tag}
                                        </span>
                                    )}
                                    <img src={p.image} alt={p.name} />
                                    <span className="art-caption">{p.color}</span>
                                </div>
                                <div className="product-copy">
                                    <span className="brand">
                                        {p.brand}{' '}
                                        <span>
                                            {' '}
                                            / {p.type === 'Tablets' ? 'Tablet' : 'Smartphone'}
                                        </span>
                                    </span>
                                    <h3>{p.name}</h3>
                                    <p>
                                        {p.storage.capacity}{p.storage.unit} <span>·</span> {p.color}
                                    </p>
                                    <div className="product-bottom">
                                        <strong>
                                            {p.priceLabel}
                                            <small> USD</small>
                                        </strong>
                                        <span className="circle-arrow">
                                            <ArrowUpRight size={19} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </section>
                    {!allProducts?.length && (
                        <div className="loading">
                            No devices found. Try another search.
                        </div>
                    )}
                </>
            )}
        </section>
    )
}