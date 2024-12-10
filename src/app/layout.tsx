import { copernicus, serene, tyrene } from './fonts'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${copernicus.variable} ${serene.variable} ${tyrene.variable}`}>
      <body className="bg-[#FAFAF8]">{children}</body>
    </html>
  )
}
