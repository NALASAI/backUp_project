import React, {Component} from "react";
import we1 from "../../../img/main/week_wbtn/3_wen/1we.png";
import we2 from "../../../img/main/week_wbtn/3_wen/2we.png";
import we3 from "../../../img/main/week_wbtn/3_wen/3we.png";
import we4 from "../../../img/main/week_wbtn/3_wen/4we.png";
import we5 from "../../../img/main/week_wbtn/3_wen/5we.png";
import we6 from "../../../img/main/week_wbtn/3_wen/6we.png";
import we7 from "../../../img/main/week_wbtn/3_wen/7we.png";
import we8 from "../../../img/main/week_wbtn/3_wen/8we.png";
import we9 from "../../../img/main/week_wbtn/3_wen/9we.png";
import we10 from "../../../img/main/week_wbtn/3_wen/10we.png";
import styles from '../wbtn.module.css';

const WBTN_WEN = [
  {
    id: 1,
    title: '오버로드 4기',
    image: we1
  },
  {
    id: 2,
    title: '전생현자의 이세계 라이프 ~두번째 직업을 얻고 세계 최강이 되었습니다~',
    image: we2
  },
  {
    id: 3,
    title: '이세계 약국',
    image: we3
  },
  {
    id: 4,
    title: '금장의 벨메이유 ~벼랑끝 마술사는 최강의 재액과 마법세계를 헤쳐나간다~',
    image: we4
  },
  {
    id: 5,
    title: '그래도 아유무는 다가온다',
    image: we5
  },
  {
    id: 6,
    title: '오리엔트 part 2',
    image: we6
  },
  {
    id: 7,
    title: '반지의 기사',
    image: we7
  },
  {
    id: 8,
    title: '(자막)이누야샤 완결편',
    image: we8
  },
  {
    id: 9,
    title: '프리마 돌',
    image: we9
  },
  {
    id: 10,
    title: '(더빙)고스트 게임 : 디지몬',
    image: we10
  }
]

const REN_WEN = WBTN_WEN.map((wen) => {
  return(
    <div className={styles.content}>
      <a className={styles.wac} key={wen.id}>
        <div className={styles.wc_img}>
          <img style={{position: 'absolute', width: '100%', height: '10.375em', objectFit: 'cover'}} src={wen.image} />
        </div>
        <div className={styles.wc_title}>
          <span className={styles.wc_st}>{wen.title}</span>
        </div>
      </a>
    </div>
  )
})

class Wen extends Component{
  render(){
    return(
      <div className={styles.wcon}>{REN_WEN}</div>
    )
  }
}


export default Wen;