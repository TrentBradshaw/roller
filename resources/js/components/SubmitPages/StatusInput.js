
import React, { useState } from 'react';
import ImageIcon from '@material-ui/icons/Image';
import PostSubmitForm from './PostSubmitForm'
import Status from '../Status/Status'

//SPLIT THIS UP LATER. SPLIT USER PROFILE LOAD INTO ONE COMPONENT, THEN SWITCH USER CONTENT LOAD INTO ANOTHER
function StatusInput({appendNewStatus, isReply, parentStatusId}) {

    const [text, setText] = useState('');
    
    return(
        
        <div className = 'headerSubmitForm' style={{display: 'flex', flexDirection: 'column',}}>
            <input onChange = {(e) => setText(e.target.value)} style = {{    height: '100px', width: '80%', marginLeft: '10%', marginRight: '10%', fontSize: '20px', marginTop: '20px'}} placeholder="tell people what's going on..."></input>
            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center'}}>
                <button onClick = {(e) => submit(text, isReply, parentStatusId)} style={{height: '30px', width: '100px'}}>Send</button>
            </div>
        </div>
    )

    function submit(value, isReply, parentStatusId){ 
       
        //FIX PNG UPLOADING ERROR?
       let token = document.getElementById('csrf-token').getAttribute('content')
        fetch('/api/statuses/submit', {
            headers:{'X-CSRF-TOKEN': token, 'Content-Type':'application/json',},
            method: 'post',
            mode: "same-origin",
            credentials: "same-origin",
            body: JSON.stringify({
                    body: value,
                    isReply: isReply,
                    parentStatusId: parentStatusId,
            })
        }).then(response => response.json(
            console.log(response)
        ))
        .then(
            data => {console.log(data)
            appendNewStatus(data['status'], true, parentStatusId);
        })
    }
} 
    
export default StatusInput