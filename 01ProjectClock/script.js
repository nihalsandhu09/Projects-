setInterval(()=>{
    let date = new Date()
    let h =   date.getHours()
    let m =  date.getMinutes() 
    let s =  date.getSeconds() 
  
   
  console.log(h)
  console.log(m)
  
  
  let hours = document.getElementById("hours")
  hours.innerHTML= h + ":";
  hours.style.fontSize= "200px";
  
  
  let minutes = document.getElementById("minutes")
  minutes.innerHTML= m + ":"; 
  minutes.style.fontSize= "200px";
  
  let seconds = document.getElementById("seconds")
  seconds.innerHTML= s;
  seconds.style.fontSize= "200px";
  
  
  },1000)