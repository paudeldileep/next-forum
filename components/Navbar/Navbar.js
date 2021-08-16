//Top Navigation bar at different interface

const Navbar=(props)=>{
    return <div className="navbar_div w-full h-full py-1 px-2 flex items-center justify-between">
        {/* logo section */}
        <div className="font-bold font-mono">
            Next-Forum   
        </div>
        {/* menu items if any */}
        <div className="flex items-center justify-center">
            {props.children}
        </div>
    </div>
}

export default Navbar;