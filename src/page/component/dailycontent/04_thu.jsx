import React, {Component} from "react";
import th1 from "../../../img/main/week_wbtn/4_thu/1th.png";
import th2 from "../../../img/main/week_wbtn/4_thu/2th.png";
import th3 from "../../../img/main/week_wbtn/4_thu/3th.png";
import th4 from "../../../img/main/week_wbtn/4_thu/4th.png";
import th5 from "../../../img/main/week_wbtn/4_thu/5th.png";
import th6 from "../../../img/main/week_wbtn/4_thu/6th.png";
import th7 from "../../../img/main/week_wbtn/4_thu/7th.png";
import styles from '../wbtn.module.css';

const WBTN_THR = [
  {
    id: 1,
    title: '갓슈벨!!',
    image: th1
  },
  {
    id: 2,
    title: '이세계 미궁에서 하렘을',
    image: th2
  },
  {
    id: 3,
    title: '새 엄마가 데려온 딸이 전 여천이였다',
    image: th3
  },
  {
    id: 4,
    title: '메이드 인 어비스 : 열일의 황금향',
    image: th4
  },
  {
    id: 5,
    title: '러브 라이브! 슈퍼스타!! 2기',
    image: th5
  },
  {
    id: 6,
    title: '신 테니스의 왕자 U-17 WORLD CUP',
    image: th6
  },
  {
    id: 7,
    title: '익스트림 하츠',
    image: th7
  }
]

const REN_THR = WBTN_THR.map((thr) => {
  return(
    <div className={styles.content}>
      <a className={styles.wac} key={thr.id}>
        <div className={styles.wc_img}>
          <img style={{position: 'absolute', width: '100%', height: '10.375em', objectFit: 'cover'}} src={thr.image} />
        </div>
        <div className={styles.wc_title}>
          <span className={styles.wc_st}>{thr.title}</span>
        </div>
      </a>
    </div>
  )
})

class Thr extends Component{
  render(){
    return(
      <div className={styles.wcon}>{REN_THR}</div>
    )
  }
}


export default Thr;