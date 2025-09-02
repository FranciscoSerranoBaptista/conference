import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function Details() {
  return (
    <section
      id="details"
      aria-labelledby="details-title"
      className="py-20 sm:py-32 bg-blue-50"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
          <h2
            id="details-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl"
          >
            CONFERENCE DETAILS
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Format</h3>
              <p className="mt-2 text-blue-700">Live group sessions via Zoom</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Duration</h3>
              <p className="mt-2 text-blue-700">6 monthly sessions, 90 minutes each</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Group Size</h3>
              <p className="mt-2 text-blue-700">Maximum 6 participants</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Investment</h3>
              <p className="mt-2 text-blue-700">€1,500 (payment plans available)</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Next Conference</h3>
              <p className="mt-2 text-blue-700">Starting Thursday, October 9<br />16:00 - 17:30</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Includes</h3>
              <ul className="mt-2 text-sm text-blue-700 space-y-1">
                <li>• Session recordings</li>
                <li>• Practice materials</li>
                <li>• Buddy system</li>
                <li>• Group support</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              id="apply"
              className="mt-16 max-w-2xl rounded-3xl bg-blue-600 px-8 py-12 text-center"
            >
              <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                BY INVITATION AND APPLICATION
              </h3>
              <p className="mt-4 text-xl text-blue-100">
                The Conference forms through careful selection.<br />
                Each group becomes its own unique flock.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  href="mailto:francisco@franciscobaptista.com?subject=Conference of Birds Application"
                  className="bg-white text-blue-900 hover:bg-blue-50"
                >
                  Apply for the Conference
                </Button>
              </div>
              <p className="mt-6 text-blue-200">
                or contact Francisco directly:{' '}
                <a href="mailto:francisco@franciscobaptista.com" className="underline text-white">
                  francisco@franciscobaptista.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}