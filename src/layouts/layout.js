import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/style.scss"

export default function Layout({ children, title, description }) {
  return (
    <>
      <SEO title={title} description={description} />
      <div className="container is-widescreen">
        <Header/>
      </div>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string
}