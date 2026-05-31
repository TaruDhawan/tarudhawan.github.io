import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tarudhawan.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Taru Dhawan',
    default: 'Taru Dhawan — Principal TPM · Microsoft',
  },
  description:
    'Principal Technical Program Manager at Microsoft who governs a $400M COGS portfolio, ships org-wide AI systems, and turns complexity into clarity for EVP-level decisions.',
  keywords: [
    'Taru Dhawan',
    'Principal TPM',
    'Technical Program Manager',
    'Microsoft',
    'AI Infrastructure',
    'Cloud Cost Governance',
    'OASIS AI',
    'Office Product Group',
    'Seattle',
  ],
  authors: [{ name: 'Taru Dhawan', url: 'https://www.linkedin.com/in/tarudhawan/' }],
  creator: 'Taru Dhawan',
  openGraph: {
    title: 'Taru Dhawan — Principal TPM · Microsoft',
    description:
      'Principal TPM governing a $400M COGS portfolio, shipping AI systems that reduced on-call effort by 90%, and raising the bar across Microsoft AI & Office Product Group.',
    url: siteUrl,
    siteName: 'Taru Dhawan',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taru Dhawan — Principal TPM · Microsoft',
    description:
      'Principal TPM governing a $400M COGS portfolio, shipping AI systems that reduced on-call effort by 90%, and raising the bar across Microsoft AI & Office Product Group.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf7f2' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1410' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Taru Dhawan',
  jobTitle: 'Principal Technical Program Manager',
  worksFor: {
    '@type': 'Organization',
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
  },
  url: siteUrl,
  sameAs: ['https://www.linkedin.com/in/tarudhawan/'],
  description:
    'Principal TPM at Microsoft governing a $400M COGS portfolio and shipping org-wide AI systems across Office Product Group.',
  knowsAbout: [
    'Technical Program Management',
    'AI Infrastructure',
    'Cloud Cost Governance',
    'Agile Transformation',
  ],
  alumniOf: [
    { '@type': 'Organization', name: 'Adidas' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  )
}
