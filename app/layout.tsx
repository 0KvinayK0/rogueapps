import '../styles/globals.css';
import Head from 'next/head';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'RogueApps',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=HK+Nova:wght@500;700;800&family=Visuelt:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Navbar />
        <div style={{ paddingTop: '5rem' }}>{/* To account for the fixed navbar height */}</div>
        {children}
        <Footer />
      </body>
    </html>
  );
}