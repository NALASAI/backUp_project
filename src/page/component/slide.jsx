import React, {Component} from "react";
import SlideImg1 from "../../img/main/slide/slide_main1.png";
import SlideImg1_Title from "../../img/main/slide/slide_main1_title.png";
import SlideImg2 from "../../img/main/slide/slide_main2.png";
import SlideImg2_Title from "../../img/main/slide/slide_main2_title.png";
import SlideImg3 from "../../img/main/slide/slide_main3.png";
import SlideImg3_Title from "../../img/main/slide/slide_main3_title.png";
import SlideImg4 from "../../img/main/slide/slide_main4.png";
import SlideImg4_Title from "../../img/main/slide/slide_main4_title.png";
import SlideImg5 from "../../img/main/slide/slide_main5.png";
import SlideImg5_Title from "../../img/main/slide/slide_main5_title.png";
import SlideImg6 from "../../img/main/slide/slide_main6.png";
import SlideImg6_Title from "../../img/main/slide/slide_main6_title.png";
import styles from "./slide.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class slide extends Component {
  render() {
    const SlideItem = [
      {
        id: 1,
        image: SlideImg1,
        title: SlideImg1_Title,
        alt: '슬라이드1',
        tmi: '마음 따스해지는 육아일기'
      },
      {
        id: 2,
        image: SlideImg2,
        title: SlideImg2_Title,
        alt: '슬라이드2',
        tmi: '성우 사인카드는 못참지!!!'
      },
      {
        id: 3,
        image: SlideImg3,
        title: SlideImg3_Title,
        alt: '슬라이드3',
        tmi: '너를 향한 내 마음을 Q.E.D'
      },
      {
        id: 4,
        image: SlideImg4,
        title: SlideImg4_Title,
        alt: '슬라이드4',
        tmi: '극장판 3부작 완결 기념 굿즈 이벤트!'
      },
      {
        id: 5,
        image: SlideImg5,
        title: SlideImg5_Title,
        alt: '슬라이드5',
        tmi: '라비 4라인 [트윈즈 피카로] 등장'
      },
      {
        id: 6,
        image: SlideImg6,
        title: SlideImg6_Title,
        alt: '슬라이드6',
        tmi: '마왕님한테 아이가 생겼다'
      }
    ]

    const setting = {
      speed: 500,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    const Slider_Main = SlideItem.map((Sitems) => {
      return (
        <div class={styles.slick_slide_view} key={Sitems.id}>
          <img class={styles.slide_back_img} src={Sitems.image}/>
            <div class={styles.slick_sub}>
              <img src={Sitems.title} class={styles.ssub_img} alt={Sitems.alt}/>
              <div style={{ marginTop: "0.75rem" }}>
                <span class={styles.sub_title}>{Sitems.tmi}</span>
              </div>
              <button class={styles.slick_sbtn}>
                <span class={styles.sbtn_go}>보러가기</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.363 21.637a1.239 1.239 0 001.752 0l8.761-8.76a1.239 1.239 0 000-1.753l-8.76-8.761a1.239 1.239 0 10-1.753 1.752L14.248 12l-7.885 7.885a1.239 1.239 0 000 1.752z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
        </div>
      );
    });

    return (
      <div className={styles.slick_body}>
        <Slider {...setting} class={styles.slick_slider}>
          {Slider_Main}
        </Slider>
      </div>
    );
  }
}

export default slide;
