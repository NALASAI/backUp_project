import React, {Component} from "react";
import sa1 from "../../../img/main/week_wbtn/6_sat/1se.png";
import sa2 from "../../../img/main/week_wbtn/6_sat/2se.png";
import sa3 from "../../../img/main/week_wbtn/6_sat/3se.png";
import sa4 from "../../../img/main/week_wbtn/6_sat/4se.png";
import sa5 from "../../../img/main/week_wbtn/6_sat/5se.png";
import sa6 from "../../../img/main/week_wbtn/6_sat/6se.png";
import sa7 from "../../../img/main/week_wbtn/6_sat/7se.png";
import styles from '../wbtn.module.css';

const WBTN_SAT = [
  {
    id: 1,
    title: '(자막) 명탐정 코난 2022',
    image: sa1
  },
  {
    id: 2,
    title: '(더빙) 탐정학원 Q',
    image: sa2
  },
  {
    id: 3,
    title: '마법소녀 마도카 마기카 - 판권 부활',
    image: sa3
  },
  {
    id: 4,
    title: '스칼렛 넥서스',
    image: sa4
  },
  {
    id: 5,
    title: '(더빙) 닌자보이 란타로 24기',
    image: sa5
  },
  {
    id: 6,
    title: '샤인포스트, 치미모',
    image: sa6
  },
  {
    id: 7,
    title: '치미모',
    image: sa7
  }
]

const REN_SAT = WBTN_SAT.map((sat) => {
  return(
    <div className={styles.content}>
      <a className={styles.wac} key={sat.id}>
        <div className={styles.wc_img}>
          <img style={{position: 'absolute', width: '100%', height: '10.375em', objectFit: 'cover'}} src={sat.image} />
        </div>
        <div className={styles.wc_title}>
          <span className={styles.wc_st}>{sat.title}</span>
        </div>
      </a>
    </div>
  )
})

class Sat extends Component{
  render(){
    return(
      <div className={styles.wcon}>{REN_SAT}</div>
    )
  }
}


export default Sat;