import React, {Component, useState} from "react";
import q1 from '../../img/main/best_img/best_r3.png'
import q2 from '../../img/main/best_img/best_r4.png'
import q3 from '../../img/main/best_img/best_r5.png'
import q4 from '../../img/main/best_img/best_r6.png'
import q5 from '../../img/main/best_img/best_r7.png'
import q6 from '../../img/main/best_img/best_r8.png'
import q7 from '../../img/main/best_img/best_r9.png'
import q8 from '../../img/main/best_img/best_r10.png'
import q9 from '../../img/main/best_img/best_r11.png'
import q10 from '../../img/main/best_img/best_r12.png'
import q11 from '../../img/main/best_img/best_r1.png'
import q12 from '../../img/main/best_img/best_r2.png'
import styles from "../Main.module.css";

const quartlist = [
  {id: 1, title: '어서오세요 실력 지상주의 교실에 2nd Season', sub:'스릴러', image: q1},
  {id: 2, title: '(더빙) 꿈빛 파티시엘 리마스터', sub:'로맨스/음식', image: q2},
  {id: 3, title: '은혼2기 DASH편', sub:'판타지/액션', image: q3},
  {id: 4, title: '오버로드 4기', sub:'이세계/판타지', image: q4},
  {id: 5, title: '(자막)데스노트 리마스터', sub:'판타지/추리', image: q5},
  {id: 6, title: '(자막)스파이 패밀리', sub:'액션/개그', image: q6},
  {id: 7, title: '이세계 약국', sub:'판타지/이세계', image: q7},
  {id: 8, title: '리코리스 리코일', sub:'범죄/액션', image: q8},
  {id: 9, title: '흑의 소환사', sub:'이세계/판타지', image: q9},
  {id: 10, title: '전생했더니 슬라임이었던 건에 대하여 1기', sub:'이세계/판타지', image: q10},
  {id: 11, title: '은혼1기', sub:'판타지/액션', image: q11},
  {id: 12, title: '(더빙) 탐정학원 Q', sub:'추리/미스터리', image: q12}
]

const Quart = quartlist.map((quart) => {
  return(
    <a className={styles.wac} key={quart.id}>
      <div className={styles.wc_img}>
        <img src={quart.image} />
      </div>
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div style={{ marginRight: "0.5em" }}>
          <span className={styles.sp_sub_title}>{quart.id}</span>
        </div>
        <div>
          <span className={styles.mc_st}>{quart.title}</span>
          <span className={styles.mc_st_sub}>{quart.sub}</span>
        </div>
      </div>
    </a>
  )
})

class QuartTime extends Component {
  render(){
    return(
      <div className={styles.wcon}>
        {Quart}
      </div>
    )
  }
}

export default QuartTime;