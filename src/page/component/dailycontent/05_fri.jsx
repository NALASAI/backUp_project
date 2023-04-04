import React, {Component} from "react";
import fr1 from "../../../img/main/week_wbtn/5_fri/1fr.png";
import fr2 from "../../../img/main/week_wbtn/5_fri/2fr.png";
import fr3 from "../../../img/main/week_wbtn/5_fri/3fr.png";
import fr4 from "../../../img/main/week_wbtn/5_fri/4fr.png";
import fr5 from "../../../img/main/week_wbtn/5_fri/5fr.png";
import fr6 from "../../../img/main/week_wbtn/5_fri/6fr.png";
import fr7 from "../../../img/main/week_wbtn/5_fri/7fr.png";
import styles from '../wbtn.module.css';

const WBTN_FRI = [
  {
    id: 1,
    title: '보스 따님과 돌보미',
    image: fr1
  },
  {
    id: 2,
    title: '던전에서 만남을 추구하면 안 되는 걸까4: 신장 미궁편',
    image: fr2
  },
  {
    id: 3,
    title: '알바 뛰는 마왕님!!',
    image: fr3
  },
  {
    id: 4,
    title: '(자막) 어떤 마술의 금서목록',
    image: fr4
  },
  {
    id: 5,
    title: '웃는 아르스노토리아 킁!',
    image: fr5
  },
  {
    id: 6,
    title: '러브 올 플레이 part2',
    image: fr6
  },
  {
    id: 7,
    title: '유레이데코',
    image: fr7
  }
]

const REN_FRI = WBTN_FRI.map((fri) => {
  return(
    <div className={styles.content}>
      <a className={styles.wac} key={fri.id}>
        <div className={styles.wc_img}>
          <img style={{position: 'absolute', width: '100%', height: '10.375em', objectFit: 'cover'}} src={fri.image} />
        </div>
        <div className={styles.wc_title}>
          <span className={styles.wc_st}>{fri.title}</span>
        </div>
      </a>
    </div>
  )
})

class FRI extends Component{
  render(){
    return(
      <div className={styles.wcon}>{REN_FRI}</div>
    )
  }
}


export default FRI;