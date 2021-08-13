import './App.css';
import Profile from './profile/Profile';


function App() {
  let fullName="wajih aissa";
  let bio=19;
  let profession='fullstack dev'

  return (
    <div className="App">
      <Profile name={fullName} age={bio} pro={profession}/>
    </div>
  );
}

export default App;
