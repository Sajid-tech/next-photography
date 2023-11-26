import Hero from '@/components/Hero'
import Instagram from '@/components/Instagram'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'
import Image from 'next/image'

export default function Home() {
  return (
    <div>

      <Hero heading="Photoverse" message="I capture momemts in nature and keep them alive" />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  )
}
