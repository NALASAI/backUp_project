/** @format */
import React, { Component } from "react";
import styles from "./03_Themes.module.css";
import conimg1 from "../../img/03_themes/1/01_th.png";
import conimg2 from "../../img/03_themes/1/02_th.png";
import conimg3 from "../../img/03_themes/1/03_th.png";

const items = [
  {
    id: 1,
    title: "2022년 2분기 완결작 TOP 10",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 2,
    title: "라프텔 유저들이 스파이 패밀리에게 추천하는 명작 애니 15선!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 3,
    title: "2022년 1분기 완결작 TOP 6",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 4,
    title: "2021년 4분기 완결작 TOP 9",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 5,
    title: "2021 라프텔 연말대상 수상작",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 6,
    title: "러브라이브 입문 강의",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 7,
    title: "<용과 주근깨 공주> 업로드 기념 추천!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 8,
    title: "시원하게 집에서 보는 오직 나만을 위한 스포츠!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 9,
    title: "썬더 일레븐이 라프텔에?!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 10,
    title: "<명탐정 코난> TVA 라프텔에 드디어 등장!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 11,
    title: "라이트 애니, 라프텔 상륙!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 12,
    title: "라프텔에서 만남을 추구하면 안되는걸까?",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 13,
    title: "어른이를 위한 치유물",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 14,
    title: "광고보고 무제한 무료보기로 인기작 1기부터 정주행하자!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 15,
    title: "진격의 거인 시리즈 몰아보기",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 16,
    title: "모노가타리, 다시 봐도 재밌는 이야기",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 17,
    title: "지브리 명작 극장",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 18,
    title: "아련한 추억의 한 켠, 디지몬",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 19,
    title: "방학은 역시 카툰 네트워크!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 20,
    title: "할아버지의 이름을 걸고!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 21,
    title: "그 때 그 시절, 추억의 특촬물",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 22,
    title: "극장판 짱구 보고 싶은 사람 모두 모여~!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 23,
    title: "메이저 퍼스트 시즌 완전 정복!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 24,
    title: "를르슈 부활 기념! 코드기아스 극장판 총 정리!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 25,
    title: "이게 바로 찐백합! 추천 애니 12선",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 26,
    title: "<하이큐!!> 우리말 더빙작 모음",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 27,
    title: "버터미 넘치는 스와베 쥰이치 성우의 주요 출연 애니",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 28,
    title: "역대급 다작 성우, 하나자와 카나 주요 출연 애니",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 29,
    title: "매력적인 캐릭터들이 넘치는 하렘 애니 추천",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 30,
    title: "자타공인 꿀성대, 후쿠야마 쥰 성우 출연 애니",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 31,
    title: "[과학 어드벤처] 시리즈",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 32,
    title: "천상계 목소리, 카미야 히로시 성우 출연 애니 정리",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 33,
    title: "순정 애니 추천! 설렘이 가득♡",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 34,
    title: "나도 한 번 입문해볼까? 페이트 시리즈 최신작까지 총 정리",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 35,
    title: "OST가 좋은 애니 추천",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 36,
    title: "이름은 이상하지만 꿀잼인 애니 추천",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 37,
    title: "소드 아트 온라인 시리즈 완전정복",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 38,
    title: "보고만 있어도 손에 땀이 난다. 스포츠를 소재로 하는 애니메이션 추천",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 39,
    title: "포스트 아포칼립스 애니 추천 14선",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 40,
    title: "반짝반짝☆꽃미남 아이돌 애니 추천!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 41,
    title: "달달한 로맨틱 코미디 애니 6선",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 42,
    title: "끝까지 안 보면 후회할 애니 추천 7선!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 43,
    title: "2017년 인기 애니 총 정리!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 44,
    title: "웰메이드 청춘 성장 애니 추천!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 45,
    title: "쿠로코의 농구 TVA 및 극장판 총 정리",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 46,
    title: "BL 애니 추천 (지금 바로 감상 가능한 작품들 정리)",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 47,
    title: "스릴러 애니 추천",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 48,
    title: "이세계물 애니메이션 추천!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 49,
    title: "테니스의 왕자, 그 전설을 정주행하자!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 50,
    title: "하이큐 애니 전체 시리즈 씹어먹기!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 51,
    title: "치유물 명작, 나츠메 우인장 1기부터 신작 6기까지!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 52,
    title: "그리웠던 추억의 애니",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 53,
    title: "겁쟁이 페달 1기부터 4기 신작까지 달려보자!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 54,
    title: "이누야샤 덕후 모여라! 이누야샤 시리즈 총 정리",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 55,
    title: "잊혀지지가 않아...! 후유증 강한 눈물의 애니메이션 추천",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 56,
    title: "따뜻한 여운을 남기는 치유물 애니 추천",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 57,
    title: "먼치킨 애니 추천! 이토록 짜릿한 통쾌함!",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
  {
    id: 58,
    title: "보기만 해도 행복한 먹방 애니메이션",
    image1: conimg1,
    image2: conimg2,
    image3: conimg3,
  },
];

const itemlists = items.map((items) => {
  return (
    <a class={styles.Theme_items} key={items.id}>
      <div class={styles.item_body}>
        <div class={styles.board}>
          <div class={styles.images}>
            <div class={styles.image}><img src={ items.image1 }/></div>
            <div class={styles.image}><img src={ items.image2 }/></div>
            <div class={styles.image}><img src={ items.image3 }/></div>
          </div>
          <div class={styles.blurred}></div>
        </div>
        <div class={styles.description}>
          <div style={{ width: "100%" }}>{items.title}</div>
        </div>
      </div>
    </a>
  );
});

export class Theme_contents extends Component {
  render() {
    return <div class={styles.Themes_contents}>{itemlists}</div>;
  }
}

export default Theme_contents;
