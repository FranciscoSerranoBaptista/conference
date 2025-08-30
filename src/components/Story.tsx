import { Container } from '@/components/Container'

export function Story() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2
            id="story-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl"
          >
            THE ANCIENT WISDOM
          </h2>
          <div className="mt-6 space-y-6 text-2xl leading-8 text-blue-900">
            <p>
              Thirty birds set out to find the mythical Simurgh.
              After crossing seven valleys of transformation,
              they discovered the truth:
            </p>
            <p className="font-semibold">
              "Si murgh" means "thirty birds" in Persian.<br />
              They were what they sought.
            </p>
            <p className="text-xl font-medium">
              You already have what you're looking for.<br />
              You just need to remember how to access it.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}