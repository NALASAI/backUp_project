import React, {Component} from "react";
import styles from "./01_Finder.module.css";
import Fitem1 from '../../img/01_finder/thum1.png'
import Fitem2 from '../../img/01_finder/thum2.png'
import Fitem3 from '../../img/01_finder/thum3.png'
import Fitem4 from '../../img/01_finder/thum4.png'
import Fitem5 from '../../img/01_finder/thum5.png'
import Fitem6 from '../../img/01_finder/thum6.png'
import Fitem7 from '../../img/01_finder/thum7.png'
import Fitem8 from '../../img/01_finder/thum8.png'
import Fitem9 from '../../img/01_finder/thum9.png'
import Fitem10 from '../../img/01_finder/thum10.png'
import Fitem11 from '../../img/01_finder/thum11.png'
import Fitem12 from '../../img/01_finder/thum12.png'
import Fitem13 from '../../img/01_finder/thum13.png'
import Fitem14 from '../../img/01_finder/thum14.png'
import Fitem15 from '../../img/01_finder/thum15.png'
import Fitem16 from '../../img/01_finder/thum16.png'
import Fitem17 from '../../img/01_finder/thum17.png'
import Fitem18 from '../../img/01_finder/thum18.png'
import Fitem19 from '../../img/01_finder/thum19.png'
import Fitem20 from '../../img/01_finder/thum20.png'


const thumnail = [
    {
      id: 1,
      title: "주술회전 part 1",
      img: Fitem1,
    },
    {
      id: 2,
      title: "(무삭제) 귀멸의 칼날",
      img: Fitem2,
    },
    {
      id: 3,
      title: "전생했더니 슬라임이었던 건에 대하여",
      img: Fitem3,
    },
    {
      id: 4,
      title: "귀멸의 칼날 : 환락의 거리편",
      img: Fitem4,
    },
    {
      id: 5,
      title: "은혼 1기",
      img: Fitem5,
    },
    {
      id: 6,
      title: "하이큐!! 1기",
      img: Fitem6,
    },
    {
      id: 7,
      title: "주술회전 part 2",
      img: Fitem7,
    },
    {
      id: 8,
      title: "(자막) 스파이 패밀리",
      img: Fitem8,
    },
    {
      id: 9,
      title: "(자막) 하이큐!! 2기",
      img: Fitem9,
    },
    {
      id: 10,
      title: "(더빙) 꿈빛 파티시엘",
      img: Fitem10,
    },
    {
      id: 11,
      title: "전생했더니 슬라임이었던 건에 대하여 2기 2부",
      img: Fitem11,
    },
    {
      id: 12,
      title: "방패 용사 성공담 Season 1",
      img: Fitem12,
    },
    {
      id: 13,
      title: "하이큐!! TO THE TOP",
      img: Fitem13,
    },
    {
      id: 14,
      title: "지박소년 하나코 군",
      img: Fitem14,
    },
    {
      id: 15,
      title: "소드 아트 온라인 1기",
      img: Fitem15,
    },
    {
      id: 16,
      title: "그 비스크 돌은 사랑을 한다",
      img: Fitem16,
    },
    {
      id: 17,
      title: "(자막) 나의 히어로 아카데미아 2기",
      img: Fitem17,
    },
    {
      id: 18,
      title: "호리미야",
      img: Fitem18,
    },
    {
      id: 19,
      title: "전생했더니 슬라임이었던 건에 대하여 2기 1부",
      img: Fitem19,
    },
    {
      id: 20,
      title: "앙상블 스타즈!",
      img: Fitem20,
    },
];

const renderthumnail = thumnail.map((thumnail) => {
    return (
        <div class={styles.fcon_item} key={thumnail.id}>
            <div class={styles.thumbnail_wrap}>
            <img class={styles.thumbnail} src={thumnail.img} alt="썸네일"></img>
            <div class={styles.playable}>
                <svg
                fill="currentColor"
                preserveAspectRatio="xMidYMid meet"
                height="1em"
                width="1em"
                viewBox="0 0 40 40"
                style={{ verticalAlign: "middle" }}
                >
                <g>
                    <path d="m13.4 8.4l18.2 11.6-18.2 11.6v-23.2z"></path>
                </g>
                </svg>
            </div>
            </div>
            <a
            class={styles.item_title}
            href="https://laftel.net/item/39986/%EC%A3%BC%EC%88%A0%ED%9A%8C%EC%A0%84-part-1"
            >
            {thumnail.title}
            </a>
        </div>
    );
});

export class Finditem extends Component{
    render(){
        return(
            <div class={styles.find_contents}>{renderthumnail}</div>
        )
    }
}

export default Finditem;