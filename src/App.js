// import logo from './logo.svg';
import './App.css';

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
  let props ={}
  props.bookName='Черный замок'
  props.bookData = require("./books/data1.json");
  return (
    createTable(props)
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
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
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
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
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
      <tbody>
        <tr>
          <td>Левый столбец 2</td>
          <td>{props.bookData.paragraphNumber}<br></br>{props.bookData.paragraphText} </td>
          <td>Инвентори 2</td>
        </tr>
        <tr>
          {/* <tbody>{MainFunction2(obj1, obj2,diffObj1,diffObj2)}</tbody> */}

          <td>{availableChoice(props)}</td>
        </tr>
      </tbody>
    </table>
  );
}

function availableChoice (props){
  return (<table>
    <tbody>
      <tr>
        <td>
          Ваш выбор: 
        </td>
        <td>
          {Square(props)}
        </td>
      </tr>
    </tbody>
  </table>)
}

function choiceButtons(props){
  const choiceArray  = props.bookData.paragraphPublicLink;
  // console.log(props)
  console.log(choiceArray)
  let x = [...Array(choiceArray.length)].map(row => {return (<tr>
    <div>1</div>
  </tr>
)})
  console.log('114 ', x)

  return (<tbody>
      
  </tbody>)
}

// onClick={props.onClick2}
function Square (props) {
  // console.log('Square ', props);
  return (
    <button className="square"> 
      {props.bookData.paragraphPublicLink[0]}
    </button>
  );
}

function renderSquare(props) {
  // console.log('renderSquare ', props.squares[i] + ' i: ' + i);
  return (
    <Square 
      key={`square_` + props}
      value={props}
      // onClick2={() => onClick1()} 
    />
  );
}

export default App;
