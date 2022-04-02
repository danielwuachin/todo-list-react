import React, { useRef } from 'react'
import './style.css';

interface Props{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' 
      onSubmit={(e) =>{
        handleAdd(e)
        inputRef.current?.blur()
      }}>
      <input 
      className='input__box' 
      type="input" 
      placeholder='Enter a task'
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      ref={inputRef} />
      <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField