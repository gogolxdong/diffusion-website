
import './index.scss'
import FirstScreen from './component/FirstScreen';
import Square from './component/Square';
import Introduce from './component/Introduce';
import Participate from './component/Participate';
import News from './component/News';

const Home = () => {
    return <div className='home-wrap'>
      <FirstScreen />
      <Square />
      <Introduce />
      <Participate />
      <News />
    </div>
}
export default Home;