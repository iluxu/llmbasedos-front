import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'LLMBasedOS Token';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #000000 0%, #0c4a6e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            LB
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            LLMBasedOS
          </div>
        </div>
        <div
          style={{
            fontSize: '36px',
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          The native token for a sovereign agent operating system
        </div>
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: '40px',
          }}
        >
          Utility-first. Standard-first. Hype-last.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
