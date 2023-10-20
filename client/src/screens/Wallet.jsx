import Web3 from 'web3';
// import ABI from './../../../api/abi_1.json';
import ABI from './../../../api/abi_2.json';
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
        <>
        {/* <div style={{position: 'absolute'}}>
            <ParticleSettings/>
        </div> */}
        <div className='wallet_header'>
            <span>WELCOME TO</span>
            <p>TODO app</p>
        </div>
            <h1>WELCOME <span>BACK! </span></h1>
            <div className='wallet_container'>

            <button onClick={connectWallet} className='btn wallet_btn' >Connect Wallet</button>
            </div>
        </>
    )
}

Wallet.propTypes = {
    saveState : PropTypes.func.isRequired,
};

export default Wallet;