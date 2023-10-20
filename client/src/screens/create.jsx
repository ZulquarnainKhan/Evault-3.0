import { useState } from "react";
import axios from "axios";
import Navigate from "../components/navigate";


// api key = 0445571bddc20953c3b6
// api secret key = 3b37a4d588793a8fad3d1be02e0d6a0306cbc6776709504ac377fb168546a772




const Create = ({ state }) => {
    const { contract, account } = state;

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No image selected");

    
    const create = async (e) => {
        const taskName = document.querySelector("#taskName").value; 
        const taskDate = document.querySelector("#taskDate").value; 
        const taskType = document.querySelector("#fileType").value; 
        e.preventDefault();
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: `0445571bddc20953c3b6`,
                        pinata_secret_api_key: `3b37a4d588793a8fad3d1be02e0d6a0306cbc6776709504ac377fb168546a772`,
                        "Content-Type": `multipart/form-data`,
                    },
                });
                const recordHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

                // await contract.methods.createRecord(taskName,taskDate,recordHash).send({from:account})
                await contract.methods.createRecord(taskName,taskDate,taskType,recordHash).send({from:account})
                
                alert("Successfully Image Uploaded");
                setFileName("No image selected");
                setFile(null);
            } catch (e) {
                alert("Unable to upload image to Pinata");
            }
        }
        // alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
    };
    const retrieveFile = (e) => {
        const data = e.target.files[0]; //files array of files object
        // console.log(data);
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend = () => {
            setFile(e.target.files[0]);
        };
        setFileName(e.target.files[0].name);
        e.preventDefault();
    };

    return (
        <>
            <Navigate />

            <div className="top" style={{marginTop: "7rem"}}>
                {/* <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="file-upload" className="choose">
                        Choose Image
                    </label>
                    <input
                        disabled={!account}
                        type="file"
                        id="file-upload"
                        className="data"
                        onChange={retrieveFile}
                    />
                    <span className="textArea">Image: {fileName}</span>
                    <button type="submit" className="upload" disabled={!file}>
                        Upload File
                    </button>
                </form> */}

                <form onSubmit={create}>
                    <h1>CREATE <span>TASK</span></h1>
                    <label htmlFor="">

                        <input id='taskName' type='string' placeholder="Enter Record Name: " required />
                    </label>
                    <label htmlFor="">

                        <input id='taskDate' type='date' placeholder="Enter Date: " required/>
                    </label>

                    <label htmlFor="" placeholder="Select File Type: " required style={{display:"inline"}}>
                    </label>
                        Select File type:
                        <select id="fileType" className="" required style={{marginBottom:"2rem", marginLeft:"1rem"}}>
                            <option value="image">Image</option>
                            {/* <option value="image">File</option> */}
                            <option value="document">Document</option>
                            <option value="video">Video</option>
                            <option value="audio">Audio</option>
                        </select>
                        
                    
                    


                    <input
                        disabled={!account}
                        type="file"
                        id="file-upload"
                        className="data"
                        onChange={retrieveFile}
                        style={{display:"block"}}
                    />
                    {/* <span className="textArea">Image: {fileName}</span><br/> */}
                    <button type="submit" className="upload btn" disabled={!file}>
                        Upload Record
                    </button>
                    {/* <button type='submit' className="btn">CREATE TASK</button> */}
                </form>
            </div>
        </>
    )



}

export default Create;