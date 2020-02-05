import React from 'react';
import Link from 'next/link';
import Image from '../components/Image'

const Slide = (props) => {
  return (
    <React.Fragment>
      <div className="content-slide">
        <div className="content-slide-image">
          <Image 
            path="/assets/images/pope/"
            name="pope"
            format="png"
            alt="pope"
          />
          <div className="content-slide-vote">
            <div className="container">
              <div className="row">
                <div className="col s10 offset-s1 m6 l6 content-bg-col">
                  <div className="content-description">
                    <h4>What’s your opinion on</h4>
                    <h2>Pope Francis?</h2>
                    <p className="col s10">He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
                  </div>
                  <div className="col s10 content-link">
                    <a href="https://en.wikipedia.org/wiki/Pope" target="_blank">
                      <i className="fa fa-wikipedia-w"></i>
                      <span>More information</span>
                    </a>
                  </div>
                  <div className="col s10 txt">
                    <h3>What’s Your Verdict?</h3>
                  </div>
                  <div className="content-vote-items">
                    <div className="row">
                      <div className="col s6 icon like-link">
                        <i className="fa fa-thumbs-o-up"></i>
                      </div>
                      <div className="col s6 icon dislike-link">
                        <i className="fa fa-thumbs-o-down"></i>
                      </div>
                    </div>   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-vote-time">
            <div className="time-txt">
              <h6>CLOSING IN</h6>
            </div>
            <div className="time-days">
              <p><span>22</span>days</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content-slide{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50rem;
        }

        .content-slide .content-slide-image{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
          color: white;
          max-height: 100%;
        }

        .content-slide-vote{
          position:absolute;
          width: 100%;
          height: initial;
        }

        .content-bg-col {
          background-color: rgba(91,92,96, 0.5);
          border-radius: 5px;
          color: white;
          font-family: sans-serif;
          line-height: 1.5;
          max-width: 50%;
          padding:0rem;
        }

        .content-bg-col a {
          color: #bf0222;
        }
        
        @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
          .content-bg-col {
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            background-color: rgba(91,92,96, 0.5);  
          }
        }

        .content-bg-col .content-description, .content-bg-col .content-link , .content-bg-col .txt{
          padding: 0.8rem 2rem;
        }

        .content-bg-col .txt{
          padding-bottom: 2rem;
        }

        .content-bg-col h4{
          font-size: 0.9rem;
          font-weight: 300;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.19;
          letter-spacing: normal;
          text-align: left;
        }

        .content-bg-col h2{
          font-size: 2.5rem;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1;
          letter-spacing: normal;
          text-align: left;
          color: #ffffff;
        }

        .content-bg-col h3{
          font-size: 0.7rem;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.2;
          letter-spacing: normal;
          text-align: left;
          color: #ffffff;
          margin: 0rem;
          padding: 0rem;
        }

        .content-bg-col p{
          padding:0rem;
        }

        .content-link{
          font-size: 7px;
          font-weight: 300;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.71;
          letter-spacing: normal;
          text-align: left;
          color: #ffffff;
        }

        .content-link a{
          color: #ffffff;
          padding: 0.5rem 0rem;
        }

        .content-link a:hover{
          color: rgba(91,92,96, 1);
          text-decoration:underline;
          cursor: pointer;
        }

        .content-link a i{
          margin: 0.1rem;
          
        }

        .content-vote-items .row{
          margin: 0rem;
        }

        .content-vote-items .icon{
          color:white;
          display:flex;
          flex-direction:row;
          justify-content:center;
          align-content:center;
          align-items:center;
        }

        .content-vote-items .icon i{
          font-size: 1.5rem;
        }

        .content-vote-items .dislike-link{
          height: 2.5rem;
          background-color: #ffad1d;
        }

        .content-vote-items .dislike-link:hover i{
          color: #1cbbb4;
        }

        .content-vote-items .like-link{
          height: 2.5rem;
          background-color: #1cbbb4;
        }

        .content-vote-items .like-link:hover i{
          color: #ffad1d;
        }

        .content-vote-time{
          position:absolute;
          bottom: 0;
          left: 0;
          width:100%;
          display:flex;
          flex-direction:row;
          height:25px;
        }  

        .content-vote-time .time-txt{
          background-color: #ada79f;
          color:white;
          width:35%;
          position:relative;
        }

        .content-vote-time .time-days{
          background-color: #ffffff;
          width:65%;
          padding:0rem 0.5rem;
        }

        .time-txt:after, .time-txt:before{
          left: 100%;
          top: 50%;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }

        .time-txt:after {
          border-color: transparent;
          border-left-color: transparent;
          border-width: 7px;
          margin-top: -7px;
        }

        .time-txt:before {
          border-color: transparent;
          border-left-color: #a69f97;
          border-width: 7px;
          margin-top: -7px;
        }

        .time-txt h6{
          font-size: 13px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.62;
          letter-spacing: normal;
          text-align: left;
          color: #ffffff;
          display:flex;
          flex-direction:row;
          justify-content: flex-end;
          align-content:center;
          align-items:center;
          height: 100%;
          padding: 0 5px;
          margin:0px;
        }

        .content-vote-time .time-days p{
          height:100%;
          margin: 0px;
          font-size: 18px;
          font-weight: 300;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.36;
          letter-spacing: normal;
          text-align: left;
          color: #464646;
          display:flex;
          flex-direction:row;
          justify-content: flex-start;
          align-content:center;
          align-items:center;
          opacity: 0.8;
        }

        .content-vote-time .time-days p span{
          color: #464646;
          padding: 0rem 0.5rem;
          opacity: 1;
        }
      `}</style>
    </React.Fragment>
  )
};

export default Slide;
