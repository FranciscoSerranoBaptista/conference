import { Container } from '@/components/Container'

export function Guide() {
  return (
    <section
      id="guide"
      aria-labelledby="guide-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
          <h2
            id="guide-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl"
          >
            YOUR GUIDE
          </h2>
          <div className="mt-10 lg:flex lg:items-start lg:gap-12">
            <div className="lg:flex-1">
              <h3 className="text-2xl font-semibold text-blue-900">
                Francisco Baptista
              </h3>
              <p className="mt-2 text-lg text-blue-700">
                Executive Coach & Self-Access Facilitator
              </p>
              <blockquote className="mt-6 text-xl italic text-blue-900 border-l-4 border-blue-600 pl-6">
                "After 15 years in corporate transformation,
                I discovered the real transformation happens inside.
                Now I help leaders find their center
                when everything around them is chaos."
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}