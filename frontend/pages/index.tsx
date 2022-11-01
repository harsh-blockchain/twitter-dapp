import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { useState, useEffect } from 'react';



declare var window: any


export default function Home() {


  const [account, setAccount] = useState('');
  const [network, setNetwork] = useState(false);


  
  

  const connectWallet = async () => {
    try{

      const { ethereum } = window;

      if(!ethereum){
        alert('Get metamask');
        return;
      }

      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      console.log('Connected', accounts[0]);
      setAccount(accounts[0]);
      

      const chainId = await ethereum.request({method: 'eth_chainId'});
      console.log('Connected', chainId);  
      if(chainId !== '0x5'){
        alert('Please Connect to Goerli Network');
        setNetwork(false);
        
        return;
      }else{
        setNetwork(true);
       
      }


      ethereum.on('accountsChanged', async () => {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        setAccount(accounts[0]);
        

        
      });

      
      

    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    connectWallet();
    
      
    
  })
  


  return (
    
    <div className='flex h-screen w-screen select-none justify-center bg-[#15202b] text-white'>
      

        {
          account && network ? (

            <div className='flex-w-[1400px] flex w-2/3 justify-between'>
            




              <div className='flex-[0.26]'>
                <Sidebar account={account} />
              </div>
              <div className='flex-[0.49] border-r border-l border-[#38444d]'>
                <Feed />
              </div>
              <div className='flex-[0.25]'>
                <Widgets />
              </div>



            </div>

            
          ) : (
            <div className='flex-w-[1400px] flex w-2/3 justify-center items-center'>


              <button onClick={connectWallet} 
              className='bg-white text-black font-bold rounded-xl px-10 py-5 text-xl hover:bg-gray-300 hover:text-green-600 hover:scale-110 transition-all transform duration-200 ease-in-out'>
              
                Connect Wallet
              </button>




            </div>
          )
        }
       

       
      </div>
    
  )
}
