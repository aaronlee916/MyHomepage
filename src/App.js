import './App.css';
import UserInfo from './UserInfo';
let backgroundImage = './images/background.png'
function App() {
  return (
    <div className='outerBox' style={{backgroundImage: `url(${backgroundImage})`,height:'1920px',width:'1080px'}}>
      <UserInfo />
    </div>
  );
}

export default App;
