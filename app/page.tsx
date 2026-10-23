'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

const products = [
  { name: 'Fig & Santal', detail: 'Black fig · Sandalwood · Amber', price: '₹1,899', oldPrice: '₹2,299', image: '/candle-fig.png', tag: 'Bestseller' },
  { name: 'Cedar Atelier', detail: 'Cedarwood · Vetiver · Smoke', price: '₹2,199', oldPrice: '', image: '/candle-cedar.png', tag: 'New arrival' },
  { name: 'Linen No. 04', detail: 'Cotton blossom · Iris · Musk', price: '₹1,799', oldPrice: '₹1,999', image: '/candle-linen.png', tag: '' },
]

const categories = [
  { title: 'For slow mornings', subtitle: 'Soft, luminous scents', tone: 'bg-[#f7eaea]' },
  { title: 'For golden hours', subtitle: 'Warm, grounding notes', tone: 'bg-[#f4d4d1]' },
  { title: 'For your ritual', subtitle: 'Quiet, calming blends', tone: 'bg-[#d7c5e1]' },
]

export default function Page() {
  const [cartCount, setCartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [saved, setSaved] = useState<number[]>([])

  const addToBag = () => setCartCount((count) => count + 1)
  const toggleSaved = (index: number) => {
    setSaved((items) => items.includes(index) ? items.filter((item) => item !== index) : [...items, index])
  }

  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#352e2d]">
      <div className="bg-[#493d3c] px-4 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#fffaf8] sm:text-[11px]">
        Complimentary shipping on orders over ₹2,500 <span className="mx-2 text-[#f4c9c9]">·</span> Crafted in small batches
      </div>

      <header className="relative border-b border-[#eadbd8] bg-[#fffaf8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 lg:px-10">
          <button className="lg:hidden" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <a href="#top" className="font-serif text-[27px] tracking-[-0.05em] text-[#493d3c]">alba<span className="text-[#bf8585]">.</span></a>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.16em] lg:flex" aria-label="Main navigation">
            <a className="text-[#a86f70]" href="#shop">Shop all</a>
            <a className="transition-colors hover:text-[#a86f70]" href="#bestsellers">Bestsellers</a>
            <a className="transition-colors hover:text-[#a86f70]" href="#story">Our story</a>
            <a className="transition-colors hover:text-[#a86f70]" href="#journal">Journal</a>
          </nav>
          <div className="flex items-center gap-4 text-[#493d3c]">
            <button className="hidden sm:block" aria-label="Search"><Search /></button>
            <a className="hidden text-[11px] font-semibold uppercase tracking-[0.15em] sm:block" href="#account">Account</a>
            <button className="relative" aria-label={`Shopping bag, ${cartCount} items`}>
              <ShoppingBag />
              {cartCount > 0 && <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-[#b77879] text-[9px] text-white">{cartCount}</span>}
            </button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-[#eadbd8] px-5 py-6 text-xs font-semibold uppercase tracking-[0.15em] lg:hidden"><a href="#shop">Shop all</a><a href="#bestsellers">Bestsellers</a><a href="#story">Our story</a><a href="#journal">Journal</a></nav>}
      </header>

      <section id="top" className="mx-auto grid max-w-[1320px] gap-0 px-4 pt-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pt-8">
        <div className="flex min-h-[460px] flex-col justify-center bg-[#f8e8e7] px-8 py-14 sm:px-16 lg:min-h-[600px] lg:px-20">
          <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a86f70]"><Sparkles className="size-3" /> Fragrance, intentionally</p>
          <h1 className="max-w-[520px] font-serif text-[56px] leading-[0.98] tracking-[-0.055em] text-[#493d3c] sm:text-[72px]">A softer way to come home.</h1>
          <p className="mt-7 max-w-[390px] text-[15px] leading-7 text-[#766968]">Thoughtfully composed candles for the everyday rituals that make life feel a little more yours.</p>
          <a href="#shop" className="mt-9 flex w-fit items-center gap-3 border-b border-[#493d3c] pb-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-[#b77879] hover:text-[#b77879]">Explore the collection <ArrowRight className="size-4" /></a>
        </div>
        <div className="relative min-h-[450px] overflow-hidden lg:min-h-[600px]"><Image src="/hero-candle.png" alt="Ivory Alba candle glowing in warm morning light" fill className="object-cover" priority /></div>
      </section>

      <section className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28" id="shop">
        <div className="mb-10 flex items-end justify-between"><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b77879]">Curated for you</p><h2 className="font-serif text-4xl tracking-[-0.04em] text-[#493d3c] sm:text-5xl">Find your atmosphere</h2></div><a href="#bestsellers" className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.17em] sm:flex">View all <ArrowRight className="size-4" /></a></div>
        <div className="grid gap-3 md:grid-cols-3">{categories.map((category) => <a key={category.title} href="#bestsellers" className={`group flex min-h-[240px] flex-col justify-end ${category.tone} p-7 transition-transform hover:-translate-y-1`}><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#846e6d]">{category.subtitle}</p><h3 className="mt-2 font-serif text-3xl tracking-[-0.04em] text-[#493d3c]">{category.title}</h3><span className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] opacity-0 transition-opacity group-hover:opacity-100">Shop now <ArrowRight className="size-3" /></span></a>)}</div>
      </section>

      <section id="bestsellers" className="bg-[#f5e3e1] px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1320px]"><div className="mb-10 flex items-end justify-between"><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a86f70]">The edit</p><h2 className="font-serif text-4xl tracking-[-0.04em] text-[#493d3c] sm:text-5xl">Beloved scents</h2></div><p className="hidden max-w-[250px] text-right text-sm leading-6 text-[#766968] md:block">Small-batch fragrances, made to be lived with.</p></div><div className="grid gap-5 md:grid-cols-3">{products.map((product, index) => <article key={product.name} className="group"><div className="relative aspect-[4/5] overflow-hidden bg-[#f8eeee]"><Image src={product.image} alt={`${product.name} candle`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />{product.tag && <span className="absolute left-4 top-4 bg-[#fffaf8] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#a86f70]">{product.tag}</span>}<button onClick={() => toggleSaved(index)} className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-[#fffaf8]/90" aria-label={saved.includes(index) ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}><Heart className={`size-4 ${saved.includes(index) ? 'fill-[#b77879] text-[#b77879]' : 'text-[#493d3c]'}`} /></button><button onClick={addToBag} className="absolute bottom-4 left-4 right-4 translate-y-2 bg-[#493d3c] py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fffaf8] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">Add to bag</button></div><div className="flex justify-between gap-4 pt-5"><div><h3 className="font-serif text-xl text-[#493d3c]">{product.name}</h3><p className="mt-1 text-xs text-[#887675]">{product.detail}</p></div><div className="text-right text-sm"><p className="font-semibold text-[#493d3c]">{product.price}</p>{product.oldPrice && <p className="mt-1 text-xs text-[#a98c8b] line-through">{product.oldPrice}</p>}</div></div></article>)}</div></div></section>

      <section id="story" className="mx-auto grid max-w-[1320px] gap-0 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-28"><div className="flex min-h-[400px] flex-col justify-center bg-[#d7c5e1] px-8 py-14 sm:px-16"><p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#79647e]">The Alba standard</p><h2 className="max-w-[470px] font-serif text-4xl leading-tight tracking-[-0.04em] text-[#493d3c] sm:text-5xl">Made slowly. Meant to stay.</h2><p className="mt-6 max-w-[430px] text-sm leading-7 text-[#6e626d]">We use premium soy wax, fine fragrance oils and lead-free cotton wicks. Every candle is poured, finished and packed by hand in our studio.</p><div className="mt-8 grid max-w-[420px] grid-cols-2 gap-4 border-t border-[#bca7c5] pt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#69586b]"><span className="flex items-center gap-2"><Check className="size-3" /> 100% soy wax</span><span className="flex items-center gap-2"><Check className="size-3" /> Cruelty free</span><span className="flex items-center gap-2"><Check className="size-3" /> Hand poured</span><span className="flex items-center gap-2"><Check className="size-3" /> Clean burn</span></div></div><div className="relative min-h-[400px] bg-[#f8e8e7]"><Image src="/candle-linen.png" alt="Alba candle with linen styling" fill className="object-cover" /></div></section>

      <section id="journal" className="border-t border-[#eadbd8] bg-[#fffaf8] px-6 py-20 text-center lg:py-24"><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#b77879]">A note from Alba</p><blockquote className="mx-auto max-w-[720px] font-serif text-3xl leading-tight tracking-[-0.035em] text-[#493d3c] sm:text-4xl">“The right fragrance does not fill a room. It gives the room a feeling.”</blockquote><div className="mt-7 flex items-center justify-center gap-1 text-[#c18b8b]">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="size-3 fill-current" />)}</div><p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#887675]">Loved by 2,000+ candle people</p></section>

      <footer className="bg-[#493d3c] px-6 py-14 text-[#fffaf8] lg:px-10 lg:py-18"><div className="mx-auto grid max-w-[1320px] gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]"><div><a href="#top" className="font-serif text-3xl tracking-[-0.05em]">alba<span className="text-[#f0bebe]">.</span></a><p className="mt-5 max-w-[230px] text-sm leading-6 text-[#d4c4c2]">A little more warmth for the everyday.</p></div><div><p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0bebe]">Explore</p><div className="flex flex-col gap-3 text-sm text-[#d4c4c2]"><a href="#shop">Shop all</a><a href="#bestsellers">Bestsellers</a><a href="#story">Our story</a></div></div><div><p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0bebe]">Help</p><div className="flex flex-col gap-3 text-sm text-[#d4c4c2]"><a href="#contact">Contact</a><a href="#shipping">Shipping & returns</a><a href="#faq">FAQs</a></div></div><div><p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0bebe]">Stay in the glow</p><p className="mb-4 text-sm leading-6 text-[#d4c4c2]">New rituals, studio notes and 10% off your first order.</p><div className="flex border-b border-[#907e7c] pb-2"><input aria-label="Email address" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#b4a3a1]" /><button className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#f0bebe]">Join</button></div></div></div><div className="mx-auto mt-14 max-w-[1320px] border-t border-[#665554] pt-6 text-[10px] uppercase tracking-[0.16em] text-[#a99694]">© 2026 Alba Home Fragrance <span className="mx-2">·</span> Made with intention</div></footer>
    </main>
  )
}
