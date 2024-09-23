import { useState } from "react";
import PropTypes from "prop-types";

export default function CommentInput() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const submit = () => {
    if (editIndex !== null) {
      const updatedComments = [...comments];
      updatedComments[editIndex] = { commentText };
      setComments(updatedComments);
      setEditIndex(null);
    } else {
      const newComment = {  commentText };
      setComments([...comments, newComment]);
    }
    setCommentText("");
  };

  const handleEdit = (index) => {
    const commentToEdit = comments[index];
    setCommentText(commentToEdit.commentText);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div>
      <input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Enter your comment"
      />
      <button onClick={submit}>{editIndex !== null ? "Update Comment" : "Add Comment"}</button>

      {comments.map((comment, index) => (
        <div key={index}>
          <p> {comment.commentText}</p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

CommentInput.propTypes = {
  // addComment: PropTypes.func.isRequired // לא נמצא שימוש בפרופס זה
};
