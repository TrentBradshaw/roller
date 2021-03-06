import React, { useState, useEffect } from 'react';
import ReplyIcon from '@material-ui/icons/Reply';
import ShareIcon from '@material-ui/icons/Share';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentInput from './CommentInput';
import VotingSystem from '../Posts/VotingSystem';
import Moment from '../Utility/Moment';
// don't forget to pass the votes into the voting system component

function PostComment({ userId, deleteComment, appendNewComment, comment }) {
    console.log(comment);
    // console.log('PROPPPUSSS FROM POSTCOMMENT' + JSON.stringify())
    const [additionalLines] = useState([]);
    const [minimized, toggleMinimized] = useState(false);
    const [deleted, updateDeleted] = useState(false);
    const [replyClicked, updateReplyClicked] = useState(false);

    function handleInputChange(value) {
        updateReplyClicked(value);
    }
    function toggleComment(commentId) {
        const id = document.querySelector(`[data="${commentId}"]`);
        console.log(id);
        // var str = "[parent=" + e.target.getAttribute(id) + "]"
        // console.log(str)
        const refs = document.querySelectorAll(`[parentid="${commentId}"]`);
        if (minimized) {
            for (let index = 0; index < refs.length; index += 1) {
                refs[index].style.display = 'flex';
            }
        } else {
            for (let index = 0; index < refs.length; index += 1) {
                refs[index].style.display = 'none';
            }
        }
        toggleMinimized(!minimized);
    }
    function initialize() {
        updateDeleted(comment.isDeleted);
    }
    useEffect(() => {
        initialize();
    }, []);

    function handleDeleteComment(id) {
        updateDeleted(true);
        deleteComment(id);
    }
    // modularize all of this into bottom taskbar and header and the like
    if (deleted) {
        return (
            <div
                className={`indent${comment.nest_level}`}
                data={[comment.id]}
                parentid={comment.parent_comment_id}
                style={{
                    minHeight: '100px',
                    borderRadius: '0.5px',
                    borderTop: '2px solid #dae0e6',
                }}
            >
                <p
                    className="commentDeletedHeader"
                    style={{ textAlign: 'start' }}
                >
                    {' '}
                    comment deleted
                </p>
            </div>
        );
    }
    if (minimized) {
        return (
            <div
                style={{
                    width: '100%',
                    minHeight: '100%',
                    borderRadius: '0.5px',
                    borderTop: '2px solid #dae0e6',
                }}
            >
                <div
                    className={`indent${comment.nest_level}`}
                    data={[comment.id]}
                    parentid={comment.parent_comment_id}
                    style={{
                        display: 'flex',
                        flexGrow: comment.nest_level,
                        marginRight: '5%',
                    }}
                >
                    <AddIcon onClick={() => toggleComment(comment.id)} />
                    <p className="commentHeaderText">{comment.username}</p>
                    <p className="commentHeaderText">
                        {' '}
                        {`${comment.score} points`}
                    </p>
                    <Moment
                        className="commentHeaderText"
                        creator={comment.username}
                        timePosted={comment.formattedStamp}
                        type="time"
                    />
                </div>
            </div>
        );
    }
    return (
        <div
            style={{
                borderRadius: '0.5px',
                borderTop: '2px solid #dae0e6',
                minHeight: '100px',
            }}
        >
            {additionalLines}
            <div
                className={`indent${comment.nest_level}`}
                data={[comment.id]}
                parentid={comment.parent_comment_id}
                style={{
                    display: 'flex',
                    flexGrow: comment.nest_level,
                    marginRight: '5%',
                    width: '100%',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '70%' }}>
                        <VotingSystem id={comment.id} type="postComment" />
                    </div>
                </div>
                <img
                    style={{
                        height: '64px',
                        width: '64px',
                        overflow: 'hidden',
                        objectFit: 'cover',
                    }}
                    src={comment.posterPfpUrl}
                    alt="profilepic"
                />
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex' }}>
                            <RemoveIcon
                                onClick={() => toggleComment(comment.id)}
                            />
                            <p>minimize</p>
                        </div>

                        <a
                            href={`http://localhost:80/user/${comment.username}`}
                            className="commentHeaderText"
                        >
                            {comment.username}
                        </a>
                        <p className="commentHeaderText">
                            {`${comment.score} points`}
                        </p>
                        <Moment
                            className="commentHeaderText"
                            creator={comment.username}
                            timePosted={comment.formattedStamp}
                            type="time"
                        />
                    </div>
                    <div>
                        <p
                            className="commentText"
                            style={{
                                marginLeft: '10px',
                                marginTop: '10px',
                                textAlign: 'start',
                                overflowWrap: 'anywhere',
                            }}
                        >
                            {comment.body}
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: '10px',
                            marginLeft: '20px',
                        }}
                    >
                        <ReplyIcon
                            onClick={() => updateReplyClicked(true)}
                            style={{ marginLeft: '10px', fill: 'slategrey' }}
                        />

                        <ShareIcon
                            style={{
                                marginLeft: '20px',
                                textAlign: 'start',
                                fill: 'slategrey',
                            }}
                        />
                        {userId === comment.creator_id && (
                            <DeleteIcon
                                onClick={() => handleDeleteComment(comment.id)}
                            />
                        )}
                    </div>
                </div>
            </div>
            {replyClicked && (
                <CommentInput
                    isReply
                    parentComment={comment}
                    appendNewComment={appendNewComment}
                    parentPostId={comment.parent_post_id}
                    hideInputChange={handleInputChange}
                />
            )}
        </div>
    );
}
/// when you create a comment via commentinput you check if you replied to one, if you did then you check the nested level and make it one more
// when pulling from the database make sure to group posts into their own arrays with their relationship being comment and children
// and then compile them into one array

export default PostComment;
