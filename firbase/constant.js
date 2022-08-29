

export function datePlus(days){
    const today = new Date();
    const tomorrow = new Date()
    
    // Add 1 Day
   return tomorrow.setDate(today.getDate() + Number(days)||3)

}


function validateEmail(email)  {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  export {validateEmail};