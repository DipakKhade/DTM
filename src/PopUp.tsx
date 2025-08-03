import './App.css'
import { useEffect } from 'react'

function Popup() {
  useEffect(() => {
    console.log('hello there')
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'd') {
        chrome.tabs.create({ url: 'https://example.com' }) // 👈 opens new tab
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])
  return (
    <div className='text-red-400 bg-green-300'>
      hello from this extension
    </div>
  );
}
export default Popup;

