/* eslint-disable react/no-danger */
import React from 'react';

export const GoogleOptimizer: React.FC = () => (
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

            gtag('config', 'G-1931EEYEFW', { 'optimize_id': 'OPT-M76PGZ3'});
            `,
      }}
    />
  </>
);
