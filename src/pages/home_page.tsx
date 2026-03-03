import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div style={{ padding: "10px", background: "yellow" }}>
      <h1>Home Page</h1>
      <h2>Hier sind links zu Ländern deren Küchen wir haben:</h2>
      <ul>
        <li>
          <Link to="/russian_kitchen">Russische Küche</Link>
        </li>
        <li>
          <Link to="/russian_kitchen">Russische Küche</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
