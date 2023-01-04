import "../style/header.css";

export default function Header() {
  return (
    <header>
      <nav class="navbar container">
        <img src="./logo-stackoverflow.png" />
        <ul>
          <li><a href = "https://stackoverflow.co/">About</a></li>
          <li><a href = "https://stackoverflow.co/">Products</a></li>
          <li><a href = "https://stackoverflow.co/teams/">For Teams</a></li>
        </ul>
        <form>
          <input
            class="search"
            type="search"
            placeholder="Search..."
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
