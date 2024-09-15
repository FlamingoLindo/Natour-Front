import './globals.css';

export const metadata = {
  title: 'NATOUR MASTER',
  description: 'Master plataform for Natour',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
