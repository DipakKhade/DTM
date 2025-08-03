import './App.css'
import { useEffect } from 'react'

function Popup() {
  useEffect(() => {
    console.log('hello there')
  }, [])
  return (
    <div className='text-red-400 bg-green-300'>
      hello from this extension

    </div>
  );
}
export default Popup;

