
import Navigate from "../components/navigate";
import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";


const Share = ({ state }) => {

    const { contract, account } = state;
    const [loading, setLoading] = useState(false);

    const shareRec = async (event) => {
        event.preventDefault();
        // const taskId =  document.querySelector("#taskId").value; 

        try {
            const { contract, account } = state;
            setLoading(true);

            event.preventDefault();
            const recordId = document.querySelector("#recordId").value;
            const clientAddress = document.querySelector("#address_client").value;
            // alert("Please wait... estimated 10sec ");
            await contract.methods.shareRecord(account, clientAddress, recordId).send({ from: account })
            alert("record is shared to: ", clientAddress);
            setLoading(false);

            // }
            // else{
            //     alert("Priority task cannot be deleted");
            // }

        }
        catch (error) {
            console.error(error);
            setLoading(false);
        }
    }
    return (
        <>
            <div style={{
      // border:"2px solid red",
      marginTop:"2rem",
      marginBottom:"4rem",
      width:"80vw",
      display: "flex",
      minHeight: "60vh",
      backdropFilter:"blur(1rem)",
      borderRadius:"3rem",
      boxShadow: "0px 0px 2rem 0.5rem rgba(0,0,0,0.5)"
    }}>
    <div>

        <Navigate/>
    </div>

            <form onSubmit={shareRec} className="delete-form" style={{
                marginLeft:"10rem",
                marginTop:"2rem"
            }}>
                <h1>Share <span>Record</span></h1>
                <div style={{ marginBottom: "2rem" }}>Account:  {account ? <span>{account}</span> : ""} </div>
                <div className="delete_notice">
                    <p><span>Note: </span>
                        Confirm Sharing of record. Mention task Id below</p>
                    <p>Check id from storage:  </p>
                    <button className="delete-btn">
                        <Link className="nav_link" to="/display">
                            <i class='bx bx-log-in' style={{ color: "black" }}> Storage</i>
                        </Link>

                    </button>

                </div>
                <label htmlFor="">
                    <input type="string" id="recordId" placeholder="Enter Record Id : " required />
                    <input type="text" id="address_client" placeholder="Enter Receiver Address" className="address" required></input>
                </label>

                {loading ? 
                <div class="loadingio-spinner-spinner-u8ly2t3l7cg"><div class="ldio-n3uibpy4xdi">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div></div> : 
                <button type="submit" className="btn" disabled={loading}>
                    SHARE
                </button>
                }
            </form>
            </div>

        </>
    )
}

export default Share;