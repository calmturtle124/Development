import * as React from 'react';
import {Link} from "react-router-dom";

function Layout() {
    return <>
        <nav className="navbar navbar-light bg-light">
            <ul className="pt-5">
                <li>
                    <Link to="/bakery">Bakery</Link>
                </li>
                <li>
                    <Link to="/home">Project Page</Link>
                </li>
            </ul>
        </nav>
    </>
}

export default Layout;