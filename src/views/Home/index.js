
import FirstScreen from './component/FirstScreen';
import Square from './component/Square';
import Introduce from './component/Introduce';
import Participate from './component/Participate';
import Exhibition from './component/Exhibition';
import Metacosmic from './component/Metacosmic';
import News from './component/News';
import Partner from './component/Partner';
import './index.scss'

const Home = () => {
  return <div className='home-wrap'>
    <FirstScreen />
    <Square />
    <Introduce />
    <Participate />
    <Exhibition />
    <Metacosmic />
    <News />
    <Partner />
  </div>
}
export default Home;