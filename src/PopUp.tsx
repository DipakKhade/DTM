import './App.css'
import { useEffect, useState } from 'react'
import Wrapper from './components/wrapper';
import Header from './components/header';
import type { Todo } from './lib/types';
import ViewTodo from './components/view-todo';
import AddTodo from './components/add-todo';

function Popup() {
  const [mode, _setMode] = useState<'Add' | 'View'>('View')
  const [todo, _setTodo] = useState<Todo[]>([
    { id: 1, completed: false, date: new Date, desc: 'this is a todo desc', title: 'title is this' }
  ])

  useEffect(() => {

  }, [])
  return (
    <Wrapper>
      <>
        <Header />
        {mode === 'View' ? <ViewTodo todo={todo} /> : <AddTodo />}
      </>
    </Wrapper>
  );
}
export default Popup;

