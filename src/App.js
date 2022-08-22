import { Layout } from 'antd';
import './App.css';
import { Header as HeaderComponent} from './component/Header'
import { Footer as FooterComponet} from './component/Footer'
import Halo from './component/Halo'
import Home from './views/Home'


const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className='top-nav'>
        <HeaderComponent />
      </Header>
      <Content>
        <Halo />
        <Home />
      </Content>
      <Footer>
        <FooterComponet />
      </Footer>
  </Layout>
  );
}

export default App;
