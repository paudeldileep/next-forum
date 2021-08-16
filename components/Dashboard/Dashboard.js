//user home page after logging in

import MainFeed from "../Feed/MainFeed"
import Navbar from "../Navbar/Navbar"
import NavItem from "../Sidebar/NavItem"
import Sidebar from "../Sidebar/Sidebar"

const Dashboard=()=>{
    return <div className="w-full min-h-screen">
        <Navbar>
            <NavItem href="/home" title="Home"/>
            <NavItem href="/news" title="News"/>
            <NavItem href="/about" title="About"/>
        </Navbar>
        <div className="w-full flex">
        <Sidebar/>
        <MainFeed/>
        </div>
    </div>
}

export default Dashboard;