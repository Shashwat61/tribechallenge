import React, { memo } from 'react';
import utils from '../utils/DateUtil'
import {BankContext} from '../App'


function Header() {
  const {date,setDate}=React.useContext(BankContext)
  
  function handleClick(e){
    if(e.target.innerHTML==='Yesterday') setDate(utils.getYesterday())
    if(e.target.innerHTML==='Last week') setDate(utils.getLastWeek())
    if(e.target.innerHTML==='Last month') setDate(utils.getLastMonth())
    else return;
  }
  function handleChange(e){
    setDate(e.target.value)
  }

  return (
  <div className="flex items-center justify-between p-4 border-b shadow-sm ">
       <div>
       <h3 className="text-lg font-semibold ">UK Bank Holidays</h3>    
       </div>
       <div onClick={handleClick} className="space-x-2">
         {/* yesterday */}
         <button className="btn">Yesterday</button>
         {/* last week */}
         <button className="btn">Last week</button>
          {/* last month */}
          <button className="btn">Last month</button>
          {/* custom */}
          <div className="inline ">
           <input type="date" className="border outline-none border-slate-800" onChange={handleChange}/>
          </div>

       </div>
  </div>
  );
}

export default memo(Header);
