import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const GenresPage = ({
                    data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
                  }) => (
  <section className="section">
    <Helmet title={`Genres | ${title}`} />
    <div className="container content">
      <div className="columns">
        <div
          className="column is-10 is-offset-1"
          style={{ marginBottom: '6rem' }}
        >
          <h1 className="title is-size-2 is-bold-light">Genres</h1>
          <ul className="taglist">
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default GenresPage

export const genrePageQuery = graphql`
  query GenresQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___genres) {
        fieldValue
        totalCount
      }
    }
  }
`
