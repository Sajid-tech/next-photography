
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Provider from '@/components/Provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Photoverse',
  description: 'nextjs showcase  photo ',
}

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={inter.className}>

        <Provider  >
          <Navbar />
          {children}
        </Provider>

      </body>
    </html>
  )
}
