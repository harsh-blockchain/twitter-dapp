import React, { useEffect } from 'react'
import Sidebaroptions from './NavBarCards'
import { FiMoreHorizontal } from 'react-icons/fi'
import { VscTwitter } from 'react-icons/vsc'
import { useState } from 'react'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import {
    BsBookmark,
    BsBookmarkFill,
    BsPerson,
    BsPersonFill,
} from 'react-icons/bs'


import {Avatar} from 'web3uikit'



function Sidebar({account}) {


    


    const [selected, setSelected] = useState('Home')
    return (
        <div className="flex flex-[0.7] flex-col px-8">
            <div className="m-4 text-4xl">
                <VscTwitter />
            </div>
            <div className="flex-1">
                <Sidebaroptions
                    Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
                    text="Home"
                    isActive={Boolean(selected === 'Home')}
                    setSelected={setSelected}
                />

                <Sidebaroptions
                    Icon={selected === 'Explore' ? FaHashtag : BiHash}
                    text="Explore"
                    isActive={Boolean(selected === 'Explore')}
                    setSelected={setSelected}
                />

                <Sidebaroptions
                    Icon={selected === 'Notifications' ? FaBell : FiBell}
                    text="Notifications"
                    isActive={Boolean(selected === 'Notifications')}
                    setSelected={setSelected}
                />
                <Sidebaroptions
                    Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
                    text="Messages"
                    isActive={Boolean(selected === 'Messages')}
                    setSelected={setSelected}
                />
                <Sidebaroptions
                    Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
                    text="Bookmarks"
                    isActive={Boolean(selected === 'Bookmarks')}
                    setSelected={setSelected}
                />
                <Sidebaroptions
                    Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
                    text="Lists"
                    isActive={Boolean(selected === 'Lists')}
                    setSelected={setSelected}
                />
                <Sidebaroptions
                    Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
                    text="Profile"
                    isActive={Boolean(selected === 'Profile')}
                    setSelected={setSelected}
                    redirect={'/profile'}
                />

                <Sidebaroptions Icon={CgMoreO} text="More" setSelected={setSelected} />
                <div className="mt-[20px] flex h-[50px] cursor-pointer items-center justify-center rounded-3xl bg-[#1d9bf0] font-bold hover:bg-[#1b8cd8]">
                    Tweet
                </div>
            </div>
            <div className="mb-6 flex cursor-pointer items-center rounded-[100px] p-2 hover:bg-[#333c45] mt-56">
                <div className="item-center mr-4 flex justify-center rounded-full">
                    {/* <img className='rounded-full w-16' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtnm9lhL6KY_z2Sx-iv_vmmpv44OfJm6SGDgKdKeg0akArEvUu5_1BUqKr_hi2WS1NIo&usqp=CAU' /> */}


                    <Avatar
                        
                        isRounded
                        theme="image"
                        />
                </div>
                <div className="flex flex-1">
                    <div className="flex-1">

                        <p>{(account).slice(0,6)}....{(account).slice(-5,account.length)}</p>

                        <FiMoreHorizontal className=' items-end' />



                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar
