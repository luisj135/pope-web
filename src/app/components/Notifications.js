import React from 'react';

const Notifications = (props) => {
  return (
    <React.Fragment>
        <div className="container">
            <div className="content-notifications">
                <div className="row">
                    <div className="col s3">
                        <p>Speak out. Be heard.</p>
                        <p>Be counted</p>
                    </div>
                    <div className="col s7">
                        <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
                    </div>
                    <div className="col s2 close">
                        <i className="fa fa-times"></i>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .content-notifications{
                background-color: #ebebeb;
                margin: 2rem 0rem;
            }

            .content-notifications .row{
                display:flex;
            }

            .content-notifications .row .close{
                display:inline-flex;
                justify-content: center;
                align-content: center;
                align-items: center;
                color: #333333;
            }

            .content-notifications .row .close i:hover{
                color:black;
                cursor:pointer;
            }
        `}</style>
    </React.Fragment>
  )
};

export default Notifications;
