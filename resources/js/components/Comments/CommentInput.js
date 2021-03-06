/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';

function CommentInput({
    isReply,
    parentComment,
    appendNewComment,
    parentPostId,
    hideInputChange,
}) {
    const [text, updateText] = useState('');
    function submit(
        isReplyTemp,
        parentCommentTemp,
        appendNewCommentTemp,
        parentPostIdTemp,
        textTemp
    ) {
        let parentCommentId = 0;
        let nestLevel = 0;

        if (parentCommentTemp) {
            parentCommentId = parentCommentTemp.id;
            nestLevel = parentCommentTemp.nest_level + 1;
        }

        const token = document
            .getElementById('csrf-token')
            .getAttribute('content');
        fetch('/api/comments/submit', {
            headers: {
                'X-CSRF-TOKEN': token,
                'Content-Type': 'application/json',
            },
            method: 'post',
            mode: 'same-origin',
            credentials: 'same-origin',
            body: JSON.stringify({
                parentPostId: parentPostId,
                parentCommentId: parentCommentId,
                body: textTemp,
                nestLevel: nestLevel,
            }),
        }).then((response) => response.json(console.log(response)));
        (data) => {
            if (parentComment)
                appendNewComment(data.comment, isReply, parentComment.id);
            else appendNewComment(data.comment, false, 0);

            if (isReplyTemp) {
                hideInputChange();
            }
        };
    }
    return (
        <div>
            <div
                style={{
                    marginLeft: '5%',
                    marginRight: '11%',
                    minHeight: '100%',
                }}
            >
                <input
                    onChange={(e) => updateText(e.target.value)}
                    type="text"
                />
                <button
                    type="button"
                    onClick={() =>
                        submit(
                            isReply,
                            parentComment,
                            appendNewComment,
                            parentPostId,
                            text,
                            hideInputChange
                        )
                    }
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default CommentInput;
