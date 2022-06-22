import Main from "../components/home";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "../components/reducer";
import { Provider } from "react-redux";
const store = createStore(reducer);

function Home() {
  return (
    <Provider store={store}>
      <div>
        <Main />
      </div>
    </Provider>
  );
}
export default Home;
