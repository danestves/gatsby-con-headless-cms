import * as React from "react"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <footer>Este es el footer</footer>
    </>
  )
}

export default Layout
