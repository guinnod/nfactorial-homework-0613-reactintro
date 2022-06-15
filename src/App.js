import first from './media_src/photo-1443891238287-325a8fddd0f7.jpeg';
import second from './media_src/flashlight.jpg';
import third from './media_src/photo-1465188162913-8fb5709d6d57.jpeg';
import fourth from './media_src/photo-1442522772768-9032b6d10e3e.jpeg';
import fifth from './media_src/photo-1465156799763-2c087c332922.jpeg';
import logo from './iq-logo.png';
import { format } from 'date-fns';
import './App.css';
const today = new Date();
const formattedDate = format(today, 'dd.MM.yyyy');
const currentTime = new Date();
const fCurrentTime = format(currentTime, 'hh:mm');

function App() {
  return (
    <div className='page'>
      <header>
        <div className='lef'>
        <img src={logo} className='logo'/>
        <input></input>
        </div>
        <h2>{formattedDate} {fCurrentTime}</h2>
      </header>
    <div className='main'>
      <div className='imgr'>
        <img src={first} className="imgs">
        </img>
        <h1>HEY</h1>
      </div>
      <div className='imgr'>
        <img src={second} className="imgs">
        </img>
        <h1>LET`S</h1>
      </div>
      <div className='imgr'>
        <img src={third} className="imgs">
        </img>
        <h1>GIVE</h1>
      </div>
      <div className='imgr'>
        <img src={fourth} className="imgs">
        </img>
        <h1>ALL</h1>
      </div>
      <div className='imgr'>
        <img src={fifth} className="imgs">
        </img>
        <h1>YOU CAN</h1>
      </div>
    </div>
    </div>
  );
}

export default App;
