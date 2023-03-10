/* eslint-disable react/no-danger */
import React from 'react';

export const GoogleAnalyticsBase: React.FC = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-1931EEYEFW`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1931EEYEFW');
            `,
      }}
    />
  </>
);
