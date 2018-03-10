import Link from 'next/link'
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch'

/*
* This is contain the Body which is used in index page for showing the posts in that blog.
*/

export default class Body extends Component {

  render() {
    let child = null;
    //Checking if there is data or not, and show the correct response to the user.
    if(this.props.posts.status===true){
      child = <div className="uk-child-width-1-2@s uk-grid-match" uk-grid="true"> {this.props.posts.data.map((value) => {
        return (
        <div key={value.url}>
            <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                <h3 className="uk-card-title"><Link as={`/post/${value.url}`} href={`/post?id=${value.url}`} ><a>{value.title} {this.props.stars} </a></Link></h3>
                <p>{value.body}</p>
            </div>
        </div>
        );
      })}</div>;
    } else {
      child = <div className="error"><h3>No Posts are present. </h3><Link href="/post-new"><a className="uk-link-heading">Add Some Posts</a></Link></div>;
    }
    return (
          <div>
              {child}
                <style jsx>{`
                  error {
                    color: red;
                    margin-top: 30%; 
                  }
                  a:hover {
                    text-decoration: none;
                  }
              `}</style>
          </div>
        );
   }
}
