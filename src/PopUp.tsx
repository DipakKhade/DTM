import './App.css'
import { useEffect } from 'react'
import Wrapper from './components/wrapper';

function Popup() {
  useEffect(() => {

  }, [])
  return (
    <Wrapper>
      <div className='text-red-400 bg-green-300'>
        hello from this extension
      </div>
    </Wrapper>
  );
}
export default Popup;

