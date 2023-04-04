import React, {Component} from "react";
import su1 from "../../../img/main/week_wbtn/7_sun/1su.png";
import su2 from "../../../img/main/week_wbtn/7_sun/2su.png";
import su3 from "../../../img/main/week_wbtn/7_sun/3su.png";
import su4 from "../../../img/main/week_wbtn/7_sun/4su.png";
import su5 from "../../../img/main/week_wbtn/7_sun/5su.png";
import su6 from "../../../img/main/week_wbtn/7_sun/6su.png";
import su7 from "../../../img/main/week_wbtn/7_sun/7su.png";
import su8 from "../../../img/main/week_wbtn/7_sun/8su.png";
import styles from '../wbtn.module.css';

const WBTN_SUN = [
  {
    id: 1,
    title: '리코리스 리코일',
    image: su1
  },
  {
    id: 2,
    title: '흑의 소환사',
    image: su2
  },
  {
    id: 3,
    title: '인게이지 키스',
    image: su3
  },
  {
    id: 4,
    title: '여친, 빌리겠습니다 2기',
    image: su4
  },
  {
    id: 5,
    title: '섀도 하우스 2nd Season',
    image: su5
  },
  {
    id: 6,
    title: 'RWBY 빙설제국',
    image: su6
  },
  {
    id: 7,
    title: '(무삭제) 여친, 빌리겠습니다 2기',
    image: su7
  },
  {
    id: 8,
    title: '이과가 사랑에 빠졌기에 증명해보았다 r=1-sinθ(하트)',
    image: su8
  }
]

const REN_SUN = WBTN_SUN.map((sun) => {
  return(
    <div className={styles.content}>
      <a className={styles.wac} key={sun.id}>
        <div className={styles.wc_img}>
          <img style={{position: 'absolute', width: '100%', height: '10.375em', objectFit: 'cover'}} src={sun.image} />
        </div>
        <div className={styles.wc_title}>
          <span className={styles.wc_st}>{sun.title}</span>
        </div>
      </a>
    </div>
  )
})

class Sun extends Component{
  render(){
    return(
      <div className={styles.wcon}>{REN_SUN}</div>
    )
  }
}


export default Sun;