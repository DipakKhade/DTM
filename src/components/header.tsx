import { useState } from "react";


export default function Header({ onClick }: {
  onClick: () => void
}) {
  const [date, _setDate] = useState(new Date().toString().split(' ').reduce((acc, x, index) => {
    if (index < 4) {
      return acc + x + ' '
    } else {
      return acc;
    }
  }, ''))

  return <>
    <header onClick={() => onClick()}>
      <div className="text-xl font-semibold flex item-center justify-center">
        <h1>
          Todo's
        </h1>
      </div>
      <div className="flex item-center justify-center">
        <p className="text-md">
          {date}
        </p>
      </div>
    </header>

  </>
}
