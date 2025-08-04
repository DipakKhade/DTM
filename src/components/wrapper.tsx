import type { ReactElement } from "react";


export default function Wrapper({ children }: { children: ReactElement }) {
  return <>
    <main className="w-80 h-96 bg-[#292626] text-slate-100">
      {children}
    </main>

  </>
}
