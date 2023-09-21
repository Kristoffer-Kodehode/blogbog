import ReBlogBtn from "../../components/ReBlogBtn";

const posts = [
  {
    title: "Welcome",
    body: "This is a post",
    date: "19/09/23",
    id: 1,
  },
  {
    title: "Hellcome",
    body: "This isn't a post",
    date: "66/66/66",
    id: 2,
  },
  {
    title: "Ok, maybe I should have an actual post-looking post here...",
    body: "So, I'm trying to learn React and using TypeScript at the same time... For some things it's pretty simple (because TypeScript can infer types pretty decently on simple stuff, like this project), while with other things it's harder. One example is when I tried to make a form that collects some and TypeScript made it so Netlify refused to build my page because it wasn't happy, like a two-year-old sitting backwards in the backseat crying out its arse about typing... It took me a while to google my way to the right answer, which was setting 'React.FormEvent<HTMLFormElement>' as the type for the event and swapping 'e.target' for 'e.currentTarget'...",
    date: "Today",
    id: 3,
  },
];

function Posts() {
  return (
    <>
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="end">
              <h5>Date: {post.date}</h5>
              <ReBlogBtn />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Posts;
