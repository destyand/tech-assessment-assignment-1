import type { Metadata } from 'next';
import { NextDevTools } from 'next-devtools-widget';

import './globals.css';
import { ReduxProvider } from './shared/presentation/store/provider';

export const metadata: Metadata = { title: 'Orbit — Your next everyday essential', description: 'Discover smartphones and tablets at Orbit.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        {process.env.APP_ENV === 'development' && <NextDevTools />}
      </body>
    </html>
  );
}
