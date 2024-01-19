

import './Sidebar.css';
import { sidebarData } from '../../../../utils/utilsData';
import {motion} from 'framer-motion';
import {  useState } from 'react';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import {UilBars} from '@iconscout/react-unicons';
import logo from '../../../assets/fintel-logo.png'

const Sidebar = () => {
    const [selected,setSelected] = useState(0);
    const [expanded,setExpanded] = useState(false);

    const sidebarVariants = {
      true: {
        left :'0'
      },
      false : {
        left : '-60%'
      }
    }

    return ( 
      <>
      <div className="bars" style={expanded ? {left:'60%'} : {left : '5%'} }
        onClick={()=> {setExpanded(!expanded)}}  >
        <UilBars className=' text-[36px] text-black' />
        
      </div>
      <motion.div className="sidebar" variants={sidebarVariants} animate = {window.innerWidth <= 992 ? `${expanded}` : ''} >
        <header>
         <a href="/">
         <img src={logo} className=' w-[80%] object-cover' alt='logo' />
         </a>
        </header>

        <div className="sidebar-menu">
         {sidebarData.map((sidebar,index) => (
           <div className={selected === index ? 'menu-preview active' : 'menu-preview'} key={index} onClick={() => setSelected(index)}>
             <sidebar.icon className='' color='#183835'/>
             <h2 className='font-raleway text-[18px] '>{sidebar.title}</h2>
           </div>
         ))}
         

            <div className="bottom">
            <div className='flex flex-col gap-[0.4rem] mobile px-2 '>
              <h2 className='text-[20px] font-dmSans font-[600] '>&copy; Fintell, 2024</h2>
              <p className='text-zinc-500 font-[300] text-[15px] font-raleway'>Digital payment platform is a solution for all types of business.</p>
            </div>
            <div className="menu-preview web">
             <UilSignOutAlt/> 
            <a href='/'>Logout</a>
            </div>
            </div>
                 
        </div>
      </motion.div>
    </>
     );
}
 
export default Sidebar;
