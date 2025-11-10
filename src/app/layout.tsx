import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/config/site'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name + ' - Sistema Colibri RO/AC | PDV Restaurantes',
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: 'index, follow',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: siteConfig.name + ' - Sistema Colibri RO/AC',
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name + ' - Sistema Colibri RO/AC',
    description: siteConfig.description,
  },
  other: {
    'theme-color': '#1E40AF',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default'
  }
}

// ID do Google Tag Manager
const GTM_ID = 'GTM-PFM5M889L'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Tag Manager */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  )
}