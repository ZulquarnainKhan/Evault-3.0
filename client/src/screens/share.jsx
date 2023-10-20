
import Navigate from "../components/navigate";
import React from "react"
import {Link} from "react-router-dom";


const Share = ({state})=>{

    const {contract,account} = state;
    
    const shareRec = async(event) =>{
        event.preventDefault();
        // const taskId =  document.querySelector("#taskId").value; 
        
        try{
            const {contract,account} = state; 
        
        event.preventDefault();
        const recordId = document.querySelector("#recordId").value;
        const clientAddress = document.querySelector("#address_client").value;
        alert("Please wait... estimated 10sec ");
        await contract.methods.shareRecord(account,clientAddress,recordId).send({from:account})
        alert("record is shared to: ",clientAddress);
                
            // }
            // else{
            //     alert("Priority task cannot be deleted");
            // }

        }
        catch(error){
            console.error(error);
        }
    }
    return (
        <>
            <Navigate/>

            <form onSubmit={shareRec} className="delete-form">
            <h1>Share <span>Record</span></h1>
            <div style={{marginBottom:"2rem"}}>Account:  {account? <span>{account}</span>:""} </div>
            <div className="delete_notice">
                <p><span>Note: </span>
                Confirm Sharing of record. Mention task Id below</p>
                <p>Check id from storage:  </p>
                <button className="delete-btn">
                    <Link className="nav_link" to="/display">
                        <i class='bx bx-log-in' style={{color:"black"}}> Storage</i>
                    </Link>

                </button>
                
            </div>
                <label htmlFor="">
                    <input type="string" id="recordId" placeholder="Enter Record Id : " required/>
                    <input type="text" id="address_client" placeholder="Enter Receiver Address" className="address" required></input>
                </label>
                

                <button type="submit" className="btn">SHARE</button>
            </form>

        </>
    )
}

export default Share;