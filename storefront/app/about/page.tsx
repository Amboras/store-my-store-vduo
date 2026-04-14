import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Our Story | Lumière Candles' }

export default function AboutPage() {
  return (
    <>
      <div className="border-b bg-[hsl(36,25%,94%)]">
        <div className="container-custom py-section-sm text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Made with Purpose</p>
          <h1 className="text-h1 font-heading font-semibold">Our Story</h1>
        </div>
      </div>

      <div className="container-custom py-section max-w-3xl">
        <div className="prose prose-lg mx-auto space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-foreground text-xl font-heading leading-relaxed">
            Lumière began in a small kitchen, with a pot of melted wax, a handful of fragrance oils,
            and an obsession with the perfect scent.
          </p>

          <p>
            What started as weekend hobby quickly turned into something more — friends and family
            kept asking for more candles, and we realised we might be onto something special.
            Today, every single candle is still hand-poured in our small studio, cured for a full
            week, and quality-checked before it reaches you.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 py-8 border-y not-prose">
            <div>
              <p className="text-3xl font-heading font-semibold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Natural soy wax — always</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-semibold text-foreground">60 hrs</p>
              <p className="text-sm text-muted-foreground mt-1">Average burn time per candle</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-semibold text-foreground">0</p>
              <p className="text-sm text-muted-foreground mt-1">Phthalates, parabens or toxins</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-semibold text-foreground">7 Days</p>
              <p className="text-sm text-muted-foreground mt-1">Curing time before every shipment</p>
            </div>
          </div>

          <h2 className="text-h3 font-heading font-semibold text-foreground">Why Soy Wax?</h2>
          <p>
            Soy wax burns cleaner and slower than paraffin, producing far less soot and no
            harmful chemicals. It&apos;s biodegradable, renewable, and allows fragrance oils to
            diffuse more evenly — meaning a better throw and a longer-lasting scent throughout
            your home.
          </p>

          <h2 className="text-h3 font-heading font-semibold text-foreground">Our Ingredients</h2>
          <p>
            We source only phthalate-free, IFRA-compliant fragrance oils that are safe for people
            and pets. Our wicks are 100% unbleached cotton with no metal core — no nasties, just
            a clean, even burn. Our vessels are made from recycled glass and are designed to be
            re-used long after the candle is gone.
          </p>

          <h2 className="text-h3 font-heading font-semibold text-foreground">Sustainability</h2>
          <p>
            Every order ships in plastic-free, recyclable packaging. We&apos;re committed to
            continuous improvement — from reducing our studio&apos;s energy use to partnering
            with carbon-neutral couriers wherever possible. The planet matters. Full stop.
          </p>

          <div className="not-prose mt-10 p-6 bg-muted/50 border rounded-sm text-center">
            <p className="text-sm uppercase tracking-widest font-semibold mb-2">🕯️ Candle Care Tip</p>
            <p className="text-sm text-muted-foreground">
              Always trim your wick to 5mm before lighting. Let the wax pool reach the edges on
              the first burn to prevent tunnelling. Never burn for more than 4 hours at a time.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
