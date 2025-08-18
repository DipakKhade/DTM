import './App.css'
import { useState } from 'react'
import Wrapper from './components/wrapper';
import Header from './components/header';
import { TodoContext } from './context/todo-context';
import { MdAssignmentAdd } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import AddTodo from './components/add-todo';
import ViewTodo from './components/view-todo';
function Popup() {
  const [tab, SetTab] = useState<'Add' | 'ViewCompleted' | 'ViewIncomplted'>('ViewIncomplted');
  const [todos, SetTodos] = useState([])
  return (
    <TodoContext.Provider value={todos}>
      <Wrapper>
        <>
          <Header onClick={() => SetTab('ViewIncomplted')} />

          {tab === 'ViewIncomplted' && <ViewTodo />}
          {tab === 'Add' && <AddTodo setTodos={SetTodos} />}
          {tab === 'ViewCompleted' && <div>asd</div>}

          <div>
            <div className="w-full h-12 bg-[rgba(0, 0, 0, 0.87)] text-[#a5a5a5] fixed bottom-0 border border-top border-slate-700">
              <div className="flex item-center justify-around">

                <button className="pt-2 cursor-pointer text-2xl item-center justify-between bold space-x-4 rounded-sm" onClick={() => SetTab('Add')}>
                  <MdAssignmentAdd />
                </button>
                <button className="cursor-pointer text-2xl item-center justify-between bold space-x-4 rounded-sm" onClick={() => SetTab('ViewCompleted')}>
                  < TiTick />
                </button>
              </div>
            </div>

          </div>
        </>
      </Wrapper>
    </TodoContext.Provider>
  );
}
export default Popup;

