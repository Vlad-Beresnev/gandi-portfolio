import { Outlet } from "react-router-dom"
import Sidebar from '../Sidebar'
import Footer from "../Footer"
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div>
                <Outlet />
                <span className="tags bottom-tags">
                    <br />
                </span>
            </div>
        </ div>
    )
}

export default Layout