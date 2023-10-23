import { useState, useEffect } from "react";
import React from "react"
import { Link } from "react-router-dom";
import Archive from "./Archive";
import Navigate from "../components/navigate";

const DisplayAll = ({ state }) => {

    console.log(state);

    const { contract, account } = state;
    // console.log(contract, account);

    const [RecordList, setRecordList] = useState([])
    const [search, setSearch] = useState('');






    useEffect(() => {
        const allRecords = async () => {

            try {
                // const res = await fetch("http://localhost:3134/api/ethereum/evault/display-all",{
                //     method: "GET",
                //     headers:{
                //         "content-type": "application/json" 
                //     },
                // })

                // const data = await res.json();

                // if(data.status === 200){
                //     console.log(data.recordList);
                //     setRecordList(data.recordList);
                // }

                const records = await contract.methods.displayAll().call({ from: account });
                console.log(records);

                setRecordList(records);


            }
            catch (error) {
                console.error(error);
            }
        }

        allRecords();
    }, [])

    // const deleteRecord = async()=>{
    //     let Id = record.id;
    //     console.log(Id);
    // }



    return <>
        <Navigate />

        <div>{!account ? <div>
            <h1 style={{ marginTop: '-2rem', marginBottom: '2rem' }}>Connect <span> Metamask</span></h1>
            <span>Note: </span>
            <p>Not connected to the metamask wallet</p>
            <button className='btn wallet_btn' >

                <Link className="nav_link" to="/">
                    <i class='bx bx-log-in' style={{ color: "black" }}> Connect </i>
                </Link>
            </button>
        </div> :

            <div className="display_all_records" >
                <h1 style={{ marginTop: '-2rem', marginBottom: '2rem' }}>Record <span> Storage</span></h1>
                
                <div>Account:  {account ? <span>{account}</span> : ""} </div>

                {/* <Archive/> */}

                <div className="file-card">
                    <Link className="file-card-icon image" to='/displayImage'>
                        <i class='bx bx-images ' ></i>
                    </Link>
                    <Link className="file-card-icon video" to='/displayVideo'>
                        <i class='bx bxs-videos ' ></i>
                    </Link>
                    <Link className="file-card-icon audio" to='/displayAudio'>
                        <i class='bx bxs-music ' ></i>
                    </Link>
                    <Link className="file-card-icon document" to='/displayDocument'>
                        <i class='bx bxs-file-doc ' ></i>
                    </Link>
                </div>

                {/* <p>{RecordList==="" ? "":"No Files Found!" }</p> */}
                <div>
                    
                    
                    
                    <input className="searchBar" type="search" placeholder="Search Records" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                                  

                        <div className="display_all_records_card_type">
                            <p>Id </p>
                            <p>Name</p>
                            {/* <p>Date</p> */}
                            <p>Type</p>
                            <p></p>
                            <p>File</p>

                            <p></p>
                            <p></p>
                            <p></p>
                            <p>Delete</p>
                            <p>Share</p>

                        </div>
                </div>



                {RecordList && RecordList
                .filter((item) =>  item.name.toLowerCase().includes(search.toLowerCase()))
                // .filter((item) => (item.name === RecordList.name) && item.name.toLowerCase().includes(search.toLowerCase()))
                                    
                .map((record) => {
                    return (
                        <>
                            <div className="display_all_records_card" key={record.id} style={record.id !== '' && record.name !== '' && record.category !== '' && record.date !== '' ? {} : { display: "none" }}>

                                <p>{record.id}.</p>
                                <p>{record.name}</p>
                                {/* <p>{record.date}</p> */}
                                <p>{record.category}</p>
                                {/* {console.log(record.category)} */}
                                {/* <p>{record.url}</p> */}
                                {/* <a href={`https://gateway.pinata.cloud/ipfs/${record.substring(6)}`} target="_blank"> */}
                                <a href={record.file} target="_blank">
                                    <i class='bx bxs-file-doc icons' style={{ fontSize: "1.5rem" }}></i>
                                </a>
                                <p></p>
                                <p></p>
                                <div>

                                    <button className="cross">
                                        <Link className="nav_link" to="/delete">
                                            {/* {console.log(record.name)} */}
                                            <i className='bx bxs-trash icons' ></i>
                                        </Link>
                                    </button>

                                    <button className="cross">
                                        <Link className="nav_link" to="/share">
                                            <i class='bx bx-share-alt icons' ></i>
                                        </Link>
                                    </button>
                                </div>
                            </div>

                            <Link className="nav_link " to="/create" style={{ zIndex: "1000", position: "fixed", bottom: "6rem", right: "20rem" }}>
                                <i class='bx bxs-plus-circle ' style={{ fontSize: "4rem", color: "#0ef" }}></i>
                            </Link>
                        </>
                    )
                }
                )}
            </div>


        }</div>
    </>

}

export default DisplayAll;
