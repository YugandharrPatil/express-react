// import Posts from "./components/posts";
import { useEffect, useState } from "react";

export default function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/api/posts")
			.then((res) => res.json())
			.then((posts) => setPosts(posts));
	}, []);

	return (
		<>
			{posts.map((post) => (
				<div className="py-3" key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			))}
		</>
	);
}
