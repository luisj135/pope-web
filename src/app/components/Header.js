import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Navbar, NavItem, Icon } from 'react-materialize';

const Header = (props) => {
  return (
    <header>
      <div className="content-nav">
        <div className="container">
          <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="#">Rule of Thumb.</a>}
            menuIcon={<Icon>menu</Icon>}
            className="nav-menu"
            options={{
              draggable: true,
              edge: 'left',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
              preventScrolling: true
            }}
          >
            <NavItem href="/">
              Home
            </NavItem>
            <NavItem href={`${props.pathname}pass-trials`}>
              Past Trials
            </NavItem>
            <NavItem href={`${props.pathname}how-it-works`}>
              How It Works
            </NavItem>
            <NavItem href={`${props.pathname}login`}>
              Log In / Sign Up
            </NavItem>
            <NavItem href={`${props.pathname}search`}>
              <i className="material-icons">search</i>
            </NavItem>
          </Navbar>
        </div>
      </div>
      <style jsx >{`
        header{
          height:75px;
        }
        .content-nav{
          position:absolute;
          top:0rem;
          left:0rem;
          z-index:9;
          width:100%;
          height: 75px;
          background: rgb(51,51,51);
          background: linear-gradient(180deg, rgba(51,51,51,0.80015756302521) 0%, rgba(51,51,51,0.3715861344537815) 49%, rgba(51,51,51,0) 100%);
        }

        .brand-logo{
          font-size:1.5rem;
        }

        :global(.content-nav .container .nav-menu){
          background-color:transparent;
          border:none;
          box-shadow:none;
        }
      `}</style>
    </header>
    )
};

export default Header;
