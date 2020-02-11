import React from 'react';
import ItemVote from '../components/ItemVote';
import { dataInitial as items } from '../components/dataInitial';

const Notifications = (props) => {
  return (
    <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="content-grid">
              {
                items.map((item, k) => {
                  return (
                    <div className="col s12 m6 l6" key={k}>
                      <ItemVote 
                        dataItem = {item}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <style jsx>{`
            :global(.content-title h2){
                font-size: 40px;
                font-weight: 300;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.2;
                letter-spacing: normal;
                text-align: left;
                color: #333333;
            }
        `}</style>
    </React.Fragment>
  )
};

export default Notifications;
