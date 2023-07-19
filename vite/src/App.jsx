import './App.css';
import './index.css';
import FunctionalCounter from './components/FunctionalCounter';
import Conditional from './components/conditional';
import ListRendering from './components/ListRendering';
import Form from './components/Form';

import ModuleStyling from './components/ModuleStyling';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Form />
      <ListRendering></ListRendering>
      <ModuleStyling />
      <FunctionalCounter />

      <Conditional />

      <h1>Hello React</h1>
    </>
  );
}

export default App;
