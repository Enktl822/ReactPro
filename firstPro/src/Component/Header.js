import "../style/headerStyle.css";

export default function Header() {
  return (
    <header>
      <nav class="navbar container">
        <img src="./logo-stackoverflow.png" />
        <ul>
          <li>About</li>
          <li>Products</li>
          <li>For Teams</li>
        </ul>
        <form>
          <input
            class="search"
            type="search"
            placeholder="Search"
            arial-label="Search"
          ></input>
          <button class="btn" type="Button">
            Log in
          </button>
          <button class="btn2" type="button">
            Sign up
          </button>
        </form>
      </nav>
    </header>
  );
}
