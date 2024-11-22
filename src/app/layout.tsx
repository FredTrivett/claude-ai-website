import { copernicus } from './fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${copernicus.variable}`}>
      <body>{children}</body>
    </html>
  )
}
