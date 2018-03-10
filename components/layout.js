import Link from 'next/link'
import Head from './head'
import Nav from './nav'
import React from 'react';
import Title from './title'

/*
* This is the main layout of the blog. It will extended by different pages.
*/

export default ({title = 'Awesome Blog', children}) => (
  <div className="uk-panel">
  <Head title={title} />
  <div className="body">
    <Title name='My Awesome Blog' />
    <div className="child-body">{children}</div>
  </div>
  <div className="bottom-nav">
      <Nav />
  </div>
       <style jsx>{`
       :global(body) {
         margin: 0;
       }
       .body {
         height:100%;
         text-align: center;
         margin-bottom: 5em;
       }
       .child-body {
        margin-left: 13%;
        margin-right: 13%;
       }
       .bottom-nav {
        position:fixed;
        bottom:0;
        width: 100%;
       }
   `}</style>
  </div>
)
