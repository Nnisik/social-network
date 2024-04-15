import Post from "../Post/Post";
import "./styles/style.css";

export default function PostsFeed () {
    return (
        <div className="feed">
            <Post />
            <Post />
            <Post />
        </div>
    );
}