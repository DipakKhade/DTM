import './App.css'
import { useContext, useState } from 'react'
import Wrapper from './components/wrapper';
import Header from './components/header';
import ViewTodo from './components/view-todo';
import AddTodo from './components/add-todo';
import { TodoContext } from './context/todo-context';
import Tabs from './components/tabs';
import { TabsContext } from './context/tabs';
function Popup() {
  const [mode, _setMode] = useState<'Add' | 'View'>('View')
  const tabs = useContext(TabsContext)
  return (
    <TabsContext value={[
      { title: 'Completed', action: () => { console.log('complted action') }, isActive: false },
      { title: 'Add', action: () => { console.log('add action') }, isActive: false },
      { title: 'Incomplete', action: () => { console.log('Incomplete action') }, isActive: true },
    ]}>
      <TodoContext value={[{ id: 1, completed: false, date: new Date, desc: 'this is a todo desc', title: 'title is this' }
      ]}>
        <Wrapper>
          <>
            <Header />
            {

              tabs.find(x => x.title === 'Completed')[0]['isActive'] === true && <div>asd</div>

            }
            {
              tabs.find(x => x.title === 'Add')[0]['isActive'] === true && <AddTodo />

            }
            {

              tabs.find(x => x.title === 'Incomplete')[0]['isActive'] === true && <ViewTodo />
            }
            <Tabs />
          </>
        </Wrapper>
      </TodoContext>
    </TabsContext >
  );
}
export default Popup;

