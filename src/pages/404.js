import React from "react"

import Layout from "../layouts"

export default function NotFoundPage() {
  return (
    <Layout title="404: Not found">
      <div className="container is-widescreen has-text-centered">
        <h1 className="title has-text-primary">NOT FOUND</h1>
        <p className="subtitle">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
    </Layout>
  )
}

