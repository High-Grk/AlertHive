import { Suspense } from 'react';
import './globals.css';

import Navbar from './components/navbar';
import FooterComponent from './components/footer';

export const metadata = {
  title: 'Alerthive Dashboard',
  description:
    'A emergency dashboard made with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-100">
        <Navbar />
        <Suspense>{children}</Suspense>
        <FooterComponent />
      </body>
    </html>
  );
}
