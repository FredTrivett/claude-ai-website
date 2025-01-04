import { copernicus, serene, tyrene } from './fonts'
import './globals.css'
import Nav from "@/components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${copernicus.variable} ${serene.variable} ${tyrene.variable}`}>
      <body className="bg-[#FAFAF8]">
        <Nav />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
