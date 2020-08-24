import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import RootLayout from './Layout';

function PageTemplate({ data: { mdx } }: any) {
  return (
    <RootLayout sidebarRoot={mdx.frontmatter.root}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </RootLayout>
  );
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        root
      }
      body
    }
  }
`;
export default PageTemplate;
