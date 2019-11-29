import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './index.css'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Container>{children()}</Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object.isRequired,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
