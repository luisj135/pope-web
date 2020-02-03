import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    return (
        <React.Fragment>
            <img 
                srcSet={`
                    ${props.path}${props.name}@3x.${props.format} 3x,
                    ${props.path}${props.name}@2x.${props.format} 2x,
                    ${props.path}${props.name}.${props.format} 1x `}
                src={
                    `${props.path}${props.name}.${props.format}`
                }
                alt={`${props.alt}`}
            />
            <style jsx>{`
                img{
                    width: 100vw;
                    object-fit: cover;
                }
            `}</style>
        </React.Fragment>
    )
};

Image.defaultProps = {
    path: '/assets/images/',
    name: 'default',
    format: 'png',
    alt: 'default',
}

Image.PropTypes = {
    path: PropTypes.string,
    name: PropTypes.string,
    format: PropTypes.string,
    alt: PropTypes.string
}

export default Image;
