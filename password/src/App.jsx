import { useState, useCallback, useEffect, useRef } from "react"
import './App.css'




function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
      let pass =""
      let str = "DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABC"

      if (num) str +=  "0123456789"
      if (char) str +=  "~!@#$%^&*()_+{}"

      for (let i = 1; i <=length; i++) {
        let char  = Math.floor(Math.random() * str.length+1)
        pass += str.charAt(char)
      }
      setPassword(pass)
  }, [length, num, char, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
   
  


      useEffect(() => {passwordGenerator()},
    [length, num, char, passwordGenerator])
        
       
  

  return (
    
      <div className="w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-5 text-orange-500 bg-gray-700">

        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden md-4">

        <input 
        type="text" 
        value={password}
        className="outline-none w-full py-1 px-3 rounded-lg"
        placeholder="password"
        readOnly
        ref={passwordRef}
        />


        <button onClick={copyPassword} 
        className="outline-none text-white 
        bg-blue-700 px-3 py-0.5 shrink-0"> Copy </button>
         
        
       </div>
       <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input type="range"
          min={8}
          max={20}
          value={length}
          className="curser-pointer" 
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={num}  
          id="numberInput"
          onChange={() => {setNum((prev) => !prev)}}
          />
          <lebel htmlFor="numberInput"> Numbers </lebel>
        </div>

        <div className="flex item-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={char}  
          id="characterInput"
          onChange={() => {setChar((prev) => !prev)}}
          />
          <lebel htmlFor="characterInput"> Characters</lebel>
        </div>
       </div>
      
    </div>
      
  

  )
}

export default App
