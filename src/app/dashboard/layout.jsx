import React from 'react'
import Navbar from './_components/Navbar'
import Sidebar from './_components/Sidebar'
import '../globals.css'
import "@uploadthing/react/styles.css";


export const metadata = {
  title: "Accounting Worker's Admin Dashboard",
  description: "accounting dashboard for home workers",
};

const layout = ({children}) => {
  return (
    <div className='w-full '>
    <Navbar/>
    <div className='flex pt-[53px] z-0 '>
        <div className='w-1/6 fixed h-screen border-r border-r-primary '><Sidebar/></div>
        <div className='pl-[17%]'>{children}</div>
    </div>
    </div>
  );
}

export default layout