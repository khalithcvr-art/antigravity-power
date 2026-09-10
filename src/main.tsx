import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { MotionConfig } from 'motion/react';
import { captureEarlyEnquiry } from './lib/earlyEnquiry';

captureEarlyEnquiry();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user"><App /></MotionConfig>
  </React.StrictMode>
);
