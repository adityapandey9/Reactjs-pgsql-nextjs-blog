// import Head from './head'
import Link from 'next/link'
import Router from 'next/router'
import React, {Component} from 'react';

/*
* This is the bottom navigation in the website
*/

class Nav extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => {
    switch(index){
      case 0:
             Router.push('/');
             break;
      case 1:
             Router.push('/post-new');
             break;
      case 2:
             Router.push('/fab');
             break;
    }
    this.setState({selectedIndex: index})
  };

  render() {
    return (
      <div >
        <div className="uk-card uk-card-default uk-card-body shadow">
            <div className="uk-flex uk-flex-center upit">
              <ul className="uk-iconnav">
                <li><span className="up-icon"><svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65" /> <polygon points="15 4 18 4 18 7 17 7 17 5 15 5" /> <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19" /></svg></span>
                <Link href='/'><a>Home</a></Link></li>
                <li><span className="up-icon"><svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" strokeWidth="1.1" cx="9.5" cy="9.5" r="9" /> <line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14" /> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5" /></svg></span>
                <Link href='/post-new'><a>Add a post</a></Link></li>
              </ul>
            </div>
        </div>
        <style jsx>{`
        .shadow {
          background: #fff;
          color: #666;
          box-shadow: 0 -5px 15px rgba(0,0,0,.08);
          padding-bottom: 5px;
          padding-top: 10px;
        }
        li {
          margin: 10px;
          margin-top:0px;
          margin-bottom: 0px;
        }
        a:hover{
          text-decoration:none;
        }
        a:active {
          color: rgba(0,0,138,0.3);
        }
        .up-icon{
          color: rgba(0, 0, 0, 0.54);
          position: relative;
          display: block;
          user-select: none;
          transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
          width: 100%;
          text-align: center;
        }
       `}</style>
      </div>
    );
  }
}

export default Nav
