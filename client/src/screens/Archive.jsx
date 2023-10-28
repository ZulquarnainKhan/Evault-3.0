import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigate from '../components/navigate';

function Archive() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/records');
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
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
    <div style={{marginLeft: "10rem", marginTop:"2rem"}}>

      <h1>Archive Records</h1>
    
            
     
      <input className="searchBar" type="search" placeholder="Search Records" aria-label="Search" style={{marginBottom: "2rem"}} value={search} onChange={(e)=>{setSearch(e.target.value)}} /> <ul>
        {data.filter((item) =>  item.name.toLowerCase().includes(search.toLowerCase())).map(item => (
        //   <li key={item._id}>{item.name}</li>
          // Add other fields as needed
          <li key={item._id}>
            <div className="display_all_records_card_type" style={{display:"flex",
                // border:"2px solid red",
                justifyContent:"space-between",
                marginBottom: "0.5rem",
                padding:"0.3rem 1rem",
                background: "linear-gradient(to right ,#c800ff,#6f00ff)",
                borderRadius: "0.5rem"

              }}>
                            {/* <p>Id </p> */}
                            {console.log(item.name)}
                            <p>{item.name}</p>
                            {/* <p>Date</p> */}
                            <p>{item.type}</p>
                            <p></p>
                            {/* <p>{item.file}</p> */}
                            <a href={item.file} target="_blank">
                                    <i class='bx bxs-file-doc icons' style={{ fontSize: "1.5rem" }}></i>
                                    {/* <img  src={`${record.url}`} alt="Document" className="image-list"></img> */}
                                    

                                </a>

                            {/* <p></p>
                            <p></p>
                            <p></p>
                            <p>Delete</p>
                            <p>Share</p> */}

                        </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Archive;
