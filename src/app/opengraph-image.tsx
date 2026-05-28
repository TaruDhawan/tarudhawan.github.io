import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const contentType = 'image/png'
export const size = { width: 1200, height: 630 }

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1a1410',
          padding: '72px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(201,151,58,0.18) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            display: 'flex',
          }}
        />

        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '480px',
            height: '480px',
            borderRadius: '9999px',
            background:
              'radial-gradient(circle, rgba(196,105,122,0.22) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Top: name + title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#c9973a',
              display: 'flex',
            }}
          >
            PORTFOLIO · TARUDHAWAN.NETLIFY.APP
          </div>

          <div
            style={{
              fontSize: '76px',
              fontWeight: 700,
              color: '#f0e8de',
              lineHeight: 1.0,
              display: 'flex',
            }}
          >
            Taru Dhawan
          </div>

          <div
            style={{
              fontSize: '28px',
              fontWeight: 400,
              color: '#8a7a6c',
              display: 'flex',
            }}
          >
            Principal TPM · turning $400M complexity into org-wide impact
          </div>
        </div>

        {/* Bottom: stat chips + url */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            position: 'relative',
          }}
        >
          {/* Stat chips */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              { label: 'COGS Portfolio', value: '$400M' },
              { label: 'Manual Hrs Saved', value: '240K+' },
              { label: 'Years in Tech', value: '15+' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  backgroundColor: 'rgba(201,151,58,0.10)',
                  border: '1px solid rgba(201,151,58,0.25)',
                  borderRadius: '12px',
                  padding: '16px 24px',
                }}
              >
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#c9973a',
                    display: 'flex',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#8a7a6c',
                    display: 'flex',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* URL watermark */}
          <div
            style={{
              fontSize: '15px',
              color: 'rgba(138,122,108,0.7)',
              fontWeight: 500,
              display: 'flex',
            }}
          >
            tarudhawan.netlify.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
