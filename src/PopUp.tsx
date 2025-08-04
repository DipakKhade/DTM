import './App.css'
import { useEffect, useState } from 'react'
import Wrapper from './components/wrapper';
import Header from './components/header';

function Popup() {
  const [mode, setMode] = useState<'Add' | 'View'>('View')
  useEffect(() => {

  }, [])
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}
export default Popup;

