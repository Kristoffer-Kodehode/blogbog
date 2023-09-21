import { useState } from "react";

export default function ReBlogBtn() {
  const [reBlogged, setReblogged] = useState(false);
  return (
    <>
      <button onClick={() => setReblogged}>
        <img src={reBlogged ? "./src/assets/img/reBlog.svg" : "./src/assets/img/unBlog.svg"} />
      </button>
    </>
  );
}
