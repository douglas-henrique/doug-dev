import Image from 'next/image'
import douglas from '@/app/douglas.png'

export function Avatar({ size = 32 }: { size?: number }) {
  return (
    <span
      className="relative shrink-0 overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      <Image
        src={douglas}
        alt=""
        fill
        sizes={`${size}px`}
        className="object-cover object-[center_18%]"
      />
    </span>
  )
}
