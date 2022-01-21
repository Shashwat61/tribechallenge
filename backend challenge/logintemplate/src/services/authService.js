import axios from 'axios'


const authService={
    getUser(){
       const token=localStorage.getItem('user')
       return token ? true:false
    },
    logout(){
      localStorage.removeItem('user')
    },
    async login(resp){
 
    const data={
           name:resp.profileObj.name,
           email:resp.profileObj.email,
           image:resp.profileObj.imageUrl
       }
       try{
           const res=await axios.post('http://localhost:5000/api/users/login',data)
              console.log(res.data,'res')
              if(res.data.accessToken){
                  localStorage.setItem('user',JSON.stringify(res.data.accessToken))
              }
           return res.data

       }catch(er){
           return er
       }
   }
}

export default authService