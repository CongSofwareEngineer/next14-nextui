import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/Styles/globals.css'
import React from 'react'
import StyledComponentsRegistry from '@/Components/RegistryApp'
import ReduxProvider from '@/Components/ReduxProvider'
import MyModalProvider from '@/Components/MyModal'
import NextUIProvider from '@/Components/NextUIProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <NextUIProvider>
            <ReduxProvider>
              <MyModalProvider>{children}</MyModalProvider>
            </ReduxProvider>
          </NextUIProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
