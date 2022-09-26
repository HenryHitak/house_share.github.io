
import { useState, useRef } from "react";
import Commentpost from "./Commentpost";
import { v4 as uuidv4 } from "uuid";//This is for applying unique Id to comment

function Profile() {

  // COMMENT SECTION START

  const [comments, setComments] = useState([]);
  const contentRef = useRef(); //To get value inside of textarea
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

  // COMMENT SECTION END

  return (
    <>
      {/* COMMENT SECTION START */}
      <div className="CommentWrap">
        <h3 className="CommentTitle">Commnet</h3>
        <textarea className="CommentTextarea" ref={contentRef} />
        <div className="CommentBtnWrap">
          <button className="commentBtnSend" onClick={handleAddComment}>Send</button>
          <button className="commentBtnDelete" onClick={handleClear}>Delete</button>
        </div>
      </div>
      <Commentpost comments={comments} toggleDelete={toggleDelete} />
      {/* COMMENT SECTION END */}
    </>

  );
};

export default Profile;


