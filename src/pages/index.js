import React from "react"
import Layout from "../layouts/layout"


export default function Home() {
  return (
    <Layout title="Title">
      <div className="container is-widescreen has-text-centered">
        <h1 className="title has-text-primary">
          Welcome to Starter Kit
        </h1>
        <h2 className="subtitle is-6">
          Start to customize stuff!
        </h2>
      </div>
    </Layout>
  )
}
