import { usePosts } from "../PostContext";
import Results from "./Results";
import SearchPosts from "./SearchPosts";
import Logo from "../image/logo.png";

function Header() {
  // 3) CONSUMING CONTEXT VALUE
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>
          <img src={Logo} alt="logo" />
        </span>
        The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
export default Header;
