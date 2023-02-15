/* eslint-disable react/no-danger */
import React from 'react';

export const GoogleAnalyticsBase: React.FC = () => (
  <>
    <script
      async
      src={`https://www.googleoptimize.com/optimize.js?id=OPT-M76PGZ3`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '', { 'optimize_id': 'OPT-M76PGZ3'});
            `,
      }}
    />
  </>
);
