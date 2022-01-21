const utils={
    today:new Date(),
    getYesterday:function(){
      // console.log(this.today)
      const yesterday=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()-1).toLocaleDateString()
      return yesterday
      // console.log(yesterday,'yesterday')
      
    },
    getLastWeek:function(){
      // console.log(this.today,'last week')
      const lastWeek=new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()-7).toLocaleDateString()
      // console.log(lastWeek,'last week')
      return lastWeek
    },
    getLastMonth:function(){
      const lastMonth=new Date(this.today.getFullYear(),this.today.getMonth()-1,1).toLocaleDateString()
      // console.log(lastMonth,'month')
      return lastMonth
  
    }
  }
  export default utils