import * as React from 'react';
import App from '../components/App';
import Header from '../components/Header';
import Slide from '../components/slide';
import Notifications from '../components/Notifications';
import Titile from '../components/Title';
import MiniVote from '../components/MiniVote';

export default () => (
  <App>
    <React.Fragment>
      <div className="content-header">
        <Header pathname="#"/>
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
  </App>
);
