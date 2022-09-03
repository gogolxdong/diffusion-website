import { Routes, Route } from 'react-router-dom' 
import { Layout } from 'antd';
import './App.css';
import { Header as HeaderComponent} from './component/Header'
import { Footer as FooterComponet} from './component/Footer'
import Halo from './component/Halo'
import Home from './views/Home'
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const unload = () => {
    window.scrollTo(0, 0);
  };
  window.onunload = unload;
  return (
    <Layout>
      <Header className='top-nav'>
        <HeaderComponent />
      </Header>
      <Content>
        {/* <Halo /> */}
        <Routes>
          <Route path="/" element={<div><Home /></div>} />
          <Route path="/home" element={<div><Home /></div>} />
          <Route path="*" element={<div><Home /></div>} />
        </Routes>
      </Content>
      <Footer>
        <FooterComponet />
      </Footer>
  </Layout>
  );
}

export default App;
