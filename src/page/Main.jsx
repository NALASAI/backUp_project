/** @format */

import React from "react";
import styles from "./Main.module.css";
import slide_img from '../img/main/slide_01.png';

function Main() {
  return (
    <div style={{width: '100%'}}>
      <div className={styles.slick_list}>
        <div className={styles.slick_slide}>
          <div className={styles.slide_title}>
            <img className={styles.slide_img} src={slide_img}/>
            <div>
              <span className={styles.sc_sub}>마왕님한테 아이가 생겼다</span>
            </div>
            <button className={styles.sc_btn}>
              <span>보러가기</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-gILORG BtwyE"><path d="M6.363 21.637a1.239 1.239 0 001.752 0l8.761-8.76a1.239 1.239 0 000-1.753l-8.76-8.761a1.239 1.239 0 10-1.753 1.752L14.248 12l-7.885 7.885a1.239 1.239 0 000 1.752z" fill="currentColor"></path></svg>
            </button>
          </div>
        </div>
        <div className="{styles.slick_slide}"></div>
        <div className="{styles.slick_slide}"></div>
        <div className="{styles.slick_slide}"></div>
        <div className="{styles.slick_slide}"></div>
        <div className="{styles.slick_slide}"></div>
      </div>
      <div className="{styles.main_contents}">
        <div>
          <div>
            <div>
              <span>요일별 신작</span>
              <div>
                <button>
                  <span>업로드 공지</span>
                </button>
              </div>
            </div>
            <div>
              <button>
                <span>월</span>
              </button>
              <button>
                <span>화</span>
              </button>
              <button>
                <span>수</span>
              </button>
              <button>
                <span>목</span>
              </button>
              <button>
                <span>금</span>
              </button>
              <button>
                <span>토</span>
              </button>
              <button>
                <span>일</span>
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div><div className="0"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Main;
