

export function datePlus(days){
    const today = new Date();
    const tomorrow = new Date()
    
    // Add 1 Day
   return tomorrow.setDate(today.getDate() + Number(days)||3)

}

export const getNetDate=(h)=>{
  const d = new Date();
  d.setHours(d.getHours()+h)
  let text = d.toLocaleDateString();
  return text;

}

export const getCurrentDate=()=>{
  const d = new Date();
  // d.setHours(d.getHours()+h)
  let text = d.toLocaleDateString();
  return text;

}
export const converDateTONumber=(date)=>{
  return Date.parse(date)
}

function validateEmail(email)  {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  export const generateNumberCode = (length) => {
    var result = "";
    var characters = "01234567891234567890987654321445";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  export const generateAlphaCode = (length) => {
    var result = "";
    var characters = "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  
  export const generateAlphaNumericCode = (length) => {
    var result = "";
    var characters =
      "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };


  export {validateEmail};