import React from "react";
import styles from "./02_Daily.module.css";
import mo1 from "../../img/02_daily/1_mon/1mo.png";
import mo2 from "../../img/02_daily/1_mon/2mo.png";
import mo3 from "../../img/02_daily/1_mon/3mo.png";
import mo4 from "../../img/02_daily/1_mon/4mo.png";
import mo5 from "../../img/02_daily/1_mon/5mo.png";
import tu1 from "../../img/02_daily/2_tue/1tu.png";
import tu2 from "../../img/02_daily/2_tue/2tu.png";
import tu3 from "../../img/02_daily/2_tue/3tu.png";
import tu4 from "../../img/02_daily/2_tue/4tu.png";
import tu5 from "../../img/02_daily/2_tue/5tu.png";
import tu6 from "../../img/02_daily/2_tue/6tu.png";
import tu7 from "../../img/02_daily/2_tue/7tu.png";
import tu8 from "../../img/02_daily/2_tue/8tu.png";
import we1 from "../../img/02_daily/3_wen/1we.png";
import we2 from "../../img/02_daily/3_wen/2we.png";
import we3 from "../../img/02_daily/3_wen/3we.png";
import we4 from "../../img/02_daily/3_wen/4we.png";
import we5 from "../../img/02_daily/3_wen/5we.png";
import we6 from "../../img/02_daily/3_wen/6we.png";
import we7 from "../../img/02_daily/3_wen/7we.png";
import we8 from "../../img/02_daily/3_wen/8we.png";
import we9 from "../../img/02_daily/3_wen/9we.png";
import we10 from "../../img/02_daily/3_wen/10we.png";
import th1 from "../../img/02_daily/4_thu/1th.png";
import th2 from "../../img/02_daily/4_thu/2th.png";
import th3 from "../../img/02_daily/4_thu/3th.png";
import th4 from "../../img/02_daily/4_thu/4th.png";
import th5 from "../../img/02_daily/4_thu/5th.png";
import th6 from "../../img/02_daily/4_thu/6th.png";
import th7 from "../../img/02_daily/4_thu/7th.png";
import fr1 from "../../img/02_daily/5_fri/1fr.png";
import fr2 from "../../img/02_daily/5_fri/2fr.png";
import fr3 from "../../img/02_daily/5_fri/3fr.png";
import fr4 from "../../img/02_daily/5_fri/4fr.png";
import fr5 from "../../img/02_daily/5_fri/5fr.png";
import fr6 from "../../img/02_daily/5_fri/6fr.png";
import fr7 from "../../img/02_daily/5_fri/7fr.png";
import fr8 from "../../img/02_daily/5_fri/8fr.png";
import sa1 from "../../img/02_daily/6_sat/1se.png";
import sa2 from "../../img/02_daily/6_sat/2se.png";
import sa3 from "../../img/02_daily/6_sat/3se.png";
import sa4 from "../../img/02_daily/6_sat/4se.png";
import sa5 from "../../img/02_daily/6_sat/5se.png";
import sa6 from "../../img/02_daily/6_sat/6se.png";
import su1 from "../../img/02_daily/7_sun/1su.png";
import su2 from "../../img/02_daily/7_sun/2su.png";
import su3 from "../../img/02_daily/7_sun/3su.png";
import su4 from "../../img/02_daily/7_sun/4su.png";
import su5 from "../../img/02_daily/7_sun/5su.png";
import su6 from "../../img/02_daily/7_sun/6su.png";
import su7 from "../../img/02_daily/7_sun/7su.png";
import su8 from "../../img/02_daily/7_sun/8su.png";
import { Component } from "react";

// 날짜별 항목 모음 Object
const monday = [
  {
    id: 1,
    title: "뻐꾸기 커플",
    image: mo1,
  },
  {
    id: 2,
    title: "어서오세요 실력 지상주의 교실에 2nd Season",
    image: mo2,
  },
  {
    id: 3,
    title: "달달한 그녀",
    image: mo3,
  },
  {
    id: 4,
    title: "칭송받는 자 : 두 명의 백황",
    image: mo4,
  },
  {
    id: 5,
    title: "연맹공군 항공마법음악대 루미너스 위치스",
    image: mo5,
  },
];

