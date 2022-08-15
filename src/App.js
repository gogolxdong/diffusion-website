import { Layout } from 'antd';
import './App.css';
import { Header as HeaderComponent} from './component/Header'
import { Footer as FooterComponet} from './component/Footer'
import Home from './views/Home'

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className='top_nav'>
        <HeaderComponent />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <FooterComponet />
      </Footer>
  </Layout>
  );
}

export default App;
