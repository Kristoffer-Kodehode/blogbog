import { useState } from "react";
import ReBlog from "../img/reBlog.svg";
import UnBlog from "../img/unBlog.svg";

export default function ReBlogBtn() {
  const [reBlogged, setReblogged] = useState(false);
  return (
    <>
      <button onClick={() => setReblogged}>
        <img src={reBlogged ? ReBlog : UnBlog} />
      </button>
    </>
  );
}
//I broke this at some point
