import ReactDOM from "react-dom/client";
import App from './components/App';

const el = document.getElementById("root");
 
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);
 

 
// 5) Show the component on the screen
root.render(<App />);
