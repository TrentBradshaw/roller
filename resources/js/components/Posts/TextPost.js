import VotingSystem from './VotingSystem';
import Moment from '../Utility/Moment';
import React, { useState, useEffect } from 'react';

function TextPost(props) {
    console.log('dabbie')
    return (
        <div style={{width: '100%'}} >
            <div id = '1' style ={{ display: 'flex', width: '100%'}}>
                <VotingSystem></VotingSystem>
                <div id= '2' style ={{width: '100%'}}>
                    <h2 style = {{height: '45%'}}>{props.state.title}</h2>
                    <div style = {{display: 'flex', marginTop: '15px'}}>
                        <Moment creator = {props.state.creatorUsername} timePosted = {props.state.formattedStamp}></Moment>
                        <p>x commments</p>
                        <p>share</p>
                    </div>
                </div>
            </div>                
            <div>
                <p style ={{  minHeight: '100px',  display: "inline-block", width: '100%'}} >{props.state.text}</p>
            </div>
        </div>
    );
}
export default TextPost;