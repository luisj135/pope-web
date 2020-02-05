import React from 'react';

const Notifications = (props) => {
  return (
    <React.Fragment>
        <div className="content-title">
            { props.children }
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
