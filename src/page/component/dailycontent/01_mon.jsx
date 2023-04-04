import React, {Component} from "react";
import mo1 from "../../../img/main/week_wbtn/1_mon/1mo.png";
import mo2 from "../../../img/main/week_wbtn/1_mon/2mo.png";
import mo3 from "../../../img/main/week_wbtn/1_mon/3mo.png";
import mo4 from "../../../img/main/week_wbtn/1_mon/4mo.png";
import mo5 from "../../../img/main/week_wbtn/1_mon/5mo.png";
import styles from '../wbtn.module.css';

const WBTN_MON = [
  {
    id: 1,
    title: '뻐꾸기 커플',
    image: mo1
  },
  {
    id: 2,
    title: '어서오세요 실력 지상주의 교실에 2nd Season',
    image: mo2
  },
  {
    id: 3,
    title: '달달한 그녀',
    image: mo3
  },
  {
    id: 4,
    title: '칭송받는자 : 두 명의 백황',
    image: mo4
  },
  {
    id: 5,
    title: '연맹공군 항공마법음악대 루미너스 위치스',
    image: mo5
  }
]

const REN_MON = WBTN_MON.map((mon) => {
  return(
    <div className={styles.content}>
      <a className={styles.wac} key={mon.id}>
        <div className={styles.wc_img}>
          <img style={{position: 'absolute', width: '100%', height: '10.375em', objectFit: 'cover'}} src={mon.image} />
        </div>
        <div className={styles.wc_title}>
          <span className={styles.wc_st}>{mon.title}</span>
        </div>
      </a>
    </div>
  )
})

class Mon extends Component{
  render(){
    return(
      <div className={styles.wcon}>{REN_MON}</div>
    )
  }
}


export default Mon;