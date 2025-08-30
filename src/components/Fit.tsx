import { Container } from '@/components/Container'

export function Fit() {
  const forYou = [
    'You understand parts/Self conceptually but struggle with application',
    'You lose yourself to stress despite knowing better',
    'You\'re ready to practice, not just discuss theory',
    'You can commit to 6 sessions plus daily practice',
    'You want practical tools that work in real life',
  ]

  const notForYou = [
    'You\'re in acute crisis or major life transition',
    'You\'re seeking therapy rather than coaching',
    'You only want intellectual understanding',
    'You can\'t commit to the full journey',
  ]

  return (
    <section
      id="fit"
      aria-labelledby="fit-title"
      className="py-20 sm:py-32 bg-blue-50"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-medium tracking-tighter text-blue-900 sm:text-4xl">
                THIS IS FOR YOU IF:
              </h2>
              <ul className="mt-8 space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-green-600 font-bold mr-3">
                      ✓
                    </span>
                    <span className="text-lg text-blue-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl font-medium tracking-tighter text-blue-900 sm:text-4xl">
                THIS IS NOT FOR YOU IF:
              </h2>
              <ul className="mt-8 space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-red-600 font-bold mr-3">
                      ✗
                    </span>
                    <span className="text-lg text-blue-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}