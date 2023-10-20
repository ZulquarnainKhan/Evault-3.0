// We are using navigate to acces each page or navigate to a screen without making any reload
// if we make reload then we will loose the state

import {Link} from "react-router-dom";




const Navigate = ()=>{
    return (
        <>
            <header>
                <div className = "logo">EVAULT 3.0</div>
                <nav>
                    <ul>
                        <li>
                            <Link className="nav_link" to="/display">
                            Storage </Link>
                        </li>
                        <li>
                            <Link className="nav_link" to="/create">
                            Create Task</Link>
                        </li>
                        
                        {/* <li>
                            <Link className="nav_link" to="/delete">
                            Delete Records</Link>
                        </li> */}
                        
                        <li>
                            

                            <Link className="nav_link nav_link_wallet" to="/">
                            Connect Wallet</Link>
                            
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigate;