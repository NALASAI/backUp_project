import React, {Component, useState} from "react";
import r1 from '../../img/main/best_img/best_r1.png'
import r2 from '../../img/main/best_img/best_r2.png'
import r3 from '../../img/main/best_img/best_r3.png'
import r4 from '../../img/main/best_img/best_r4.png'
import r5 from '../../img/main/best_img/best_r5.png'
import r6 from '../../img/main/best_img/best_r6.png'
import r7 from '../../img/main/best_img/best_r7.png'
import r8 from '../../img/main/best_img/best_r8.png'
import r9 from '../../img/main/best_img/best_r9.png'
import r10 from '../../img/main/best_img/best_r10.png'
import r11 from '../../img/main/best_img/best_r11.png'
import r12 from '../../img/main/best_img/best_r12.png'
import styles from "../Main.module.css";

const reallist = [
  {id: 1, title: '은혼1기', sub:'판타지/액션', image: r1},
  {id: 2, title: '(더빙) 탐정학원 Q', sub:'추리/미스터리', image: r2},
  {id: 3, title: '어서오세요 실력 지상주의 교실에 2nd Season', sub:'스릴러', image: r3},
  {id: 4, title: '(더빙) 꿈빛 파티시엘 리마스터', sub:'로맨스/음식', image: r4},
  {id: 5, title: '은혼2기 DASH편', sub:'판타지/액션', image: r5},
  {id: 6, title: '오버로드 4기', sub:'이세계/판타지', image: r6},
  {id: 7, title: '(자막)데스노트 리마스터', sub:'판타지/추리', image: r7},
  {id: 8, title: '(자막)스파이 패밀리', sub:'액션/개그', image: r8},
  {id: 9, title: '이세계 약국', sub:'판타지/이세계', image: r9},
  {id: 10, title: '리코리스 리코일', sub:'범죄/액션', image: r10},
  {id: 11, title: '흑의 소환사', sub:'이세계/판타지', image: r11},
  {id: 12, title: '전생했더니 슬라임이었던 건에 대하여 1기', sub:'이세계/판타지', image: r12}
]

const Real = reallist.map((real) => {
  return(
    <a className={styles.wac} key={real.id}>
      <div className={styles.wc_img}>
        <img src={real.image} />
      </div>
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div style={{ marginRight: "0.5em" }}>
          <span className={styles.sp_sub_title}>{real.id}</span>
        </div>
        <div>
          <span className={styles.mc_st}>{real.title}</span>
          <span className={styles.mc_st_sub}>{real.sub}</span>
        </div>
      </div>
    </a>
  )
})

class RealTime extends Component {
  render(){
    return(
      <div className={styles.wcon}>
        {Real}
      </div>
    )
  }
}

export default RealTime;