import logo from "./logo.svg";
import "./App.css";
import DatePicker from "./components/DatePicker";
import TimePicker from "./components/TimePicker";
import AutoCompleteComponent from "./components/AutoComplete";
import TableComponent from "./components/Table";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

import "/node_modules/primeflex/primeflex.css";

function App() {
  return (
    <div className="App-bg">
      <div class="grid">
        <div class="col"> </div>
        <div class="col mt-5 ml-8">
          <DatePicker />
        </div>
        <div class="col mt-5">
          <TimePicker />
        </div>
        <div class="col mt-5">
          <AutoCompleteComponent />
        </div>
        <div class="col"> </div>
      </div>
      <div class="mt-4">
        <TableComponent />
      </div>
    </div>
  );
}

export default App;
