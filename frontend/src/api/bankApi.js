import axios from 'axios'

const bankApi={
    getBankList:async ()=>{
        try {
            const response=await axios.get('https://www.gov.uk/bank-holidays.json')
             return response.data
            
        } catch (error) {
            return error
        } 
    }
}

export default bankApi