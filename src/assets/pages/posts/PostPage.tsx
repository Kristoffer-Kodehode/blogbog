import { useParams } from "react-router-dom";
import { blogPosts } from "./BlogPosts";

export function PostPage() {
  const { id } = useParams();

  const details = blogPosts.find((post) => post.id == id);
  return (
    <>
      <h1>{details.title}</h1>
      <img src={details.img} alt="" />
      <p>{details.body}</p>
    </>
  );
}
