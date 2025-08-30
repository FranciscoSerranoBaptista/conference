import { Container } from '@/components/Container'

export function Promise() {
  return (
    <section
      id="promise"
      aria-labelledby="promise-title"
      className="py-20 sm:py-32 bg-blue-50"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
          <h2
            id="promise-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl"
          >
            IN SIX SESSIONS, YOU WILL:
          </h2>
          <ul className="mt-10 space-y-6 text-xl leading-8 text-blue-900">
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm mr-4">
                ○
              </span>
              <span>Develop a reliable 60-second protocol to find your center</span>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm mr-4">
                ○
              </span>
              <span>Practice with real triggers in a safe environment</span>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm mr-4">
                ○
              </span>
              <span>Learn to maintain composure when others are activated</span>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm mr-4">
                ○
              </span>
              <span>Build a personal system that works under pressure</span>
            </li>
            <li className="flex">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm mr-4">
                ○
              </span>
              <span>Join a small group of practitioners on the same journey</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}