import React from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

const Post = (props) => {
	// 🔥 Make sure the parent of Post is passing the right props!
	const { posts, likePost } = props;
	return (
		<div className="post-border">
			<PostHeader
				username={posts.username}
				thumbnailUrl={posts.thumbnailUrl}
			/>
			<div className="post-image-wrapper">
				<img
					alt="post thumbnail"
					className="post-image"
					src={posts.imageUrl}
				/>
			</div>
			{/* Is LikeSection getting all the props it needs to work correctly? */}
			<LikeSection posts={posts} likePost={() => likePost(posts.id)} />
			{/* Comments also wants its props! */}
			<Comments posts={posts} likePost={() => likePost(posts.id)} />
		</div>
	);
};

export default Post;
