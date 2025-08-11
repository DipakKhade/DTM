import './App.css'
import { useState } from 'react'
import Wrapper from './components/wrapper';
import Header from './components/header';
import ViewTodo from './components/view-todo';
import AddTodo from './components/add-todo';
import { TodoContext } from './context/todo-context';
import Tabs from './components/tabs';
import { TabsContext } from './context/tabs';
function Popup() {
  const [mode, _setMode] = useState<'Add' | 'View'>('View')
  return (
    <TabsContext value={[
      { title: 'Completed', action: () => { console.log('complted action') }, isActive: false },
      { title: 'Add', action: () => { console.log('add action') }, isActive: false },
    ]}>
      <TodoContext value={[{ id: 1, completed: false, date: new Date, desc: 'this is a todo desc', title: 'title is this' }
      ]}>
        <Wrapper>
          <>
            <Header />
            {mode === 'View' ? <ViewTodo /> : <AddTodo />}
            <Tabs />
          </>
        </Wrapper>
      </TodoContext>
    </TabsContext >
  );
}
export default Popup;

