
import Navigate from "../components/navigate";
import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";


const Delete = ({ state }) => {

    const { contract, account } = state;
    const [loading, setLoading] = useState(false);

    const deleteRec = async (event) => {
        event.preventDefault();
        // const taskId =  document.querySelector("#taskId").value; 

        try {
            const { contract, account } = state;
            setLoading(true);

            event.preventDefault();
            const recordId = document.querySelector("#recordId").value;
            // alert("Please wait... estimated 10sec ");
            await contract.methods.deleteRecord(recordId).send({ from: account })
            alert("Record is deleted");
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
        <div >
            <Navigate />

        </div>
        <div style={{
            marginLeft:"10rem",
            marginTop:"-4rem",
            marginBottom:"-2rem"
        }}>
            <form onSubmit={deleteRec} className="delete-form">
                <h1>DELETE <span>Record</span></h1>
                <div style={{ marginBottom: "2rem" }}>Account:  {account ? <span>{account}</span> : ""} </div>
                <div className="delete_notice" style={{
                    // border: "2px solid red"
                }}>
                    <p><span>Note: </span>
                        Confirm delete record. Mention record <span>ID</span> below</p>
                    <p><span style={{color:"purple",fontWeight:"bolder",fontSize:"1.5rem"}}>Check Id from storage:  </span></p>
                    <button className="delete-btn">
                        <Link className="nav_link" to="/display">
                            <i class='bx bxs-cabinet' style={{ color: "black" }}> storage</i>
                            {/* <i class=''></i> */}
                        </Link>

                    </button>

                </div>
                <label htmlFor="">

                    <input type="string" id="recordId" placeholder="Enter Record Id: " required />
                </label>


                {loading ?  
                <div class="loadingio-spinner-spinner-u8ly2t3l7cg"><div class="ldio-n3uibpy4xdi">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div></div>
                :
                <>
                

                <button type="submit" className="btn" disabled={loading}>
                    DELETE
                </button>
                </>
                }
            </form>

            </div>
            </div>

        </>
    )
}

export default Delete;