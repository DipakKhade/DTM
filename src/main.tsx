
import { useEffect } from "react";
import ReactDOM from "react-dom/client";

function Popup() {
  useEffect(() => {
    console.log('hello there')
  }, [])
  return (
    <div>
      hello from this extension

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Popup />);
