import { Link } from "react-router-dom"

function HomePage() {
  return (
    <body>
        <h1>Title</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam debitis nesciunt illo cumque provident quaerat omnis ut adipisci, ipsum aspernatur minus incidunt molestiae quae repellat quia vero repellendus neque nihil?</p>
        <Link to="/russian_kitchen"> Ruswsiche Küche</Link>
    </body>
  );
}

export default HomePage;
