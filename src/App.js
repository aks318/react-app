import './App.css';
import ClickCounter from './component/HOC/ClickCounter';
import HoverCounter from './component/HOC/HoverCounter';
import MemoCounter from './component/Hooks/MemoCounter';
import ParentComponet from './component/Hooks/UseCallbackCounter/ParentComponet';
import TopLevel from './component/Hooks/UseContextHook.js/TopLevel';
import UseReducerHook from './component/Hooks/UseReducerHook';

function App() {
  return (
    <div className="App">
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ParentComponet /> */}
      {/* <MemoCounter /> */}
      {/* <UseReducerHook /> */}
      <TopLevel />
    </div>
  );
}

export default App;
