import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const fontPath = new URL('../../public/static/fonts/TYPEWR__.TTF', import.meta.url)

const font = fetch(fontPath).then(res => res.arrayBuffer())

const username = 'yonycalsin'

async function handler() {
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: '#333333',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          fontFamily: 'Typewriter',
        }}
      >
        <img
          alt="avatar"
          width="256"
          src={`https://github.com/${username}.png`}
          style={{
            borderRadius: 128,
            border: '5px solid #333333',
          }}
        />
        <p>github.com/{username}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Typewriter',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}

export default handler
