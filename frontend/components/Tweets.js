import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { useState } from 'react'
import {Avatar} from 'web3uikit'

const style = {
    wrapper: `flex p-3 border-b border-[#38444d]`,
    profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
    postMain: `flex-1 px-4 gap-3`,
    headerDetails: `flex items-center`,
    name: `font-bold mr-1`,
    verified: `text-[0.8rem]`,
    handleAndTimeAgo: `text-[#8899a6] ml-1`,
    tweet: `my-2`,
    image: `rounded-3xl`,
    footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
    footerIcon: `rounded-full text-lg p-2`,
}

const Tweets = ({displayName,text,onClick}) =>{
    


        return (
            <div className={style.wrapper}>
                <div className='rounded-full'>
                    {/* <img className='h-full w-full rounded-full z-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtnm9lhL6KY_z2Sx-iv_vmmpv44OfJm6SGDgKdKeg0akArEvUu5_1BUqKr_hi2WS1NIo&usqp=CAU' /> */}

                    <Avatar
                        
                        isRounded
                        theme="image" 
                        />
                </div>
                <div className={style.postMain}>
                    <div>
                        <span className={style.headerDetails}>
                            <span className={style.name}>{displayName}</span>


                        </span>



                        <div className={style.tweet}>{text}</div>


                    </div>
                    <div className={style.footer}>
                        <div className={`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a]`}>
                            <FaRegComment />
                        </div>
                        <div
                            className={`${style.footerIcon} hover:text-[#03ba7c] hover:bg-[#1b393b]`}
                        >
                            <FaRetweet />
                        </div>
                        <div
                        
                            className={`isActive ? ${style.footerIcon} hover:text-[#e0245e] hover:bg-[#1b393b] : ${style.footerIcon}  hover:bg-[#1b393b]`}
                        >
                            <AiOutlineHeart/>
                        </div>
                        <div
                            className={`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a]`}
                        >
                            <FiShare />
                        </div>
                        <div
                            className={`${style.footerIcon} hover:text-[#1d9bf0] hover:bg-[#1e364a]`}
                        >

                            
                            <AiOutlineDelete onClick={onClick}/>
                            
                        </div>
                    </div>
                </div>
            </div>

        )

    }


export default Tweets