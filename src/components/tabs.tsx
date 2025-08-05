
const tabs = [
  { title: 'Completed', action: () => { console.log('complted action') } },
  { title: 'Add', action: () => { console.log('add action') } },
]
export default function Tabs() {
  return <>
    <div className="w-full h-12 bg-[rgba(0, 0, 0, 0.87)] text-[#a5a5a5] fixed bottom-0 border border-top border-slate-700">
      <div className="flex item-center justify-around">
        {tabs.map((tab, index) => {
          return <button className="text-2xl item-center justify-between bold space-x-4 rounded-sm" key={index} onClick={() => tab.action()}>
            {tab.title}
          </button>
        })}
      </div>
    </div>
  </>
}
