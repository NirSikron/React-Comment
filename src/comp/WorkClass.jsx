
import PropTypes from "prop-types";

export default function WorkClass({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.movieName}: {comment.commentText}</p>
        </div>
      ))}
    </div>
  );
}

WorkClass.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      movieName: PropTypes.string.isRequired,
      commentText: PropTypes.string.isRequired
    })
  ).isRequired
};
