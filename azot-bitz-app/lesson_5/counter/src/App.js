import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

  return (
    <div>
      {count}
        <br/>
      <button onClick={() => dispatch({ type: 'plus' })}>+</button>
      <button onClick={() => dispatch({ type: 'minus'})}>-</button>
    </div>
  );
}

export default App;
