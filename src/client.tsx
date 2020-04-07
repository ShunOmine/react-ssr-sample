import React from 'react';
import { hydrate } from 'react-dom';
import { CountUp } from './CountUp';

hydrate(
  <CountUp />,
  document.getElementById('app'),
);
