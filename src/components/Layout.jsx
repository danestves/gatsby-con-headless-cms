import * as React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <header>este es el header</header>

      {children}

      <footer>Este es el footer</footer>
    </>
  )
}

export default Layout
