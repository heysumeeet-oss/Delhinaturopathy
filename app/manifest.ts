import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lucknow Naturopathy & Holistic Healing Centre',
    short_name: 'Lucknow Naturopathy',
    description: 'Top-rated Naturopathy Centre in Lucknow for natural healing and detox.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f5f4', // stone-50
    theme_color: '#3A6351', // nature-green
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
