import React from 'react';
import Image from '../components/Image';

const Notifications = (props) => {
    const decripmini = props.dataItem.description.substring(0,120)
  return (
    <React.Fragment>
        <div className="content-items">
            <div className="content-images mini-images">
                {
                    props.dataItem.images.map((ImaItem)=>{
                        return(
                            <Image 
                                path={`/assets/images/${ImaItem.path}/`}
                                name={ImaItem.mini}
                                format="png"
                                alt={ImaItem.mini}
                            />
                        )
                    })
                }
            </div>
            <div className="gradimg"></div>
            <div className="content-block-content">
                <div className="content-txt-block">
                    <div className="content-row">
                        <div className="content-item-vote">
                            <div className="col s6 icon like-link">
                                <i className="fa fa-thumbs-o-up"></i>
                            </div>
                            <div className="col s6 icon dislike-link">
                                <i className="fa fa-thumbs-o-down"></i>
                            </div>
                        </div>
                        <div className="content-title">
                            { props.dataItem.title}
                        </div>
                    </div>
                    <div className="content-row">
                        <div className="content-description">
                            { decripmini }
                        </div>
                    </div>
                    <div className="content-row">
                        <div className="content-btn">
                            <a href={props.dataItem.slug}>View Full Report</a>
                        </div>
                        <div className="content-time">
                            <h6>1 month ago <br/> in Business</h6>
                        </div>
                    </div>
                    <div className="content-row">
                        <div className="content-votes-bar">
                            <div className="content-like">
                                <i className="fa fa-thumbs-o-up"></i>
                                <span>{props.dataItem.vote.like}</span>
                            </div>
                            <div className="content-dislike">
                                <i className="fa fa-thumbs-o-down"></i>
                                <span>{props.dataItem.vote.dislike}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .content-items{
                position:relative;
                margin-bottom:1.25rem;
            }

            :global(.content-items .mini-images img){
                height: 26.2rem;
            }

            .content-items .mini-images {
                display:flex;
                flex-direction:row;
                justify-content:flex-start;
                overflow:hidden;
                align-content:flex-start;
                align-items:flex-start;
                position:relative;
            }

            :global(.content-items .mini-images img:nth-child(2)){
                display:none;
                position:absolute;
                top:0px;
                left:0px;
                transition: all 20s linear;
            }

            :global(.content-items .mini-images:hover img:nth-child(2)){
                display:inline;
            }

            :global(.content-items .gradimg){
                display:block;
                position:absolute;
                top:0px;
                left:0px;
                width:100%;
                height:100%;
                object-fit: contain;
                background: rgba(76,76,76,0);
                background: -moz-linear-gradient(top, rgba(76,76,76,0) 0%, rgba(19,19,19,0.65) 100%);
                background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(76,76,76,0)), color-stop(100%, rgba(19,19,19,0.65)));
                background: -webkit-linear-gradient(top, rgba(76,76,76,0) 0%, rgba(19,19,19,0.65) 100%);
                background: -o-linear-gradient(top, rgba(76,76,76,0) 0%, rgba(19,19,19,0.65) 100%);
                background: -ms-linear-gradient(top, rgba(76,76,76,0) 0%, rgba(19,19,19,0.65) 100%);
                background: linear-gradient(to bottom, rgba(76,76,76,0) 0%, rgba(19,19,19,0.65) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );
                z-index:9;
            }

            .content-block-content{
                position:absolute;
                top:0;
                bottom:0;
                color:white;
                z-index:10;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-content: center;
                align-items: flex-start;
            }

            .content-txt-block{
                
            }

            .content-row{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-content: center;
                align-items: center;
            }

            .content-row .content-votes-bar{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                width:100%;
            }

            .content-row:nth-child(1){
                justify-content:flex-start;
            }

            .content-title{
                font-size: 22.5px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.07;
                letter-spacing: normal;
                text-align: left;
                color: #ffffff;
            }

            .content-description{
                font-size: 8px;
                font-weight: 300;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: left;
                color: #ffffff;
                padding:0rem 1.3125rem;
            }

            .content-time h6{
                font-size: 0.8rem;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.17;
                letter-spacing: normal;
                text-align: right;
                color: #ffffff;
            }

            .content-row:nth-child(3){
                padding:1rem 1.3125rem;
            }

            .content-row:nth-child(3) .content-btn{
                padding: 0.4375rem 0.84375rem;
                border:1px solid white;
            }

            .content-row:nth-child(3) .content-btn a{
                color:white;
            }

            .content-row:nth-child(4) .content-votes-bar .content-like{
                background-color: #1cbbb4;
            }

            .content-row:nth-child(4) .content-votes-bar .content-dislike{
                background-color: #ffad1d;
            }

        `}</style>
    </React.Fragment>
  )
};

export default Notifications;
