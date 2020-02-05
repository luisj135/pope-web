import React from 'react';
import Image from '../components/Image';

const Notifications = (props) => {
  return (
    <React.Fragment>
        <div className="content-items">
            <div className="content-images">
                <Image 
                    path="/assets/images/pope/"
                    name="pope"
                    format="png"
                    alt="pope"
                />
            </div>
            <div className="content-block-content">
                <div className="container">
                    <div className="row">
                        <div className="content-item-vote">
                        
                        </div>
                        <div className="content-title">
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="content-description">
                        
                        </div>
                    </div>
                    <div className="row">
                            <div className="content-btn">
                        
                        </div>
                        <div className="content-time">
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="content-votes-bar">
                            <div className="content-like">
                            
                            </div>
                            <div className="content-dislike">
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            
        `}</style>
    </React.Fragment>
  )
};

export default Notifications;
