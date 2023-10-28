// We are using navigate to acces each page or navigate to a screen without making any reload
// if we make reload then we will loose the state

import { Link } from "react-router-dom";




const Navigate = () => {
    return (
        <>
            <header style={{
                boxShadow: "0 0 0.8rem rgba(0, 0, 0, 0.8)",
                borderTopLeftRadius: "2rem",
                borderBottomLeftRadius: "2rem",
            }}>
                <div className="logo">EVAULT 3.0</div>
                <hr />
                <nav >
                    <ul >
                        <div style={{
                            fontSize: "0.8rem",
                            color: "grey"
                        }}>
                            FUNCTIONALITY
                        </div>
                        <li >
                            <Link className="nav_link" to="/display">
                                Storage </Link>
                        </li>
                        <li>
                            <Link className="nav_link" to="/archive">
                                Archive</Link>
                        </li>
                        <li>
                            <Link className="nav_link" to="/create">
                                Upload</Link>
                        </li>

                       

                        <li>
                            <Link className="nav_link" to="/delete">
                                Delete</Link>
                        </li>
                        <li>
                            <Link className="nav_link" to="/share">
                                Share</Link>
                        </li>

                        <li>

                            <hr />
                            <ul>
                                <div style={{
                                    fontSize: "0.8rem",
                                    color: "grey",
                                    // marginRight:"1rem"
                                }}>
                                    CATEGORIES
                                </div>

                                <div>
                                    <li >
                                        <Link className="nav_link" to="/display">
                                            All Files </Link>
                                    </li>
                                </div>
                                <div>

                                    <li >
                                        <Link className="nav_link" to="/displayImage" style={{marginRight:"1rem"}}>
                                            Images  </Link>
                                    </li>
                                    {/* <li> </li> */}
                                    <li>
                                        <Link className="nav_link" to="/displayVideo">
                                            Videos </Link>
                                    </li>
                                </div>

                                <div>

                                    
                                    <li>
                                        <Link className="nav_link" to="/displayAudio" style={{marginRight:"1rem"}}>
                                            Audios</Link>
                                    </li>

                                    <li>
                                        <Link className="nav_link" to="/displayDocument">
                                            Documents</Link>
                                    </li>
                                </div>
                            </ul>

                            <hr />

                            <div style={{marginTop:"2rem"}}>
                                <div style={{
                                    // border:"2px solid red",
                                    width: "100%",
                                    height: "6rem",
                                    marginBottom:"1rem",
                                    borderRadius:"0.5rem",
                                    background: "linear-gradient(to right ,#c800ff,#6f00ff)",
                                    fontSize:"0.8rem",
                                    padding: "0.5rem"
                                }}>
                                    {/* <p>"Please connect your account"</p> */}
                                    <p>If needed, consider </p>
                                    <p>switching to the relevant.</p>
                                    <p>account <span> Thank you!</span></p>
                                </div>
                            <Link className="nav_link nav_link_wallet" to="/" >
                                Connect
                                Wallet
                            </Link>
                            </div>

                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navigate;