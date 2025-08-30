import { Container } from '@/components/Container'

export function Journey() {
  const sessions = [
    'Session 1: The Geography of Self',
    'Session 2: The Conductor\'s Stance',
    'Session 3: Somatic Self-Access',
    'Session 4: Holding the Paradox',
    'Session 5: Self Under Pressure',
    'Session 6: Your 60-Second Protocol',
  ]

  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
          <h2
            id="journey-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl"
          >
            THE CONFERENCE CURRICULUM
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-blue-100"
              >
                <h3 className="text-lg font-semibold text-blue-900">
                  {session}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-10 text-xl text-blue-900">
            <p className="font-medium">
              90 minutes per session. Weekly meetings. Maximum 6 participants.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}