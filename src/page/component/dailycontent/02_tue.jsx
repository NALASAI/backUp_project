import React, {Component} from "react";
import tu1 from "../../../img/main/week_wbtn/2_tue/1tu.png";
import tu2 from "../../../img/main/week_wbtn/2_tue/2tu.png";
import tu3 from "../../../img/main/week_wbtn/2_tue/3tu.png";
import tu4 from "../../../img/main/week_wbtn/2_tue/4tu.png";
import tu5 from "../../../img/main/week_wbtn/2_tue/5tu.png";
import tu6 from "../../../img/main/week_wbtn/2_tue/6tu.png";
import tu7 from "../../../img/main/week_wbtn/2_tue/7tu.png";
import styles from '../wbtn.module.css';

const WBTN_TUE = [
  {
    id: 1,
    title: '은혼 2기 DASH편',
    image: tu1
  },
  {
    id: 2,
    title: 'BANANA FISH',
    image: tu2
  },
  {
    id: 3,
    title: '(더빙) 스파이 패밀리',
    image: tu3
  },
  {
    id: 4,
    title: '최근 고용한 메이드가 수상하다',
    image: tu4
  },
  {
    id: 5,
    title: '킹덤 4기 part 2',
    image: tu5
  },
  {
    id: 6,
    title: '슛!Goal to the Future',
    image: tu6
  },
  {
    id: 7,
    title: '(자막) 드래곤 퀘스트 : 다이의 대모험 part 8',
    image: tu7
  }
]

const REN_TUE = WBTN_TUE.map((tue) => {
  return(
    <div className={styles.content}>
      <a className={styles.wac} key={tue.id}>
        <div className={styles.wc_img}>
          <img style={{position: 'absolute', width: '100%', height: '10.375em', objectFit: 'cover'}} src={tue.image} />
        </div>
        <div className={styles.wc_title}>
          <span className={styles.wc_st}>{tue.title}</span>
        </div>
      </a>
    </div>
  )
})

class Tue extends Component{
  render(){
    return(
      <div className={styles.wcon}>{REN_TUE}</div>
    )
  }
}


export default Tue;