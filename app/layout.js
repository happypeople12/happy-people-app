import './globals.css';

export const metadata = {
  title: 'Happy People',
  description: 'Твоя жизнь — твоя миссия',
  manifest: '/manifest.webmanifest',
  icons: { icon: '/icon-512.png', apple: '/apple-icon.png' },
  openGraph: {
    title: 'Happy People',
    description: 'Ежедневное слово, молитва, журнал и путь к призванию.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}
