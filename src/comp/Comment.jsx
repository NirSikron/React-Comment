
import PropTypes from "prop-types";

export default function Comment ({ body, date, user }) {
    return (
        <div>
            <div>
                <img src={user.image} alt="" />
                <span>{user.name}</span>
                <span>{date}</span>
            </div>
            <p>{body}</p>
        </div>
    );
}

Comment.propTypes = {
    body: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
    }),
};
