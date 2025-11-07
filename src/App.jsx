import React, { useState } from 'react'

const App = () => {
  const [input, setinput] = useState('');
  const [Details, setDetails] = useState('');
  const [newinput, setnewinput] = useState([]);

  const prevent = (e) => {
    e.preventDefault()
    const copyinput = [...newinput]
    copyinput.push({ input, Details })
    if (input, Details === '') {
      alert('You must set title and write something in details before hitting Add button')
      return
    }
    setnewinput(copyinput)
    console.log(copyinput)
    setinput('')
    setDetails('')

  }

  const deleteNote = (idx) => {
    const copynewinput = [...newinput]
    copynewinput.splice(idx, 1)
    setnewinput(copynewinput)

  }
  return (
    <div className='md:flex'>
      <title>My Notes App</title>
      <form onSubmit={(e) => {
        prevent(e)
      }} className=' w-2/3 my-5 m-auto lg:m-10 h-auto  flex flex-col gap-3.5 '>
        <h1 className='text-3xl lg:mb-20 font-bold text-center'>My Notes App</h1>
        <input
          value={input}
          onChange={(e) => {
            setinput(e.target.value)
          }}
          className='bg-transparent text-black h-[9vh] p-4 outline-none text-2xl w-full border-2  ' type="text" placeholder='Enter Heading...' />
        <textarea
          value={Details}
          onChange={(e) => {
            setDetails(e.target.value)
          }} className='bg-transparent text-black h-[25vh] p-4 outline-none text-2xl w-full border-2  ' name="" id="" placeholder='Enter Note'></textarea>
        <button className=' bg-transparent active:scale-95 w-full text-black h-[7vh] cursor-pointer font-bold hover:bg-blue-500 rounded-2xl text-2xl border-2   '>Add Note </button>
      </form>
      {/* <hr className='h-1.5 text-white' /> */}
      <div className="notes text-center items-start justify-self-center w-[80%]  md:w-1/2 my-4 flex-wrap justify-center  border-2 ml-5 mr-5 border-black rounded-2xl overflow-x-auto gap-2">
        <h1 className='font-black my-4 text-3xl font-bold x:ml-20'>Your Notes</h1>
        <div className=' flex my-1 flex-wrap justify-center items-start h-[35vh] md:h-[70vh]  p-2.5 rounded-2xl  gap-2'>
          {newinput.map((elem, idx) => {
            return <div key={idx} className="relative h-48 w-36 bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76h1c9GyhCn6etWdogqk0ZNio0twDYNKFoVEjoM-sbAdl-_xMBwlghy8eM8lnTtDKfws&usqp=CAU')] border-2 text-gray-800  rounded-2xl">
              <h2 className='p-2.5 text-start leading-tight font-bold relative '>{elem.input}  </h2>

              <p className='pl-2.5 leading-tight text-[11px] text-start '>{elem.Details} </p>
              <button onClick={() => {
                deleteNote(idx)
              }} className='absolute  h-[13%] w-[36%] text-white text-xs bottom-1 cursor-pointer right-1 active:scale-90 bg-red-500 rounded-full '>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
export default App