import { Hero } from '@/components/Hero'
import { Story } from '@/components/Story'
import { Promise } from '@/components/Promise'
import { Journey } from '@/components/Journey'
import { Fit } from '@/components/Fit'
import { Guide } from '@/components/Guide'
import { Details } from '@/components/Details'
import { Newsletter } from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Promise />
      <Journey />
      <Fit />
      <Guide />
      <Details />
      <Newsletter />
    </>
  )
}
