import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'

const layout = ({children}) => {
  return (
      <html suppressHydrationWarning lang="en" className={` h-full antialiased`}>
        <body className="min-h-full flex flex-col ">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {" "}
            <Navbar/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    )
}

export default layout
