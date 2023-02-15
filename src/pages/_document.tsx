import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAnalyticsBase } from '../assets/tags/GoogleAnalyticsBase'
import { GoogleOptimizer } from '../assets/tags/GoogleOptimizer'

export default function Document() {  
  return (
    <Html lang="pt-br">
      <Head>
        <GoogleAnalyticsBase />
        <GoogleOptimizer />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
