import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Delhi Naturopath & Holistic Healing Centre',
    short_name: 'Delhi Naturopath',
    description: 'Top-rated Naturopathy Centre in Delhi for natural healing and detox.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F7F7', // light-gray
    theme_color: '#2E5A88', // primary-blue
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
