import Web3 from 'web3';
// import "./Wallet.css"
// import './App.css'
// import ABI from './../../../api/abi_1.json';
import ABI from './../../abi_2.json'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';




const Wallet = ({saveState})=>{

    const navigateTo = useNavigate();

    const connectWallet = async()=>{
        try{
            if(window.ethereum){
                const web3 = new Web3(window.ethereum);
                const accounts = await window.ethereum.request({
                    method : "eth_requestAccounts",
                })

                console.log(web3,accounts);
        
                // const contractAddress = "0xce6e0f8C03580B663A51834b10708736Ebd00784";
                const contractAddress = "0x2909F3a8445E438b875725A83Fdd156E2a55C5e3";
                const contract = new web3.eth.Contract(ABI,contractAddress);
                console.log(contract);

                saveState({web3:web3,contract:contract,account:accounts[0]})

                navigateTo('/display');
            }
            else{
                throw new Error;
            }
        }
        catch(error){
            console.log(error);
        }
        // console.log(Web3);
    }

    return (
        <div style={{
            
        }}>
        {/* <div style={{position: 'absolute'}}>
            <ParticleSettings/>
        </div> */}
        <div className='wallet_header' style={{background: "none",
        //  margin:"1rem 1rem 5rem 5rem",
        //  width:"80vw",
         display:"block",
        //  alignSelf: "center",
        //  alignItems: "center" 
        // margin: "1rem auto",
        // marginLeft: "5px"
         }}>
            <div style={{
                margin: "1rem auto",
                background:"#333",
                width:"30vw",
                borderRadius: "1rem"
            }}>
                
                <span>WELCOME TO</span>
                <p>EVAULT DAPP</p>
            </div>
        </div>
        <div style={{
            background: "none",
            position: "relative",
            padding: "7rem 2rem 10rem 2rem",
            borderRadius: "2rem",  
            zIndex:"10",
            backdropFilter: "blur(1rem)",
            boxShadow: "10px 10px 36px -6px rgba(0,0,0,0.5)"
        }}>

            {/* <h1>WELCOME <span>BACK! </span></h1> */}
            <p>Securely store and access your digital assets </p>
             <p> with our cutting-edge web storage platform,</p>
            <p> backed by the transparency and immutability of </p>
            <p><span>blockchain technology.  </span></p>
            {/* <p>Your data, your control—experience the future of secure and decentralized web storage</p> */}
            <div className='wallet_container'>

            <button onClick={connectWallet} className='btn wallet_btn' >Connect Wallet</button>
            </div>
        </div>
        </div>
    )
}

Wallet.propTypes = {
    saveState : PropTypes.func.isRequired,
};

export default Wallet;