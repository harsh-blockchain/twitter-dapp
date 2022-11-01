import React from 'react'
import { useState, useEffect } from 'react'
import {ethers} from 'ethers'
import {TwitterAddress,TwitterABI} from '../config'
import {useNotification} from 'web3uikit'
import {Avatar} from 'web3uikit'


const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-16 w-16 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

function Tweetbox() {


  const[tweetMessage,setTweetMessage] = useState('');




  const addTweet = async() => {

    let tweet = {
      'tweetText' : tweetMessage,
      'isDeleted' : false
    };


    try{

      const {ethereum} = window;

      if(ethereum){

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(TwitterAddress,TwitterABI,signer);

        const tweetTxn = await contract.addTweet(tweet.tweetText,tweet.isDeleted);
        await tweetTxn.wait();


      }else{
        console.log('No ethereum object found');
      }



    }catch(err){
      console.log(err);
    }


  }


  const sendTweet = () => {
    
       

    addTweet();
    setTweetMessage('');
  }




  
  




  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        {/* <img
          src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/2edd054d22a021e9f73f92d7c168e3da-1617020793/SMOKEY-finale/create-a-cool-animal-avatar-or-profile-picture.png"
          alt="profile image"
          className={style.profileImage}
        /> */}

                    <Avatar
                        
                        isRounded
                        theme="image" 
                        />
      </div>
      <div className={style.tweetBoxRight}>
        <form className=' py-3'>
          <textarea
            className={style.inputField}
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />

          




          {/* icons */}
          <div className=' pt-4'>

           



{/* submit */}

            <div className='flex justify-between pr-12'>
              <div></div>
              <button
                type="submit"
                /* onClick={sendTweet} */
                className={`${style.submitGeneral} ${tweetMessage ? style.activeSubmit : style.inactiveSubmit
                  }`}

                  /* onClick={() => (handleNewNotification('error'),sendTweet)} */

                  onClick={sendTweet}
                  

                  

              
              >
               Tweet </button>
            

            </div>

          </div>
        </form>
      </div>
    </div>
  )
                }
              

export default Tweetbox
