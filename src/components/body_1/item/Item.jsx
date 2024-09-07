import React, { useState } from 'react';
import './Item.css'

const Item = (props) => {


    return (
        <div className={props.data.Update > 0 ? 'style_true' : props.data.Update < 0 ? 'style_false': ''}>
            <div className='item-con'>
                <div className='line-item'>
                    {props.data.ImageUrl ? 
                        <img src={ 'https://www.cryptocompare.com/' + 
                            props.data.ImageUrl} 
                            alt={'img ' + props.data.Name}
                        />
                        :
                        <div style={{marginRight: 30}}></div>
                    }
                </div>
                {props.data.Update > 0 ? 
                    <div className='line-item'>&uArr;{props.data.Update.toFixed(3)}</div>
                    :
                props.data.Update < 0 ? 
                    <div className='line-item'>&dArr;{props.data.Update.toFixed(3)}</div>
                    :
                    <div className='line-item'>&hArr; {props.data.Update}</div>
                }
                <div className='line-item'>{props.data.Name}</div>
                <div className='line-item'>{props.data.FullName}</div>
                <div className='line-item'>${props.data.Price.toFixed(3)}</div>
                <div className='line-item'>${props.data.Hour.toFixed(3)}</div>
            </div>
        </div>
    );
};

export default Item;