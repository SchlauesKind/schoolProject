import { Link } from "react-router-dom"

const RussianPage = () => {
    return (
            <iframe
                src="src/pages/public/russian_kitchen/index.html"
                title="Russische Küche"
                width="100%"
                height="auto"
                style={{ border: "none"}}
            >
            <Link to="/">Home Page</Link>
            </iframe>
    )
}

export default RussianPage;