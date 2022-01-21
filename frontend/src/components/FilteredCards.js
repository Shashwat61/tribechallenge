import React from 'react';
import {BankContext} from '../App'
import FilteredCard from './FilteredCard'

function FilteredCards({bankList}) {
    const {date,events}=React.useContext(BankContext)
    const[newDate,setNewDate]=React.useState('')
    const[today,setToday]=React.useState(new Date().toLocaleDateString())
    
    function convertDate(str){
      if(str.includes('-')){
        return str
      }else{

        const newdate= str.split('/')
        
        const change=newdate && (newdate[2]+'-'+ (newdate[0].length>1 ? newdate[0] : '0'+newdate[0]) +'-'+ (newdate[1].length>1 ? newdate[1] : '0'+newdate[1]))
        return change
      }
    }

    React.useEffect(()=>{
      if(date!==''){
        if(!date.includes('-')){
          const changedDate=convertDate(date)
          const changedToday=convertDate(today)
          setNewDate(changedDate)
          setToday(changedToday)
          
        }
        else setNewDate(date)
      }
    },[date])
  
  return (
  <div className='p-4 mt-8'>
    <h1 className="text-lg font-semibold">Filtered Cards</h1>
    <div className="grid grid-cols-3 gap-2 mt-8 ">
    {   

        bankList.map(({division, events},i)=>(
          <div key={i}>
            <p className="font-semibold capitalize">{division}</p>
            { events.filter((event,i)=>(newDate!=='' ? (event.date>=newDate && event.date<=today):true)).map((event,i)=>(
              <FilteredCard events={event} key={i}/>              
              ))
            }
          </div> 
           )
           )
       }
    </div>
       <button className="mt-8 btn" onClick={()=>setNewDate('')}>Reset Date</button>
  </div>
  );
}

export default React.memo(FilteredCards);
