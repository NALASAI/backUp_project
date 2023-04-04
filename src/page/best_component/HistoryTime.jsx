import React, {Component, useState} from "react";
import h1 from '../../img/main/best_img/best_r1.png'
import h2 from '../../img/main/best_img/best_r3.png'
import h3 from '../../img/main/best_img/best_r5.png'
import h4 from '../../img/main/best_img/best_r7.png'
import h5 from '../../img/main/best_img/best_r9.png'
import h6 from '../../img/main/best_img/best_r11.png'
import h7 from '../../img/main/best_img/best_r2.png'
import h8 from '../../img/main/best_img/best_r4.png'
import h9 from '../../img/main/best_img/best_r6.png'
import h10 from '../../img/main/best_img/best_r8.png'
import h11 from '../../img/main/best_img/best_r10.png'
import h12 from '../../img/main/best_img/best_r12.png'
import h13 from '../../img/main/best_img/best_s1.png'
import h14 from '../../img/main/best_img/best_s2.png'
import h15 from '../../img/main/best_img/best_s3.png'
import h16 from '../../img/main/best_img/best_r2.png'
import h17 from '../../img/main/best_img/best_r4.png'
import h18 from '../../img/main/best_img/best_r6.png'
import h19 from '../../img/main/best_img/best_r8.png'
import h20 from '../../img/main/best_img/best_r10.png'
import h21 from '../../img/main/best_img/best_r12.png'
import h22 from '../../img/main/best_img/best_r1.png'
import h23 from '../../img/main/best_img/best_r3.png'
import h24 from '../../img/main/best_img/best_r5.png'
import h25 from '../../img/main/best_img/best_r7.png'
import h26 from '../../img/main/best_img/best_r9.png'
import h27 from '../../img/main/best_img/best_r11.png'
import h28 from '../../img/main/best_img/best_s1.png'
import h29 from '../../img/main/best_img/best_s2.png'
import h30 from '../../img/main/best_img/best_s3.png'
import styles from "../Main.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Historylist = [
  {id: 1, title: '은혼1기', sub:'판타지/액션', image: h1},
  {id: 2, title: '어서오세요 실력 지상주의 교실에 2nd Season', sub:'스릴러', image: h2},
  {id: 3, title: '은혼2기 DASH편', sub:'판타지/액션', image: h3},
  {id: 4, title: '(자막)데스노트 리마스터', sub:'판타지/추리', image: h4},
  {id: 5, title: '이세계 약국', sub:'판타지/이세계', image: h5},
  {id: 6, title: '흑의 소환사', sub:'이세계/판타지', image: h6},
  {id: 7, title: '(더빙) 탐정학원 Q', sub:'추리/미스터리', image: h7},
  {id: 8, title: '(더빙) 꿈빛 파티시엘 리마스터', sub:'로맨스/음식', image: h8},
  {id: 9, title: '오버로드 4기', sub:'이세계/판타지', image: h9},
  {id: 10, title: '(자막)스파이 패밀리', sub:'액션/개그', image: h10},
  {id: 11, title: '리코리스 리코일', sub:'범죄/액션', image: h11},
  {id: 12, title: '전생했더니 슬라임이었던 건에 대하여 1기', sub:'이세계/판타지', image: h12},
  {id: 13, title: '전생현자의 이세계 라이프 ~두 번째 직업을 얻고 세계 최강이 되었습니다~_thumbnail', sub:'판타지/액션', image: h13},
  {id: 14, title: '주술회전 part 1', sub:'판타지/액션', image: h14},
  {id: 15, title: '이세계 미궁에서 하렘을', sub:'이세계/액션', image: h15},
  {id: 16, title: '은혼1기', sub:'판타지/액션', image: h16},
  {id: 17, title: '어서오세요 실력 지상주의 교실에 2nd Season', sub:'스릴러', image: h17},
  {id: 18, title: '은혼2기 DASH편', sub:'판타지/액션', image: h18},
  {id: 19, title: '(자막)데스노트 리마스터', sub:'판타지/추리', image: h19},
  {id: 20, title: '이세계 약국', sub:'판타지/이세계', image: h20},
  {id: 21, title: '흑의 소환사', sub:'이세계/판타지', image: h21},
  {id: 22, title: '(더빙) 탐정학원 Q', sub:'추리/미스터리', image: h22},
  {id: 23, title: '(더빙) 꿈빛 파티시엘 리마스터', sub:'로맨스/음식', image: h23},
  {id: 24, title: '오버로드 4기', sub:'이세계/판타지', image: h24},
  {id: 25, title: '(자막)스파이 패밀리', sub:'액션/개그', image: h25},
  {id: 26, title: '리코리스 리코일', sub:'범죄/액션', image: h26},
  {id: 27, title: '전생했더니 슬라임이었던 건에 대하여 1기', sub:'이세계/판타지', image: h27},
  {id: 28, title: '전생현자의 이세계 라이프 ~두 번째 직업을 얻고 세계 최강이 되었습니다~_thumbnail', sub:'판타지/액션', image: h28},
  {id: 29, title: '주술회전 part 1', sub:'판타지/액션', image: h29},
  {id: 30, title: '이세계 미궁에서 하렘을', sub:'이세계/액션', image: h30}
]

const setting = {
  speed: 500,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  variableWidth: true,
}

const History = Historylist.map((Hist) => {
  return(
    <a className={styles.wac} key={Hist.id}>
      <div className={styles.wc_img}>
        <img src={Hist.image} />
      </div>
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div style={{ marginRight: "0.5em" }}>
          <span className={styles.sp_sub_title}>{Hist.id}</span>
        </div>
        <div>
          <span className={styles.mc_st}>{Hist.title}</span>
          <span className={styles.mc_st_sub}>{Hist.sub}</span>
        </div>
      </div>
    </a>
  )
})

class HistoryTime extends Component {
  render(){
    return(
      // <Slider {...setting}>
      //   <div className={styles.wcon}>
      //     {History}
      //   </div>
      // </Slider>
      <div className={styles.wcon}>
        {History}
      </div>
    )
  }
}

export default HistoryTime;