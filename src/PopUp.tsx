import './App.css'
import { useContext } from 'react'
import Wrapper from './components/wrapper';
import Header from './components/header';
import ViewTodo from './components/view-todo';
import AddTodo from './components/add-todo';
import { TodoContext } from './context/todo-context';
import Tabs from './components/tabs';
import { TabsContext } from './context/tabs';
function Popup() {
  const tabs = useContext(TabsContext)
  console.log('tabs.find(x => x.title === Add)?.isActive ', tabs)
  return (
    <TabsContext value={[
      { title: 'Completed', action: () => { console.log('complted action') }, isActive: false },
      { title: 'Add', action: () => { console.log('add action') }, isActive: true },
      { title: 'Incomplete', action: () => { console.log('Incomplete action') }, isActive: false },
    ]}>
      <TodoContext value={[{ id: 1, completed: false, date: new Date, desc: 'this is a todo desc', title: 'title is this' }
      ]}>
        <Wrapper>
          <>
            <Header />
            {
              tabs.find(x => x.title === 'Completed')?.isActive === true && <div>asd</div>
            }
            {
              tabs.find(x => x.title === 'Add')?.isActive === true && <AddTodo />
            }
            {
              tabs.find(x => x.title === 'Incomplete')?.isActive === true && <ViewTodo />
            }
            <Tabs />
          </>
        </Wrapper>
      </TodoContext>
    </TabsContext >
  );
}
export default Popup;

