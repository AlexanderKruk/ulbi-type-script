import { ChangeEvent, MouseEvent, DragEvent, FC, useState } from 'react'

export const EventExample : FC = () => {

  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const changeClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(value)
  }

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('DRAG')
  }

  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }


  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }


  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
    console.log('DROP!')
  }

  return (
    <div>
      <input value={value} onChange={changeHandler}type="text"/>
      <button onClick={changeClick}>Show</button>
      <div onDrag={dragHandler}draggable style={{width: '200px', height: '200px', background: 'red'}}></div>
      <div onDrop={dropHandler} onDragLeave={dragLeaveHandler} onDragOver={dragOverHandler} style={{width: '200px', height: '200px', background: isDrag ? 'blue' : 'red', marginTop:'15px'}}></div>
    </div>
  )
}
