import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'
import { SITE_NAME } from '@/lib/site'
import { SITE_TAGLINE_EN } from '@/lib/seo'

export const alt = SITE_NAME
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/jpeg'
export const runtime = 'nodejs'

export default async function Image() {
  const photo = await readFile(join(process.cwd(), 'public/douglas.png'))
  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`

  const png = new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#111111',
          color: '#f5f5f5'
        }}
      >
        <img
          src={photoSrc}
          width={520}
          height={630}
          style={{
            width: 520,
            height: 630,
            objectFit: 'cover',
            objectPosition: 'center 18%'
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 64px',
            width: 680
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 1.1
            }}
          >
            {SITE_NAME}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 26,
              color: '#a3a3a3',
              lineHeight: 1.4
            }}
          >
            {SITE_TAGLINE_EN}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )

  const jpeg = await sharp(Buffer.from(await png.arrayBuffer()))
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer()

  return new Response(jpeg, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  })
}
