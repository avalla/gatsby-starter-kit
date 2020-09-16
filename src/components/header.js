import React, { useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import useSiteMetadata from "../hooks/use-site-metadata"

export default function Header() {
  const [active, setIsActive] = useState(false)
  const site = useSiteMetadata()
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="//placehold.it/300x55" alt={site.siteMetadata.title} width="300" height="55"/>
        </Link>
        <button
          type="button"
          className={classNames("navbar-burger burger is-link", active && "is-active")}
          aria-label="menu"
          aria-expanded="false"
          data-target="head-navbar"
          onClick={() => setIsActive(!active)}
        >
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </button>
      </div>
      <div
        id="head-navbar"
        className={classNames("navbar-menu", active && "is-active")}
      >
        <div className="navbar-end">
          <Link
            to="/404"
            className="navbar-item"
            activeClassName="is-active"
            partiallyActive={false}
          >
            404
          </Link>
        </div>
      </div>
    </nav>
  )
}
