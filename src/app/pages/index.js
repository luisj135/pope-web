import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPost } from '../store/dataPost/action'

import Header from '../components/Header';
import Slide from '../components/slide';
import Notifications from '../components/Notifications';
import Titile from '../components/Title';
import MiniVote from '../components/MiniVote';

import { dataInitial } from '../components/dataInitial';


const PopApp = props => {
  useEffect(() => {
    const data = props.datainitial.postData;
    const lentitems = Object.keys(data).length;
    if(lentitems === 0){
      props.addPostInitialData(dataInitial);
    }
  }, [])

  return (
    <React.Fragment>
      <div className="content-header">
        <Header pathname="/"/>
        <Slide dataSel="pope"/>
      </div>
      <Notifications />
      <div className="container">
        <div className="row">
          <Titile>
            <h2>Previous Rulings</h2>
          </Titile>
        </div>
      </div>
      <MiniVote />
      <div className="container cont-new-post">
        <div className="row">
          <div className="col s12 m8 l8">
            <h3>Is there anyone else you would want us to add?</h3>
          </div>
          <div className="col s12 m4 l4">
            <div className="content-btn">
              <p>Submit a Name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-conent-block">
        <div className="row">
          <div className="col s12 m9 l9">
            <div className="content-links-nav">
              <a href="#">Terms and Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div className="col s12 m3 l3">
            <div className="social-links">
              <p>Folow Us</p>
              <p><i className="fa fa-facebook"></i></p>
              <p><i className="fa fa-twitter"></i></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          
        </div>
      </div>
      
      <style jsx global>{`
        .container{
          font-family: 'Lato', sans-serif;
        }
        .container .content-header{
          position:realtive;
          width:100vw;
        }

        .content-header{
          height: 50rem;
        }

        .sidenav-overlay{
          z-index:8;
        }

        .cont-new-post{
          padding: 1rem;
          background-image: url("../public/assets/images/default.png");
          background-repeat: no-repeat;
        }

        .cont-new-post .row{
          margin:0rem;
          padding:0rem;
        }

        .cont-new-post .row div:nth-child(2){
          margin: 0.5rem 0rem;
        }

        .cont-new-post h3{
          font-size: 15px;
          font-weight: 300;
          font-stretch: normal;
          font-style: normal;
          line-height: 0.8;
          letter-spacing: normal;
          text-align: left;
          color: #333333;
          margin: 1.8rem 0rem;
        }

        .content-btn {
          border: solid 1.5px #333333;
          display:flex;
          flex-direction:row;
          justify-content:center;
          align-content:center;
        }

        .content-links-nav{
          display:flex;
          flex-direction:row;
          justify-content:flex-start;
        }

        .content-links-nav a{
          margin-right:1rem;
          color:black;
        }

        .content-links-nav a:hover{
          text-decoration: underline;
        }

        .social-links{
          display:flex;
          flex-direction:row;
          justify-content:space-between;
        }

        .social-links p {
          margin:0rem;
        }

        .border-conent-block{
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px dotted #979797;
        }

      `}</style>
    </React.Fragment>
  )
}

PopApp.getInitialProps = async ({ store, isServer }) => {
  console.log(store)
  store.dispatch(addPost(dataInitial))
  //store.dispatch(addCount())
  return { isServer }
}

const mapStateToProps = (reducer) =>{
  return {
    datainitial: reducer.dataPost,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPostInitialData: bindActionCreators(addPost, dispatch),
    // startClock: bindActionCreators(startClock, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopApp)

