import React from 'react'
import './App.css';
import Header from './components/Header';
import FilteredCards from './components/FilteredCards';
import BankApi from './api/bankApi'

export const BankContext=React.createContext([])

function App() {

  const[bankList,setBankList]=React.useState([])
  const [date,setDate]=React.useState('')
  const [events, setEvents]=React.useState([])

  
  React.useEffect(()=>{
    (async ()=>{
        const data=await BankApi.getBankList()
        for(let el in data){
          setBankList((newdata)=> [...newdata,data[el]])
          // for(let ev in data[el]){
          //   if(Array.isArray(data[el][ev])){
          //     setEvents((prev)=> [...prev, ...data[el][ev]])
          //   }
          // }
        }
     })()
  },[])
 
  return (
    <BankContext.Provider value={{bankList,date, setDate, events}}>
    <div className="">
      <Header/>
      <FilteredCards bankList={bankList} />
    </div>
    </BankContext.Provider>
  );
}

export default App;
