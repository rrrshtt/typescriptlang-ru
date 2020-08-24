import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Menu, Row } from 'antd';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';

interface Props {
  siteTitle: string
}

// eslint-disable-next-line react/prefer-stateless-function
export default class extends Component<Props> {
  render() {
    const { siteTitle } = this.props;
    return (
      <Row>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/docs/get-started/introduction/">{siteTitle}</Link>
          </Menu.Item>
          <Menu.Item>
            <a
              href="https://github.com/jannikbuschke/gatsby-antd-docs"
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined />
              GitHub
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="https://twitter.com/jannikbuschke" target="_blank" rel="noreferrer">
              <TwitterOutlined />
              Twitter
            </a>
          </Menu.Item>
        </Menu>
      </Row>
    );
  }
}
