import { Link, Outlet } from "react-router-dom";

export default function Header(){
    return(
        <>
            <div>
                <h1>This is Header</h1>
                <Link to={'login'}>Login</Link>
            </div>

            <div id="detail">
                <Outlet/>
            </div>
        </>
    )
}