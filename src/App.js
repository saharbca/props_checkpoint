import './App.css';
import Profile from './profile/Profile.js';
import img from '../src/img.jpg';
import PropTypes from 'prop-types';
function App() {
  const fullName="Sahar Ben Cheikh Ahmed";
  const bio="bio";
  const profession="profession";
  function handleName() {
    return alert(fullName.split(" ")[0]);
  }
  return (
    <div className="App">
     <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}><img src={img} style={{width: 300, height: 300,border: '3px solid gray',marginTop:'2%'}} /></Profile>
    </div>
  );
}
Profile.defaultProps = {
  fullName: 'asma'
}
Profile.propTypes = {
  fullName:PropTypes.string
}
export default App;
