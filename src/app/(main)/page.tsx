import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conference of the Birds — September 2026',
  description:
    'A six-month peer cohort for senior leaders at the achiever ceiling. Eight sessions. Six to twelve directors and above. The next cohort begins September 2026.',
}

export default function Home() {
  const paymentLink = process.env.NEXT_PUBLIC_CONFERENCE_PAYMENT_LINK
  if (!paymentLink?.startsWith('https://'))
    throw new Error('NEXT_PUBLIC_CONFERENCE_PAYMENT_LINK must be an https:// URL')

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#F6F2EA', color: '#111111', fontFamily: 'var(--font-inter)' }}
    >
      <main className="mx-auto max-w-2xl px-6 py-24 space-y-20">

        {/* 1. Hero */}
        <section className="space-y-4">
          <h1
            className="text-4xl leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            The strategy that built your career is now running it.
          </h1>
          <p className="text-lg" style={{ color: '#8A8A8A' }}>
            Conference of the Birds. Eight sessions. September 2026.
          </p>
        </section>

        {/* 2. Reframe */}
        <section className="space-y-4 text-base leading-relaxed">
          <p>
            Most leadership development assumes something is missing. This work
            assumes the opposite. What built your career is still running —
            precise, persistent, and invisible until it isn&apos;t.
          </p>
          <p>You do not add anything here. You see something that was already there.</p>
        </section>

        {/* 3. Arc */}
        <section className="space-y-10">
          <div className="space-y-3">
            <h2
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-dm-sans)', color: '#8A8A8A' }}
            >
              Witness
            </h2>
            <p className="text-base leading-relaxed">
              The early sessions bring the pattern into view. Not as insight or
              theory, but as something you recognise — something you can watch
              yourself doing in real time. The recognition is not comfortable.
              It is relieving.
            </p>
          </div>
          <div className="space-y-3">
            <h2
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-dm-sans)', color: '#8A8A8A' }}
            >
              Descent
            </h2>
            <p className="text-base leading-relaxed">
              The middle sessions go underneath the pattern. The question stops
              being why do I do this and becomes what would I be without it.
              This is the hardest part. It is also where the work becomes real.
            </p>
          </div>
          <div className="space-y-3">
            <h2
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-dm-sans)', color: '#8A8A8A' }}
            >
              Return
            </h2>
            <p className="text-base leading-relaxed">
              You return to the same role, the same organisation, the same
              relationships. What has changed is where you are standing when
              you look at them.
            </p>
          </div>
        </section>

        {/* 4. What is included */}
        <section className="space-y-4">
          <h2
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-dm-sans)', color: '#8A8A8A' }}
          >
            What is included
          </h2>
          <p className="text-base leading-relaxed">
            Eight sessions over six months, roughly fortnightly, ninety minutes
            each, with a group of six to twelve senior leaders meeting
            virtually. Before the cohort begins, each participant completes a
            developmental profile and a one-to-one intake conversation with
            Francisco. Between sessions there are short guided practices, fifteen
            to twenty minutes. After the cohort ends, participants join a standing
            alumni community. There are no recordings. Presence requires
            impermanence.
          </p>
        </section>

        {/* 5. Who this is for */}
        <section className="space-y-4">
          <h2
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-dm-sans)', color: '#8A8A8A' }}
          >
            Who this is for
          </h2>
          <p className="text-base leading-relaxed">
            Directors and above who have run a high-performance strategy to its
            ceiling and sense there is a layer underneath it they have not yet
            seen. Most participants have done prior development work. They are
            not looking for the next framework. They are looking for what the
            frameworks could not reach.
          </p>
          <p className="text-base leading-relaxed">
            It is not right for someone in acute crisis who needs immediate
            stabilisation, for someone seeking action plans or models to take
            back to the office, or for someone unwilling to be seen by peers.
            The group is not incidental to the work.
          </p>
        </section>

        {/* 6. About Francisco */}
        <section className="space-y-4">
          <h2
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-dm-sans)', color: '#8A8A8A' }}
          >
            About Francisco
          </h2>
          <p className="text-base leading-relaxed">
            Francisco Baptista is an ICF PCC executive coach who has worked
            with 324 leaders across 14 countries. His background is in
            corporate leadership, which is why clients report that the work
            does not feel like coaching. He keeps extensive notes. The
            developmental model is his own.
          </p>
        </section>

        {/* 7. Investment + primary CTA */}
        <section className="space-y-6">
          <p className="text-base leading-relaxed">
            The investment is &euro;2,950. This is set deliberately under the
            standard European corporate card threshold, which means the
            decision stays with you and not with procurement.
          </p>
          <a
            href={paymentLink}
            className="inline-block px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              backgroundColor: '#111111',
              color: '#F6F2EA',
            }}
          >
            Reserve your place
          </a>
        </section>

        {/* 8. Corporate brief */}
        <section>
          <p className="text-sm leading-relaxed" style={{ color: '#8A8A8A' }}>
            If your organisation requires documentation for an internal approval
            process,{' '}
            <a
              href="/conference-programme-brief.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              the programme brief is here
            </a>
            .
          </p>
        </section>

      </main>
    </div>
  )
}
