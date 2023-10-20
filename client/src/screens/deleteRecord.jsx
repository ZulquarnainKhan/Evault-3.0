
import Navigate from "../components/navigate";
import React from "react"
import {Link} from "react-router-dom";


const Delete = ({state})=>{

    const {contract,account} = state;
    
    const deleteRec = async(event) =>{
        event.preventDefault();
        // const taskId =  document.querySelector("#taskId").value; 
        
        try{
            const {contract,account} = state; 
        
        event.preventDefault();
        const recordId = document.querySelector("#recordId").value;
        alert("Please wait... estimated 10sec ");
        await contract.methods.deleteRecord(recordId).send({from:account})
        alert("Record is deleted");
                
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

            <form onSubmit={deleteRec} className="delete-form">
            <h1>DELETE <span>Record</span></h1>
            <div style={{marginBottom:"2rem"}}>Account:  {account? <span>{account}</span>:""} </div>
            <div className="delete_notice">
                <p><span>Note: </span>
                Confirm delete record. Mention task Id below</p>
                <p>Check id from storage:  </p>
                <button className="delete-btn">
                    <Link className="nav_link" to="/display">
                        <i class='bx bxs-cabinet' style={{color:"black"}}> storage</i>
                        {/* <i class=''></i> */}
                    </Link>

                </button>
                
            </div>
                <label htmlFor="">
                    
                    <input type="string" id="recordId" placeholder="Enter Record Id: " required/>
                </label>
                

                <button type="submit" className="btn">DELETE</button>
            </form>

        </>
    )
}

export default Delete;