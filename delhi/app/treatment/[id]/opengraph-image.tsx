import { ImageResponse } from 'next/og';
import { TREATMENTS } from '@/lib/constants';

export const runtime = 'edge';

export const alt = 'Treatment Details';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string } }) {
  const treatment = TREATMENTS.find((t) => t.id === params.id);
  const title = treatment ? treatment.title : 'Natural Treatment';
  const desc = treatment ? treatment.shortDescription : 'Holistic Healing in Delhi';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #3A6351, #2C4B3D)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'serif',
          padding: '80px',
        }}
      >
        <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '10px 20px',
            borderRadius: '50px',
            fontSize: 20,
            marginBottom: 30,
            fontFamily: 'sans-serif'
        }}>
            🌿 Delhi Wellness Haven
        </div>
        <div style={{ fontSize: 72, fontWeight: 'bold', lineHeight: 1.1, marginBottom: 20 }}>
          {title}
        </div>
        <div style={{ fontSize: 30, opacity: 0.9, fontFamily: 'sans-serif', maxWidth: '900px', lineHeight: 1.4 }}>
          {desc.length > 100 ? desc.substring(0, 100) + '...' : desc}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
