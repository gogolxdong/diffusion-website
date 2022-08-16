
import './index.scss'
import FirstScreen from './component/FirstScreen';
import Square from './component/Square';
import Introduce from './component/Introduce';
import Participate from './component/Participate';

const Home = () => {
    return <div className='home-wrap'>
      <FirstScreen />
      <Square />
      <Introduce />
      <Participate />
    </div>
}
export default Home;