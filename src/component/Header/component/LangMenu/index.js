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
        {
          key: "de",
          label: <span>Deutsch</span>,
        },
        {
          key: "fr",
          label: <span>Français</span>,
        },
        {
          key: "hi",
          label: <span>हिन्दी भाषा</span>,
        },
        {
          key: "it",
          label: <span>Italiano</span>,
        },
        {
          key: "ja",
          label: <span>日本語</span>,
        },
        {
          key: "ko",
          label: <span>한국인</span>,
        }
      ]}
    />
  );
};
export default LangMenu;
