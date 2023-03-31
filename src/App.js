/** @format */

import "./App.css";
import { Link, Route } from "react-router-dom";
import styles from "./To_mn.module.css";
import Home from './page/Main';
import Finder from './page/01_Finder/01_Finder'
import Daily from './page/02_Daily/02_Daily';
import Themes from './page/03_Themes/03_Themes';
import Membership from './page/04_Membership/04_Membership';

function App() {
  return (
    <div className="main_body">
      <header>
        <div className={styles.Top_mn_body}>
          <div className={styles.Top_mn_logo}>
            <Link to="/">Laftel</Link>
          </div>
          <div className={styles.Top_mn_menu}>
            <ul>
              <li>
                <Link to="/finder">태그검색</Link>
              </li>
              <li>
                <Link to="/daily">요일별 신작</Link>
              </li>
              <li>
                <Link to="/themes">테마추천</Link>
              </li>
              <li>
                <Link to="/membership">멤버쉽</Link>
              </li>
            </ul>
          </div>
          <div className={styles.Top_mn_login}>
            <div className={styles.Top_mn_find}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.222 16.657a7.608 7.608 0 111.435-1.435l4.05 4.05a1 1 0 010 1.415l-.02.02a1 1 0 01-1.415 0l-4.05-4.05zm.994-6.05a5.608 5.608 0 11-11.216 0 5.608 5.608 0 0111.216 0z" fill="currentColor" />
              </svg>
            </div>
            <div className={styles.login_submit}>
              <a href="/membership">
                로그인/회원가입
              </a>
            </div>
          </div>
        </div>
      </header>
      <div style={{width: '100%', height: 'auto', margin: '0', display:'flex', justifyContent:'center'}}>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/finder" component={Finder}></Route>
        <Route path="/daily" component={Daily}></Route>
        <Route path="/themes" component={Themes}></Route>
        <Route path="/membership" component={Membership}></Route>
      </div>
    </div>
  );
}

export default App;
