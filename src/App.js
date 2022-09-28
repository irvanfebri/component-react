// import './App.css';

// import ButtonClass  from './components/ButtonClass';
// import ButtonFunction from './components/ButtonFunction';


// const App = () => {
//   return (
//     <div style={{margin: "20px", padding: "20px", backgroundColor: 'lightblue'}}>
//       <ButtonClass />
//       <br/>
//       <ButtonFunction />
//     </div>
//   );
// }

// export default App;


import './App.css';

import ButtonClass  from './components/ButtonClass';
import ButtonFunction from './components/ButtonFunction';


const App = () => {
  return (
    <div style={{margin: "20px", padding: "20px", backgroundColor: 'lightblue'}}>
      <ButtonClass text="i'm Button class from props" />
      <br/>
      <ButtonFunction text="I'm ButftonFunction from props!"/>
      <br />
      <ButtonClass />
      <br />
      <ButtonFunction />
    </div>
  );
}

export default App;