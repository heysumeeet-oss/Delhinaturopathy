import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Delhi Wellness Haven & Holistic Healing Centre';
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
          background: 'linear-gradient(to bottom right, #3A6351, #2C4B3D)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'serif',
          textAlign: 'center',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 20, opacity: 0.8, letterSpacing: '2px' }}>
          LUCKNOW NATUROPATHY
        </div>
        <div style={{ fontSize: 64, fontWeight: 'bold', lineHeight: 1.1, textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
          Holistic Healing Centre
        </div>
        <div style={{ display: 'flex', marginTop: 40, gap: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '50px', fontSize: 20 }}>🌿 Natural Cure</div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '50px', fontSize: 20 }}>🧘 Yoga</div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '50px', fontSize: 20 }}>💧 Detox</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
