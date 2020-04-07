import React from 'react';
import { renderToString } from 'react-dom/server';
import { CountUp } from './CountUp';

export const ssr = () => (`
  <html>
    <head>
      <title>CountUp</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <div id="app">
        ${renderToString(<CountUp />)}
      </div>
    </body>
  </html>
`);
