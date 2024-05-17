import React,{useState} from 'react'

const Password = () => {
  const [input,setInput]=useState(false);
  const[includeUppercase, setIncludeUppercase]=useState(false);
  const[includeLowerCase,setIncludeLowerCase]=useState(false);
  const[includeNumbers,setIncludeNumbers]=useState(false);
  const[includeSymbols, setIncludeSymbols]=useState(false);
 
  const[passWord,setPassWord]=useState("");
  function generatePassword(){
    let charset="";
   
    if(includeUppercase) charset +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(includeLowerCase) charset +="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    if(includeNumbers) charset += "1234567890";
    if(includeSymbols) charset +="!@#$%^&*()_+?><?";
    let generatedPassword="";
    for(let i=0;i<input;i++) {
        const randomIndex=Math.floor(Math.random()*charset.length)
        generatedPassword +=charset[randomIndex]
    }
    setPassWord(generatedPassword) 
    }
    const copyToClipBoard=()=>{
    navigator.clipboard.writeText(passWord)
    alert("Text Copied in Clip Board")
  }

  return (
          <div className='password-generator'>
          <h2>Strong Password Generator</h2>

          <div className='input-group'>
          <label htmlFor="num">Password Length:</label>
          <input type="number" id='num'
           value={input}
           onChange={(e)=>setInput(parseInt(e.target.value))} />
          </div>

          <div className='checkbox-group'>            
          <input type="checkbox" id='upper' checked={includeUppercase} onChange={(e)=>setIncludeUppercase(e.target.checked)} />
          <label htmlFor="upper">Include Uppercase</label>
          </div>

          <div className='checkbox-group'>
          <input type="checkbox" id='lower' checked={includeLowerCase} onChange={(e)=>setIncludeLowerCase(e.target.checked)} />
          <label htmlFor="upper">Include Lowercase</label>
          </div>

          <div className='checkbox-group'>
          <input type="checkbox" id='numbers' checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)}/>
          <label htmlFor="number">Include Numbers</label>
          </div>

          <div className='checkbox-group'>
          <input type="checkbox" id='symbol'checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)}/>
          <label htmlFor="symbol">Include Symbol</label>
          </div>

          <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
          <div className='generate-password'>
          <input type="text" readOnly value={passWord}/>
          <button style={{cursor:'pointer'}} className='copy-btn' onClick={copyToClipBoard}>Copy</button>
          
          </div>
         
          </div>
         
  )
}

export default Password