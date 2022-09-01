import i18n from 'i18next';
import "./index.scss";
import { Menu } from "antd";

const LangMenu = () => {
  const changeLang = (e) => {
    const lang = e.key
    i18n.changeLanguage(lang)
    window.localStorage.setItem('language', lang)
  }
  return (
    <Menu
      onClick={changeLang}
      className='lang-menu'
      items={[
        {
          key: "en",
          label: <span>English</span>,
        },
        {
          key: "zh",
          label: <span>简体中文</span>,
        },
      ]}
    />
  );
};
export default LangMenu;
