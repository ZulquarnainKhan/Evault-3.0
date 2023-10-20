// // contract address = 0xce6e0f8C03580B663A51834b10708736Ebd00784

// const express = require('express');
// const ABI = require("./abi.json"); 
// const {Web3} = require('web3');
// const cors = require('cors');


// const app = express();

// app.use(cors());
// app.use(express.json())

// const PORT = 3134;

// const web3 = new Web3(new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/5eb87f3effbe427b9bd6bcc1b59a0307"));
// // const web3 = new Web3(window.ethereum); 
// const contractAddress = "0xce6e0f8C03580B663A51834b10708736Ebd00784";

// const contract = new web3.eth.Contract(ABI,contractAddress);

// // console.log(contract);

// // console.log(web3);

// // const displayAllRecord = async ()=>{
// //     const records = await contract.methods.displayAll().call({from:"0xdd0a91E33761f8957FFd304be0be07201D0F039D"});
// //     console.log(records)
// // }

// // displayAllRecord();


// app.get("/api/ethereum/evault/display-all",async(req, res)=>{
//     // const {} = req.params;
//     try{
//         const records = await contract.methods.displayAll().call({from:"0xdd0a91E33761f8957FFd304be0be07201D0F039D"}) ;
//         console.log(records);
//         if(records.length>0){
//             const recordList = records.map(({id,name,date,url})=>{
//                 const recordId = Number(id);
//                 return {recordId,name,date,url};

//             })
//             res.status(200).json({status:200,recordList,message:"Record list exist"})
//         }

//     }
//     catch(error){
//         console.error(error);
//         res.status(404).json({status:404,message:"Record not found"})
//     }
// })

// // app.post("/api/ethereum/evault/create-record", async(req,res)=>{

// // })


// app.listen(PORT,()=>{
//     console.log(`Server running at port ${PORT}`);
// })