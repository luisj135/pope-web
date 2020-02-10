import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPost } from '../store/dataPost/action'

import Header from '../components/Header';
import Titile from '../components/Title';
import MiniVote from '../components/MiniVote';

const Passtrials = props => {
  return (
    <React.Fragment>
      <div className="content-header">
        <Header pathname="/"/>
      </div>
      <div className="container">
        <div className="row">
          <Titile>
            <h2>Previous Rulings</h2>
          </Titile>
        </div>
      </div>
      <MiniVote />
      
      <style jsx global>{`
        .container{
          font-family: 'Lato', sans-serif;
        }
        .container .content-header{
          position:realtive;
          width:100vw;
        }

        .content-header{
          height: 3rem;
        }

        .sidenav-overlay{
          z-index:8;
        }

      `}</style>
    </React.Fragment>
  )
};

Passtrials.getInitialProps = async ({ store, isServer }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Passtrials)