const tuesday = [
  {
    id: 1,
    title: "은혼 2기 DASH편",
    image: tu1,
  },
  {
    id: 2,
    title: "BANANA FISH",
    image: tu2,
  },
  {
    id: 3,
    title: "(더빙) 스파이 패밀리",
    image: tu3,
  },
  {
    id: 4,
    title: "사랑이라 하기엔 기분 나빠",
    image: tu4,
  },
  {
    id: 5,
    title: "최근 고용한 메이드가 수상하다",
    image: tu5,
  },
  {
    id: 6,
    title: "킹덤 4기 part 2",
    image: tu6,
  },
  {
    id: 7,
    title: "슛! Goal to the Future",
    image: tu7,
  },
  {
    id: 8,
    title: "(자막) 드래곤 퀘스트 : 다이의 대모험 part 8",
    image: tu8,
  },
];

const wendsday = [
  {
    id: 1,
    title: "오버로드 4기",
    image: we1,
  },
  {
    id: 2,
    title:
      "전생현자의 이세계 라이프 ~두 번째 직업을 얻고 세계 최강이 되었습니다~",
    image: we2,
  },
  {
    id: 3,
    title: "이세계 약국",
    image: we3,
  },
  {
    id: 4,
    title:
      "금장의 벨메이유 ~벼랑 끝 마술사는 최강의 재액과 마법세계를 헤쳐나간다~",
    image: we4,
  },
  {
    id: 5,
    title: "그래도 아유무는 다가온다",
    image: we5,
  },
  {
    id: 6,
    title: "오리엔트 part 2",
    image: we6,
  },
  {
    id: 7,
    title: "반지의 기사",
    image: we7,
  },
  {
    id: 8,
    title: "(자막) 이누야샤 완결편",
    image: we8,
  },
  {
    id: 9,
    title: "프리마 돌",
    image: we9,
  },
  {
    id: 10,
    title: "(더빙) 고스트 게임 : 디지몬",
    image: we10,
  },
];

const thursday = [
  {
    id: 1,
    title: "갓슈벨!!",
    image: th1,
  },
  {
    id: 2,
    title: "이세계 미궁에서 하렘을",
    image: th2,
  },
  {
    id: 3,
    title: "새 엄마가 데려온 딸이 전 여친이었다",
    image: th3,
  },
  {
    id: 4,
    title: "메이드 인 어비스 : 열일의 황금향",
    image: th4,
  },
  {
    id: 5,
    title: "러브 라이브! 슈퍼스타!! 2기",
    image: th5,
  },
  {
    id: 6,
    title: "신 테니스의 왕자 U-17 WORLD CUP",
    image: th6,
  },
  {
    id: 7,
    title: "익스트림 하츠",
    image: th7,
  },
];

const friday = [
  {
    id: 1,
    title: "보스 따님과 돌보미",
    image: fr1,
  },
  {
    id: 2,
    title: "던전에서 만남을 추구하면 안 되는 걸까 4: 신장 미궁편",
    image: fr2,
  },
  {
    id: 3,
    title: "알바 뛰는 마왕님!!",
    image: fr3,
  },
  {
    id: 4,
    title: "(자막) 어떤 마술의 금서목록",
    image: fr4,
  },
  {
    id: 5,
    title: "영상연에는 손대지 마!",
    image: fr5,
  },
  {
    id: 6,
    title: "웃는 아르스노토리아 킁!",
    image: fr6,
  },
  {
    id: 7,
    title: "러브 올 플레이 part 2",
    image: fr7,
  },
  {
    id: 8,
    title: "유레이데코",
    image: fr8,
  },
];

const saturday = [
  {
    id: 1,
    title: "(자막) 명탐정 코난 2022",
    image: sa1,
  },
  {
    id: 2,
    title: "마법소녀 마도카 마기카 - 판권 부활",
    image: sa2,
  },
  {
    id: 3,
    title: "스칼렛 넥서스",
    image: sa3,
  },
  {
    id: 4,
    title: "(더빙) 닌자보이 란타로 24기",
    image: sa4,
  },
  {
    id: 5,
    title: "샤인포스트",
    image: sa5,
  },
  {
    id: 6,
    title: "치미모",
    image: sa6,
  },
];

