import type { ReactElement } from "react";


export default function Wrapper({ children }: { children: ReactElement }) {
  return <>
    <main className="w-60 h-80">
      {children}
    </main>

  </>
}
