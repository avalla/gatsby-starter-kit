import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import useSiteMetadata from "../hooks/use-site-metadata"

const StyledWrapper = styled.footer`
    @media screen and (max-width: 769px) {
      font-size: 14px;
    }
`
export default function Footer() {
  const site = useSiteMetadata()
  return (
    <StyledWrapper className="footer">
      <div className="content">
        <div className="columns is-mobile">
          <div className="column">
            <p className="has-text-grey-light">
              <Link to="/" className="has-text-grey-lighter">
                {`© ${new Date().getFullYear()} ${site.siteMetadata.title}`}
              </Link>
            </p>
          </div>
          <div className="column is-narrow has-text-grey">
            <Link to="/404" className="has-text-grey">Fake page</Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}