const sunday = [
  {
    id: 1,
    title: "리코리스 리코일",
    image: su1,
  },
  {
    id: 2,
    title: "흑의 소환사",
    image: su2,
  },
  {
    id: 3,
    title: "인게이지 키스",
    image: su3,
  },
  {
    id: 4,
    title: "여친, 빌리겠습니다 2기",
    image: su4,
  },
  {
    id: 5,
    title: "섀도 하우스 2nd Season",
    image: su5,
  },
  {
    id: 6,
    title: "RWBY 빙설제국",
    image: su6,
  },
  {
    id: 7,
    title: "(무삭제) 여친, 빌리겠습니다 2기",
    image: su7,
  },
  {
    id: 8,
    title: "이과가 사랑에 빠졌기에 증명해보았다 r=1-sinθ(하트)",
    image: su8,
  },
];

// 랜더링
const rendermon = monday.map((mon) => {
  return (
    <div class={styles.itmain}>
      <div class={styles.it_thum} key={mon.id}>
        <img src={mon.image} alt="뻐꾸기 커플-thumbnail" />
      </div>
      <div class={styles.it_title}>{mon.title}</div>
      <div class={styles.it_up}>UP</div>
    </div>
  );
});

const rendertue = tuesday.map((tuesday) => {
  return (
    <div class={styles.itmain}>
      <div class={styles.it_thum} key={tuesday.id}>
        <img src={tuesday.image} alt="뻐꾸기 커플-thumbnail" />
      </div>
      <div class={styles.it_title}>{tuesday.title}</div>
      <div class={styles.it_up}>UP</div>
    </div>
  );
});

const renderwen = wendsday.map((wendsday) => {
  return (
    <div class={styles.itmain}>
      <div class={styles.it_thum} key={wendsday.id}>
        <img src={wendsday.image} alt="뻐꾸기 커플-thumbnail" />
      </div>
      <div class={styles.it_title}>{wendsday.title}</div>
      <div class={styles.it_up}>UP</div>
    </div>
  );
});

const renderthur = thursday.map((thursday) => {
  return (
    <div class={styles.itmain}>
      <div class={styles.it_thum} key={thursday.id}>
        <img src={thursday.image} alt="뻐꾸기 커플-thumbnail" />
      </div>
      <div class={styles.it_title}>{thursday.title}</div>
      <div class={styles.it_up}>UP</div>
    </div>
  );
});

const renderfri = friday.map((friday) => {
  return (
    <div class={styles.itmain}>
      <div class={styles.it_thum} key={friday.id}>
        <img src={friday.image} alt="뻐꾸기 커플-thumbnail" />
      </div>
      <div class={styles.it_title}>{friday.title}</div>
      <div class={styles.it_up}>UP</div>
    </div>
  );
});

const rendersat = saturday.map((saturday) => {
  return (
    <div class={styles.itmain}>
      <div class={styles.it_thum} key={saturday.id}>
        <img src={saturday.image} alt="뻐꾸기 커플-thumbnail" />
      </div>
      <div class={styles.it_title}>{saturday.title}</div>
      <div class={styles.it_up}>UP</div>
    </div>
  );
});

const rendersun = sunday.map((sunday) => {
  return (
    <div class={styles.itmain}>
      <div class={styles.it_thum} key={sunday.id}>
        <img src={sunday.image} alt="뻐꾸기 커플-thumbnail" />
      </div>
      <div class={styles.it_title}>{sunday.title}</div>
      <div class={styles.it_up}>UP</div>
    </div>
  );
});

// 반환
export class Daily_item extends Component {
  render() {
    return (
      <div class={styles.daily_wrap}>
        <div class={styles.daily_item}>
          <h3 class={styles.dtitle}>월요일</h3>
          <a>{rendermon}</a>
        </div>
        <div class={styles.daily_item}>
          <h3 class={styles.dtitle}>화요일</h3>
          <a>{rendertue}</a>
        </div>
        <div class={styles.daily_item}>
          <h3 class={styles.dtitle}>수요일</h3>
          <a>{renderwen}</a>
        </div>
        <div class={styles.daily_item}>
          <h3 class={styles.dtitle}>목요일</h3>
          <a>{renderthur}</a>
        </div>
        <div class={styles.daily_item}>
          <h3 class={styles.dtitle}>금요일</h3>
          <a>{renderfri}</a>
        </div>
        <div class={styles.daily_item}>
          <h3 class={styles.dtitle}>토요일</h3>
          <a>{rendersat}</a>
        </div>
        <div class={styles.daily_item}>
          <h3 class={styles.dtitle}>일요일</h3>
          <a>{rendersun}</a>
        </div>
      </div>
    );
  }
}

export default Daily_item;
