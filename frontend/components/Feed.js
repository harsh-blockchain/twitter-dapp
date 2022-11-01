import React, { useState, useEffect } from 'react'
import { BsStars } from 'react-icons/bs'
import Tweetbox from './Tweetbox'
import Tweets from './Tweets'
import {ethers} from 'ethers'
import {TwitterAddress,TwitterABI} from '../config'



const style = {
  wrapper: `flex-[2] overflow-auto scrollbar-y-scroll scrollbar-hide`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

  /* const post = [
  {
    name: 'Harsh',
    username: '0*vfdfvdv484v1d5f',
    avtaar: 'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
    text: 'gm',
    isProfileImageNft: true,
    timestamp: '2019-08-07 08:08:08',
  },
  {
    name: 'Happy',
    username: '0*vfdfvdv484v1d5f',
    avtaar: 'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000z',
  },
  {
    name: 'Priya',
    username: '0*vfdfvdv484v1d5f',
    avtaar: 'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
    text: 'gm',
    isProfileImageNft: true,
    timestamp: '2020-06-01T12:00:00:000z',
  },
  {
    name: 'Radhika',
    username: '0*vfdfvdv484v1d5f',
    avtaar: 'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000z',
  },
  {
    name: 'Gouri',
    username: '0*vfdfvdv484v1d5f',
    avtaar: 'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2016-08-08 08:08:08',
  }
]  */



 





const Feed = () => {


  const [posts, setPosts] = useState([]);

  

  const getAllTweets = async() => {
    try {
      

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const TwitterContract = new ethers.Contract(
          TwitterAddress,
          TwitterABI,
          signer
        )

        let allTweets = await TwitterContract.getMyTweets();
        setPosts(allTweets);
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllTweets();
    deleteTweet();
  }, []);

  const deleteTweet = key => async() => {
    console.log(key);

    // Now we got the key, let's delete our tweet
    try {

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const TwitterContract = new ethers.Contract(
          TwitterAddress,
          TwitterABI,
          signer
        )

        let deleteTweetTx = await TwitterContract.deleteTweet(key, true);
        let allTweets = await TwitterContract.getMyTweets();
        setPosts(allTweets);
        
        
      } else {
        console.log("Ethereum object doesn't exist");
      }

    } catch(error) {
      console.log(error);
    }
  }



  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <div className=''>
        <Tweetbox />
        
        
        {posts.map((post) => (
          <Tweets
            key={post.id}
            displayName={post.username}
            text={post.tweetText}
            onClick={deleteTweet(post.id)}
            
            
          />
        ))}
      





      </div>
    </div>
  )
}

export default Feed
