import './App.css';
import counter from './store/atoms/count';
import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil";
import { evenOddSelector } from './store/selector/evenOrOdd';

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

export default App


const Count = () => {
  console.log("Count Component renders")
  return (
    <>
      <CountRenderer />
      <Buttons />
      <EvenOrOdd />
    </>
  );
}


const CountRenderer = () => {
  console.log("Count Renderer renders")
  const count = useRecoilValue(counter);
  return (
    <>
    {count}
    </>
  );
}

const Buttons = () => {
  console.log("Count Buttons renders")
  const setCount = useSetRecoilState(counter);
  return (
    <>
      <button
      onClick={() => setCount(count => count+1)}
      >Increase</button>
      <button
      onClick={() => setCount(count => count-1)}
      >Decrease</button>
    </>
  );
}

const EvenOrOdd = () => {
  const evenOrOdd = useRecoilValue(evenOddSelector)
  return (
    <>
      <p>{`This is ${evenOrOdd} value`}</p>
    </>
  );
}