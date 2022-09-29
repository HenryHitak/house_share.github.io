
import { useState, useRef } from "react";
import Commentpost from "./Commentpost";
import { v4 as uuidv4 } from "uuid";//This is for applying unique Id to comment

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { createContext, useContext } from 'react';
import CardHeader from "react-bootstrap/esm/CardHeader";


const userContext = createContext();

function ProfileInfo() {
    // COMMENT SECTION START

    const[commentData, setCommentData] =useState('');
    const [comments, setComments] = useState([]);
    const contentRef = useRef(); //To get value inside of textarea
    const[value1,setValue1] = useState(0);
    const[value2,setValue2] = useState(0);
    const[value3,setValue3] = useState(0);
    const [count, setCount] = useState(0);

    const handleAddComment = () => {
        const content = contentRef.current.value;
        if (content === "") return; //if textarea is empty but click send button, disable to post.

        setComments((prevComments) => {
            return [...prevComments, { id: uuidv4(), content: content, delete: false, createdAt: new Date().toLocaleString() }]// to display new added comment noxt to previous comment
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

    const ChgHandler =(event)=>{
        setCommentData(event.target.value);
    }

    // COMMENT SECTION END
    

    const loggedUser = useContext(userContext);
  
    return (
        <>
            <main className="profilePageMain">
                <section className="profileWrap">
                <img src ={window.location.origin + `/img/profile_img/${loggedUser.profImg}`}/>
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

                <div className="vote-wrap">
                    <div className="vote">
                        <button className="vote-icon" onClick={()=>setValue1(value1 + 1)}>heart</button>
                        <p className="vote-num">{value1}</p>
                    </div>
                    <div className="vote">
                        <button className="vote-icon" onClick={()=>setValue2(value2 + 1)}>heart</button>
                        <p className="vote-num">{value2}</p>
                    </div>
                    <div className="vote">
                        <button className="vote-icon" onClick={()=>setValue3(value3 + 1)}>heart</button>
                        <p className="vote-num">{value3}</p>
                    </div>
                </div>
                

                {/* COMMENT SECTION START */}
                <div className="CommentWrap">
                    <h3 className="CommentTitle">Comment</h3>
                    <textarea className="CommentTextarea" ref={contentRef}name='comment' onChange={(e)=>CardHeader(e)}/>
                    <div className="CommentBtnWrap">
                        <button type="submit" className="commentBtnSend" onClick={handleAddComment}>Send</button>
                        <button className="commentBtnDelete" onClick={handleClear}><FontAwesomeIcon icon={faTrashCan} />Delete selected comment</button>
                    </div>
                    {/* </form> */}
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