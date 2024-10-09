import { Provider } from "react-redux";
import store from "./Redux/combineReducer/store";
import Register from "./component/register";
import ProductManager from "./component/ProductManager";
function App() {
  return (
<Provider store={store}>
    <div className="App">
      <h1>Redux Toolkit</h1>
      <Register />

    </div>

    <div>
      <h1>Product Manager</h1>
      <ProductManager />
    </div>
</Provider>


    
  );
}

export default App;
