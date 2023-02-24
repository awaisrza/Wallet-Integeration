import React, {useState} from 'react'
import {Contract, ethers} from 'ethers'

const Balances=()=>
{
    const[ether,setEther]=useState(0);
    
    const balanceofEth=async()=>
   {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    
    let ether;
    ether=await signer.getBalance();
    ether=ethers.utils.formatEther(ether,18);
    setEther(ether);

   }
return (
    <div>
        <header>
        <button onClick={balanceofEth}> ETH Balance</button>
        <h1>ETH:{ether}</h1>
    </header>
    </div>
);
}
export default Balances;