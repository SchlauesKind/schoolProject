import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
            <h1>Seite nicht gefunden</h1>
            <p style={{ color: "red", fontSize: "150px", marginLeft: "44%"}}>404</p>
            <h1>Versuch mal besser, oder kehr zu <Link to="/"> Homepage</Link> zurück.</h1>
        </>
    )
}

export default PageNotFound;