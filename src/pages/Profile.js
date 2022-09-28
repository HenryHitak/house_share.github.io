
import { useState, useRef } from "react";
import Commentpost from "./Commentpost";
import { v4 as uuidv4 } from "uuid";//This is for applying unique Id to comment

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { createContext, useContext } from 'react';

const userContext = createContext();

function ProfileInfo() {
    // COMMENT SECTION START

    const [comments, setComments] = useState([]);
    const contentRef = useRef(); //To get value inside of textarea
    const handleAddComment = () => {
        const content = contentRef.current.value;
        if (content === "") return; //if textarea is empty but click send button, disable to post.

        setComments((prevComments) => {
            return [...prevComments, { id: uuidv4(), content: content, delete: false, createdAt: new Date().toLocaleString() }]// to display new added comment next to previous comment
        });
        contentRef.current.value = null;
    };

    const toggleDelete = (id) => {
        const newComments = [...comments];
        const comment = newComments.find((comment) => comment.id === id);
        comment.delete = !comment.delete;
        setComments(newComments);
    };

    const handleClear = () => {
        const newComments = comments.filter((comment) => !comment.delete);
        setComments(newComments)
    };

    // COMMENT SECTION END

    const loggedUser = useContext(userContext);
    return (
        <>
            <main className="profilePageMain">
                <section className="profileWrap">
                <img src ={window.location.origin + `/img/profile_img/${loggedUser.profImg}`} />
                <section className="profileSection">
                    <h1 className="fname">Hi, I'm {loggedUser.firstName}</h1>
                    <div className="badges">
                        {loggedUser.atype === 'student' ? <button className="aBadge" type="button">Student</button> : loggedUser.atype === 'landlord' ? <button type="button">Landlord</button> : null}
                    
                        {loggedUser.badge1 === 'waiting' ? <button className="badge" type='button'>Waiting</button> : loggedUser.badge1 === 'varified' ? <button type='button'>Verified</button> : null}
                        {loggedUser.badge2 === 'waiting' ? <button className="badge" type='button'>Waiting</button> : loggedUser.badge2 === 'varified' ? <button type='button'>Verified</button> : null}
                    </div>
                </section>
                </section>
                <p className="paragraph">{loggedUser.profileContent}</p>

                {/* COMMENT SECTION START */}
                <div className="CommentWrap">
                    <h3 className="CommentTitle">Comment</h3>
                    <textarea className="CommentTextarea" ref={contentRef} />
                    <div className="CommentBtnWrap">
                        <button className="commentBtnSend" onClick={handleAddComment}>Send</button>
                        <button className="commentBtnDelete" onClick={handleClear}><FontAwesomeIcon icon={faTrashCan} />Delete selected comment</button>
                    </div>
                </div>
                <Commentpost comments={comments} toggleDelete={toggleDelete} />
            </main>
            {/* COMMENT SECTION END */}

        </>
    )
}

function Profile(props) {
    const loggedUser = props.loggedUser;
    return (
        <article className='show-art'>
            <userContext.Provider value={loggedUser}>
                <ProfileInfo />
            </userContext.Provider>
        </article>
    )
}


export default Profile;