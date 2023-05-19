import React, {Component, useState} from "react";
import styles from "../Main.module.css";
import Real from './RealTime';
import Week from './WeekTime';
import Quar from './QuartTime';
import Hist from './HistoryTime';

const btnlist = [
  {id: 1, title: '실시간', name:'real'},
  {id: 2, title: '이번주', name:'week'},
  {id: 3, title: '분기', name:'quar'},
  {id: 4, title: '역대', name:'hist'}
]

const SelectList = () => {
  const [isSelectBtn, setIsSelectBtn] = useState("");

  const handleClick = (e) => {
    const {name} = e.target;
    setIsSelectBtn(name);
  }

  const SelectComponent = {
    real: <Real/>, 
    week: <Week/>,
    quar: <Quar/>,
    hist: <Hist/>
  }

  const BEST = btnlist.map((Btnl) => {
    return(
      <button key={Btnl.id} name={Btnl.name} onClick={handleClick}
      className={Btnl.name === isSelectBtn ? styles.mc_tbtn_on : styles.mc_tbtn_off}>
        <span>{Btnl.title}</span>
      </button>
    )
  })

  return(
    <div className={styles.mc}>
      <div>
        <div className={styles.mtitle}>
          <span className={styles.sp_title}>
            라프텔 인기 애니
          </span>
        </div>
        <div className={styles.mc_time}>
          {BEST}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {isSelectBtn && <div className={styles.wcon_main}>{SelectComponent[isSelectBtn]}</div>}
      </div>
    </div>
  )
}

class bestanime extends Component{
  render(){
    return(
      <SelectList/>
    )
  }
}

export default bestanime;