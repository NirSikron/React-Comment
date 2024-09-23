// Movies.jsx
import PropTypes from "prop-types";

export default function Movies({ comments, setComments }) {
  const rateMovie = (index, newRate) => {
    const updatedComments = [...comments];
    updatedComments[index].rate = newRate;
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>Comment: {comment.body}</p>
            <p>Name: {comment.name}</p>
            <p>Rate: {comment.rate}</p>
            <div>
              <button onClick={() => rateMovie(index, 1)}>1</button>
              <button onClick={() => rateMovie(index, 2)}>2</button>
              <button onClick={() => rateMovie(index, 3)}>3</button>
              <button onClick={() => rateMovie(index, 4)}>4</button>
              <button onClick={() => rateMovie(index, 5)}>5</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

Movies.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired
    })
  ).isRequired,
  setComments: PropTypes.func.isRequired
};
