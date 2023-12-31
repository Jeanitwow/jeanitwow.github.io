module.exports = {
    ArticleTemplateQuery: `
        query ArticleTemplateQuery {
            allArticle(sort: {date: DESC}) {
                articles: nodes {
                    banner {
                        alt
                        caption
                        src {
                            childImageSharp {
                                gatsbyImageData(width: 660, height: 400, placeholder: BLURRED)
                            }
                        }
                    }
                    body
                    categories
                    date(formatString: "YYYY-MM-DD")
                    description
                    id
                    keywords
                    slug
                    title
                    readingTime {
                        text
                      }
                }
            }
        }
    `,
};
