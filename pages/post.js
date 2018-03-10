import Link from 'next/link'
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch'
import Layout from '../components/layout'

/*
* Post page used to show the specific post
*/

export default class Post extends Component {

 static async getInitialProps ({ req, query }) {
    const isServer = !!req
    if (isServer) {
      //Return the data from the server if it is direct load from user
      return { posts: query }
    } else {
      // On the client, we should fetch the data remotely
      const res = await fetch(`/_posts/${query.id}`, {headers: {'Accept': 'application/json'}})
      const json = await res.json()
      return { posts: json }
    }
  }

  render() {
    return (
        <Layout>
            <article className="uk-article">
                <h1 className="uk-article-title">{this.props.posts.data.title}</h1>
                <p>{this.props.posts.data.body}</p>
            </article>
        </Layout>
        );
   }
}
