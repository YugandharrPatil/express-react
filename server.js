const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(
	cors({
		origin: "*",
	})
);
// GET POSTS

app.get("/api/posts", (req, res) => {
	fetch("http://localhost:8000/posts")
		.then((res) => res.json())
		.then((data) => res.json(data));
	return 0;
});

app.listen(PORT, () => console.log(`Server running successfully on port ${PORT}`));
