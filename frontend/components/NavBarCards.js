import React from 'react'


const NavBarCards = ({ Icon, text, isActive, setSelected, redirect }) => {
    return (
        <div>

            <div className='w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all gap-3 hover:duration-200 hover:ease-in-out' onClick={() => setSelected(text)}>

                <div className='text-2xl'>
                    <Icon />
                </div>

               
               <div className={`${isActive ? 'text-xl font-bold' : ' font-medium text-lg'}`}>
                    {text}
                </div>
               


            </div>



        </div>
    )
}

export default NavBarCards