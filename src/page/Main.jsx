import React from "react";
import styles from "./Main.module.css";
import Footmn from "./footer";
import best1 from '../img/main/best_img/best_s4.png'
import best2 from '../img/main/best_img/best_s5.png'
import best3 from '../img/main/best_img/best_s6.png'
import best4 from '../img/main/best_img/best_s7.png'
import best5 from '../img/main/best_img/best_r5.png'
import best6 from '../img/main/best_img/best_r6.png'
import best7 from '../img/main/best_img/best_r7.png'
import best8 from '../img/main/best_img/best_r8.png'
import best9 from '../img/main/best_img/best_r9.png'
import best10 from '../img/main/best_img/best_r10.png'
import best11 from '../img/main/best_img/best_r11.png'
import best12 from '../img/main/best_img/best_r12.png'
import Slide from "./component/slide";
import Bestanime from './best_component/bestanime';
import Daily_Main from './component/Daily_Main';
import adimg from '../img/main/광고.png';

const anilist = [
  {id: 1, title: '보스 따님과 돌보미', sub:'개그', image: best1},
  {id: 2, title: '던전에서 만남을 추구하면 안 되는 걸까 4: 신장 미궁편', sub:'판타지/액션', image: best2},
  {id: 3, title: '시광대리인', sub:'SF/판타지', image: best3},
  {id: 4, title: '금장의 벨메이유', sub:'판타지/일상', image: best4},
  {id: 5, title: '은혼2기 DASH편', sub:'판타지/액션', image: best5},
  {id: 6, title: '오버로드 4기', sub:'이세계/판타지', image: best6},
  {id: 7, title: '(자막)데스노트 리마스터', sub:'판타지/추리', image: best7},
  {id: 8, title: '(자막)스파이 패밀리', sub:'액션/개그', image: best8},
  {id: 9, title: '이세계 약국', sub:'판타지/이세계', image: best9},
  {id: 10, title: '리코리스 리코일', sub:'범죄/액션', image: best10},
  {id: 11, title: '흑의 소환사', sub:'이세계/판타지', image: best11},
  {id: 12, title: '전생했더니 슬라임이었던 건에 대하여 1기', sub:'이세계/판타지', image: best12}
]

const Wrap = anilist.map((item) => {
  return(
  <a className={styles.wac} key = {item.id}>
    <div className={styles.wc_img}>
      <img className={styles.thum} src={item.image} />
    </div>
    <div style={{ display: "flex", overflow: "hidden" }}>
      <div>
        <span className={styles.mc_st}>{item.title}</span>
        <span className={styles.mc_st_sub}>{item.sub}</span>
      </div>
    </div>
  </a>
  )
})

function Main() {
  return (
    <div className={styles.Main_body}>
      <Slide />
      <div className={styles.main_contents}>
        <Daily_Main/>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
            애니 목록
            </span>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <div className={styles.wcon}>
                {Wrap}
              </div>
            </div>
          </div>
        </div>
        <Bestanime/>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              원작보고오기
            </span>
          </div>
          <div className={styles.wcon}>
            {Wrap}
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              판권부활덕에 덕심도 부활
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              청춘의 일상 생활 속 설레임
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              블루레이 판매량 1만장 돌파 작품 모음
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              2021년 3분기 완결 작품 베스트 10
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              이름은 이상하지만 꿀잼인 애니 추천
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              2018년 라프텔 인기 TOP 10
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              2021년 2분기 완결 작품 베스트 10
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              -이 작화가 대단하다- 작품모음
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              새하얀 도화지 같은 겨울이 생각난다
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              라프텔 온라인 탑골 공원에 어서오세요.
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              더욱 그 너머로! Plus Ultra! - 나히아 시리즈 모음
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              최고의 다크 판타지 애니
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>  
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              이건 오타쿠계의 혁명이야!
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              -이 라이트노벨이 대단하다- 수상작 모음
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              몸 안의 아드레날린이 솟구치는 전율의 액션
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              천만 덕후들의 선택! 원작 판매량 1000만부 돌파 애니 모음
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div className={styles.mc}>
          <div className={styles.mtitle}>
            <span className={styles.sp_title}>
              2019년을 뜨겁게 달군 TOP 10
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.wcon}>
              {Wrap}
            </div>
          </div>
        </div>
        <div style={{marginTop: '4em'}}></div>
        <div className={styles.Mainad}>
          <div className={styles.Mainad_con}>
            <h2 className={styles.adh2}>멤버십 이용자라면</h2>
            <h1 className={styles.adh1}>
              <span>
                <b style={{color: 'rgb(129, 107, 255)'}}>라프텔 TV 앱</b>
                으로도
              </span>
              <span>웅장하게 즐겨보세요!</span>
            </h1>
          </div>
          <img src={adimg} style={{width: 'auto', height: '9em', marginLeft: '3em'}}/>
        </div>
      </div>
      <Footmn />
    </div>
  );
}

export default Main;
