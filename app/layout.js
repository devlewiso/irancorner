'use client'; // Asegúrate de que esta línea esté al inicio del archivo

import Header from '../components/Header';
import { Analytics } from '@vercel/analytics/react';
import '../app/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>Iran's Corner</title>
      </head>
      <body>
        <div className="layout-container">
          <Header />
          <main className="content-container">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
