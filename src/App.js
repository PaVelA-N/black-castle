import logo from './logo.svg';
import './App.css';


let props=1
// props.book = require("./books/data1.json");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <Body/>
      </body>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

function Body() {
  return (
    createTable()
  )
}

function Header() {
  return (
    <>
  {/* <img src={logo} className="App-logo" alt="logo" /> */}
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    // className="App-link"
    // href="https://reactjs.org"
    // target="_blank"
    // rel="noopener noreferrer"
  >
    Learn React
  </a>
  </>
  )
}

function Footer() {
  return (
    <>
  {/* <img src={logo} className="App-logo" alt="logo" /> */}
  <p>
    {/* Edit <code>src/App.js</code> and save to reload. */}
  </p>
  <a
  //   className="App-link"
  //   href="https://reactjs.org"
  //   target="_blank"
  //   rel="noopener noreferrer"
  >
  Learn React
  </a>
  </>
  )
}

function createTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <td>Левый столбец</td>
          <td>Текст</td>
          <td>Инвентори</td>
        </tr>
      </thead>
        {/* <tbody>{MainFunction2(obj1, obj2,diffObj1,diffObj2)}</tbody> */}
          <td>Левый столбец 2</td>
          <td>Текст 2</td>
          <td>Инвентори 2</td>
    </table>
  );
}

export default App;
