import Posts from "./assets/pages/posts/posts";
import Home from "./assets/pages/home/home";
import { BrowserRouter as Router, Link, Routes as Switch, Route } from "react-router-dom";
//Whoever decided <(Browser)Router> -> <Routes> -> <Route> was a good combination of names needs professional help...

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" Component={Home}></Route>
          <Route path="/posts" Component={Posts}></Route>
        </Switch>
      </main>
      <footer>
        <h6>&copy; KristofferG 2023</h6>
      </footer>
    </Router>
  );
}

export default App;
