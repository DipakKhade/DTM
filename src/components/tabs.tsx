import { useContext } from "react"
import { TabsContext } from "../context/tabs"

export default function Tabs() {
  const tabs = useContext(TabsContext)
  return <>
    <div className="w-full h-12 bg-[rgba(0, 0, 0, 0.87)] text-[#a5a5a5] fixed bottom-0 border border-top border-slate-700">
      <div className="flex item-center justify-around">
        {tabs.map((tab, index) => {
          return <button className="cursor-pointer text-2xl item-center justify-between bold space-x-4 rounded-sm" key={index} onClick={() => {
            for (let t in tabs) {
              if (Number(t) === index) {
                tabs[t]['isActive'] = true
                tabs[t]['action']();
              } else {
                tabs[t]['isActive'] = false
              }
            }
            console.log('tabs---', tabs)
          }}>
            {tab.title}
          </button>
        })}
      </div>
    </div>
  </>
}
