'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Flame, Leaf, Heart, Wind } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'
import { HERO_PLACEHOLDER, LIFESTYLE_PLACEHOLDER } from '@/lib/utils/placeholder-images'

const scents = [
  { name: 'Amber & Sandalwood', notes: 'Warm · Woody · Grounding', icon: '🕯️' },
  { name: 'Vanilla & Tonka', notes: 'Sweet · Soft · Comforting', icon: '🌿' },
  { name: 'Sea Salt & Driftwood', notes: 'Fresh · Coastal · Airy', icon: '🌊' },
  { name: 'Black Fig & Cedar', notes: 'Dark · Bold · Mysterious', icon: '🌲' },
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
  }

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[hsl(36,25%,94%)]">
        <div className="container-custom grid lg:grid-cols-2 gap-8 items-center py-section lg:py-36">
          {/* Text */}
          <div className="space-y-7 animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Hand-poured · Small Batch
            </p>
            <h1 className="text-display font-heading font-semibold text-balance leading-[1.08]">
              Scent the&nbsp;Mood.<br />
              Light&nbsp;the&nbsp;Moment.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Every candle is hand-poured with 100% natural soy wax, premium fragrance oils,
              and a cotton wick — crafted to fill your home with warmth, not chemicals.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="btn-brand-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-opacity"
                prefetch={true}
              >
                Shop All Candles
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-brand-primary border px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-white transition-colors"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] bg-muted rounded-sm overflow-hidden animate-fade-in">
            <Image
              src={HERO_PLACEHOLDER}
              alt="Hand-poured candles collection"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {/* Warm amber gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(28,55%,42%)]/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── USP Banner ──────────────────────────────────────────── */}
      <section className="bg-foreground text-background py-4">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 text-xs uppercase tracking-[0.18em]">
            <span>100% Soy Wax</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span>Phthalate-Free Fragrance</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span>Cotton Wick</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span>Up to 60 hr Burn Time</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span>Recyclable Vessels</span>
          </div>
        </div>
      </section>

      {/* ── Signature Scents ────────────────────────────────────── */}
      <section className="py-section">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Explore</p>
            <h2 className="text-h2 font-heading font-semibold">Signature Scents</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {scents.map((scent) => (
              <Link
                key={scent.name}
                href="/products"
                className="group relative bg-muted/40 rounded-sm p-8 flex flex-col items-center text-center gap-4 border border-transparent hover:border-accent/40 hover:bg-muted/70 transition-all duration-300"
              >
                <span className="text-4xl">{scent.icon}</span>
                <div>
                  <p className="font-heading font-semibold text-base leading-snug">{scent.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{scent.notes}</p>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide link-underline pb-0.5"
            >
              View Full Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Collections (dynamic) ───────────────────────────────── */}
      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* ── Brand Story ─────────────────────────────────────────── */}
      <section className="py-section bg-[hsl(36,25%,94%)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] bg-muted rounded-sm overflow-hidden relative">
              <Image
                src={LIFESTYLE_PLACEHOLDER}
                alt="Hand-pouring a candle in our studio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6 lg:max-w-md">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Made with Love</p>
              <h2 className="text-h2 font-heading font-semibold">
                Small Batch.<br />Big Heart.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every candle leaves our studio hand-poured, hand-labelled, and quality-checked.
                We use only 100% natural soy wax, lead-free cotton wicks, and fragrance blends
                that are free from phthalates and parabens — safe for you, kind to the planet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe your home deserves the very best. That&apos;s why we never rush
                the process — each batch is cured for a full week before it ships to your door.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide link-underline pb-0.5"
                prefetch={true}
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ──────────────────────────────────────────────── */}
      <section className="py-section border-y">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-h2 font-heading font-semibold">Why You&apos;ll Love Them</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Leaf className="h-6 w-6" strokeWidth={1.5} />,
                title: 'Clean Ingredients',
                desc: 'Natural soy wax, phthalate-free fragrance, cotton wick. Nothing synthetic or harmful.',
              },
              {
                icon: <Flame className="h-6 w-6" strokeWidth={1.5} />,
                title: 'Long Burn Time',
                desc: 'Up to 60 hours of even, clean burn — so your favourite scent stays longer.',
              },
              {
                icon: <Heart className="h-6 w-6" strokeWidth={1.5} />,
                title: 'Hand-Poured',
                desc: 'Every candle is poured by hand in small batches and cured for a full week.',
              },
              {
                icon: <Wind className="h-6 w-6" strokeWidth={1.5} />,
                title: 'Eco Packaging',
                desc: 'Minimal, recyclable packaging — because we care about what we leave behind.',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-4">
                <div className="p-3 bg-muted rounded-sm text-accent">{item.icon}</div>
                <h3 className="font-heading font-semibold text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────────── */}
      <section className="py-section">
        <div className="container-custom max-w-xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Join the Glow</p>
          <h2 className="text-h2 font-heading font-semibold">New Scents. Exclusive Drops.</h2>
          <p className="mt-3 text-muted-foreground">
            Subscribe and get 10% off your first order, plus early access to limited-edition releases.
          </p>
          <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 border-b border-foreground/30 bg-transparent px-1 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">Unsubscribe any time. We respect your inbox.</p>
        </div>
      </section>
    </>
  )
}
