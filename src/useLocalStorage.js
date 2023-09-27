import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  
  // Add the state and effect here
  const[value,setValue]=useState("")
  
  useEffect(()=>{
    const value=localStorage.getItem(key)
    if(value){
      setValue(value)
    }

  },[])

//   useEffect(() => {
//     localStorage.setItem(key, defaultValue);
// },[defaultValue]);


useEffect(() => {
  localStorage.setItem(key, value);
},[value])

return{value,setValue}



// return{key:defaultValue}
};

export default useLocalStorage;






// useLocalStorage.js
