
import './index.scss'
import FirstScreen from './component/FirstScreen';
import Square from './component/Square';

const Home = () => {
    return <div className='home-wrap'>
      <FirstScreen />
      <Square />
    </div>
}
export default Home;