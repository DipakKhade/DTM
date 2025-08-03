import './App.css'
import { useEffect } from 'react'

function Popup() {
  useEffect(() => {
    console.log('hello there')
  }, [])
  return (
    <div>
      hello from this extension

    </div>
  );
}
export default Popup;

