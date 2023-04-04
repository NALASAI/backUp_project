import React, {Component, useState} from "react";
import w1 from '../../img/main/best_img/best_r2.png'
import w2 from '../../img/main/best_img/best_r3.png'
import w3 from '../../img/main/best_img/best_r4.png'
import w4 from '../../img/main/best_img/best_r5.png'
import w5 from '../../img/main/best_img/best_r6.png'
import w6 from '../../img/main/best_img/best_r7.png'
import w7 from '../../img/main/best_img/best_r8.png'
import w8 from '../../img/main/best_img/best_r9.png'
import w9 from '../../img/main/best_img/best_r10.png'
import w10 from '../../img/main/best_img/best_r11.png'
import w11 from '../../img/main/best_img/best_r12.png'
import w12 from '../../img/main/best_img/best_r1.png'
import styles from "../Main.module.css";

const weeklist = [
  {id: 1, title: '(더빙) 탐정학원 Q', sub:'추리/미스터리', image: w1},
  {id: 2, title: '어서오세요 실력 지상주의 교실에 2nd Season', sub:'스릴러', image: w2},
  {id: 3, title: '(더빙) 꿈빛 파티시엘 리마스터', sub:'로맨스/음식', image: w3},
  {id: 4, title: '은혼2기 DASH편', sub:'판타지/액션', image: w4},
  {id: 5, title: '오버로드 4기', sub:'이세계/판타지', image: w5},
  {id: 6, title: '(자막)데스노트 리마스터', sub:'판타지/추리', image: w6},
  {id: 7, title: '(자막)스파이 패밀리', sub:'액션/개그', image: w7},
  {id: 8, title: '이세계 약국', sub:'판타지/이세계', image: w8},
  {id: 9, title: '리코리스 리코일', sub:'범죄/액션', image: w9},
  {id: 10, title: '흑의 소환사', sub:'이세계/판타지', image: w10},
  {id: 11, title: '전생했더니 슬라임이었던 건에 대하여 1기', sub:'이세계/판타지', image: w11},
  {id: 12, title: '은혼1기', sub:'판타지/액션', image: w12}
]

const Week = weeklist.map((week) => {
  return(
    <a className={styles.wac} key={week.id}>
      <div className={styles.wc_img}>
        <img src={week.image} />
      </div>
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div style={{ marginRight: "0.5em" }}>
          <span className={styles.sp_sub_title}>{week.id}</span>
        </div>
        <div>
          <span className={styles.mc_st}>{week.title}</span>
          <span className={styles.mc_st_sub}>{week.sub}</span>
        </div>
      </div>
    </a>
  )
})

class WeekTime extends Component {
  render(){
    return(
      <div className={styles.wcon}>
        {Week}
      </div>
    )
  }
}

export default WeekTime;