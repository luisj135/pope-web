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
        <Slide />
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
      <div className="container">
        <div className="row">
          <div className="col s1">1</div>
          <div className="col s1">2</div>
          <div className="col s1">3</div>
          <div className="col s1">4</div>
          <div className="col s1">5</div>
          <div className="col s1">6</div>
          <div className="col s1">7</div>
          <div className="col s1">8</div>
          <div className="col s1">9</div>
          <div className="col s1">10</div>
          <div className="col s1">11</div>
          <div className="col s1">12</div>
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

      `}</style>
    </React.Fragment>
  </App>
);
