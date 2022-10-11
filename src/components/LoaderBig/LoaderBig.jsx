import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import s from './LoaderBig.module.scss';

const LoaderBigComponent = () => {
    return (
        <div className={s.loaderbig}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    );
};

export default LoaderBigComponent;
