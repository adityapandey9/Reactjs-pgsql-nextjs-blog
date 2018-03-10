import Link from 'next/link'
import Layout from '../components/layout'
import React, {Component} from 'react';
import Body from '../components/body';
import fetch from 'isomorphic-fetch'

/*
* This is the index page of the blog.
*/

export default class Index extends Component{

  static async getInitialProps ({ req, query }) {
    const isServer = !!req
    if (isServer) {
      //Return the data from the server if it is direct load from user
      return { posts: query.itemData }
    } else {
      // On the client, we should fetch the data remotely
      const res = await fetch('/_posts', {headers: {'Accept': 'application/json'}})
      const json = await res.json()
      return { posts: json }
    }
  }

  render() {
        return (
        <Layout title='Home - Awesome blog'>
          <Body posts={this.props.posts} />
        </Layout>
      )
  }
} 
