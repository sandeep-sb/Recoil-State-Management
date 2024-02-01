import {Link} from "react-router-dom"

function Header() {
    return(
        <div>
            <div>
                <Link to={"/home"}>Home</Link>
            </div>
            <div>
                <Link to={"/add-todo"}>Add Todo</Link>
            </div>
        </div>
    );
}

export default Header;