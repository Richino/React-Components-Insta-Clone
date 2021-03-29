// You do not need to change this file.
import React from "react";

const Comment = (props) => {
	// 🔥 Make sure the parent of Comment is passing the right props!
	const { posts } = props;
	return (
		<div className="comment-text">
			<span className="user">{posts.username}</span>
			<span className="comment">{posts.text}</span>
		</div>
	);
};

export default Comment;
