import React from 'react'

const MenuButton =(props)=>{
    const {labels, onClick}=props;
    return(
        <button className=' text-2xl text-indigo-600 hover:text-indigo-400 cursor-pointer font-bold' onClick={onClick}>
            {labels}
        </button>
    )
}


const Menu = (props) => {
    const {onSectionChange,menuOpend, setMenuopend}=props;
  return (
    <>
     <button className='z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md'
     onClick={()=>setMenuopend(!menuOpend)}
     >
      <div 
      
      className={`bg-white h-0.5 rounded-md w-full transition-all ${
        menuOpend ? 'rotate-45   translate-y-0.5' :""
      }`} />
 <div 
      
      className={`bg-white h-0.5 rounded-md w-full  my-1 ${
        menuOpend ? ' hidden' :""
      }`} />

<div 
      
      className={`bg-white h-0.5 rounded-md w-full  transition-all ${
        menuOpend ? ' -rotate-45' :""
      }`} />
     
     </button>
     <div
     className={
        `
        z-10 fixed top-0  right-0 bottom-0 bg-white transition-all duration-100 overflow-hidden flex flex-col ${
            menuOpend ? 'w-80' : 'w-0'
        }
        `
     }
     >
          <div className='flex-1 flex items-start justify-center flex-col gap-6 p-8'>
            <MenuButton labels='About' onClick={()=>onSectionChange(0)} />
            <MenuButton labels='Skill' onClick={()=>onSectionChange(1)} />
            {/* <MenuButton labels='Experience' onClick={()=>onSectionChange(2)} /> */}
            <MenuButton labels='Projects' onClick={()=>onSectionChange(2)} />
             <MenuButton labels='Contact' onClick={()=>onSectionChange(3)} />
          </div>
     </div>
    </>
  )
}

export default Menu