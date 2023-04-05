import React, { Component } from "react";
import styles from "./01_Finder.module.css";
import FINDITEM from './FindItem';

const optionItem = [
  { id : 'BL'}, { id : 'GL/백합'}, { id : 'SF'},
  { id : '개그'}, { id : '공포'}, { id : '드라마'},
  { id : '로맨스'}, { id : '모험'}, { id : '무협'},
  { id : '미스터리'}, { id : '범죄'}
]

const optionItem2 = [
  { id : '가족'}, { id : '감동'}, { id : '게임'},
  { id : '동물'}, { id : '동양풍'}, { id : '두뇌싸움'},
  { id : '로봇'}, { id : '루프물'}, { id : '무협'},
  { id : '미스터리'}, { id : '범죄'}
]

const optionOne = optionItem.map((opt) => {
  return(
    <div class={styles.option_title} key={opt.id}>
      <input type="checkbox" value="view" className={styles.checkbox}/>
      <div style={{ fontSize: "0.875rem" }}>{opt.id}</div>
    </div>
  );
})

const optionTwo = optionItem2.map((opt) => {
  return(
    <div class={styles.option_title} key={opt.id}>
      <input type="checkbox" value="view" className={styles.checkbox}/>
      <div style={{ fontSize: "0.875rem" }}>{opt.id}</div>
    </div>
  );
})

class Finder extends Component {
  render() {
    return (
      <div class={styles.fbody}>
        <div class={styles.fmain}>
          <div class={styles.fmain_left}>
            <div class={styles.left_body}>
              <div class={styles.lscroll_wrap}>
                <div class={styles.lfilter}>
                  <div class={styles.lfilter_text}>필터</div>
                  <div class={styles.btn_wrap}>
                    <button class={styles.btn_body}>
                      <div class={styles.btn_text}>초기화</div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.25 11.667c0-3.76 3.118-6.817 6.95-6.817V5v-.15c3.832 0 6.95 3.057 6.95 6.817 0 3.76-3.118 6.816-6.95 6.816a.546.546 0 0 1-.55-.542c0-.3.247-.542.55-.542 3.227 0 5.85-2.572 5.85-5.732s-2.623-5.733-5.85-5.733c-3.226 0-5.85 2.572-5.85 5.733v1.049l1.462-1.434c.215-.21.561-.21.777 0a.538.538 0 0 1 0 .77l-2.4 2.352a.569.569 0 0 1-.595.118.539.539 0 0 1-.182-.118l-2.4-2.353a.538.538 0 0 1 0-.77c.215-.21.561-.21.776 0l1.462 1.435v-1.05z"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class={styles.lview}>
                  <section>
                    <div class={styles.chbox}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                        감상 가능한 작품만 보기
                      </div>
                    </div>
                    <div class={styles.chbox}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                        멤버쉽 포함된 작품만 보기
                      </div>
                    </div>
                  </section>
                </div>
                <section class={styles.lsec}>
                  <div class={styles.sec_title}>
                    <h4>장르</h4>
                    <div class={styles.see_more}>
                      더보기
                      <svg
                        fill="currentColor"
                        preserveAspectRatio="xMidYMid meet"
                        height="1em"
                        width="1em"
                        viewBox="0 0 40 40"
                        style={{ verticalAlign: "middle" }}
                      >
                        <g>
                          <path d="m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class={styles.option}>
                    {optionOne}
                  </div>
                </section>
                <section class={styles.lsec}>
                  <div class={styles.sec_title}>
                    <h4>태그</h4>
                    <div class={styles.see_more}>
                      더보기
                      <svg
                        fill="currentColor"
                        preserveAspectRatio="xMidYMid meet"
                        height="1em"
                        width="1em"
                        viewBox="0 0 40 40"
                        style={{ verticalAlign: "middle" }}
                      >
                        <g>
                          <path d="m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class={styles.option}>
                    {optionTwo}
                  </div>
                </section>
                <section class={styles.lsec}>
                  <div class={styles.sec_title}>
                    <h4>년도</h4>
                    <div class={styles.see_more}>
                      더보기
                      <svg
                        fill="currentColor"
                        preserveAspectRatio="xMidYMid meet"
                        height="1em"
                        width="1em"
                        viewBox="0 0 40 40"
                        style={{ verticalAlign: "middle" }}
                      >
                        <g>
                          <path d="m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class={styles.option}>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>2022년 3분기</div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>2022년 2분기</div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>2022년 1분기</div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>2021년 4분기</div>
                    </div>
                  </div>
                </section>
                <section class={styles.lsec}>
                  <div class={styles.sec_title}>
                    <h4>방영</h4>
                    <div class={styles.see_more}>
                      더보기
                      <svg
                        fill="currentColor"
                        preserveAspectRatio="xMidYMid meet"
                        height="1em"
                        width="1em"
                        viewBox="0 0 40 40"
                        style={{ verticalAlign: "middle" }}
                      >
                        <g>
                          <path d="m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class={styles.option}>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>방영중</div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>완결</div>
                    </div>
                  </div>
                </section>
                <section class={styles.lsec}>
                  <div class={styles.sec_title}>
                    <h4>출시타입</h4>
                    <div class={styles.see_more}>
                      더보기
                      <svg
                        fill="currentColor"
                        preserveAspectRatio="xMidYMid meet"
                        height="1em"
                        width="1em"
                        viewBox="0 0 40 40"
                        style={{ verticalAlign: "middle" }}
                      >
                        <g>
                          <path d="m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class={styles.option}>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>TVA</div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>극장판</div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>OVA</div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>라이트애니</div>
                    </div>
                  </div>
                </section>
                <section class={styles.lsec}>
                  <div class={styles.sec_title}>
                    <h4>브랜드</h4>
                    <div class={styles.see_more}>
                      더보기
                      <svg
                        fill="currentColor"
                        preserveAspectRatio="xMidYMid meet"
                        height="1em"
                        width="1em"
                        viewBox="0 0 40 40"
                        style={{ verticalAlign: "middle" }}
                      >
                        <g>
                          <path d="m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class={styles.option}>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>
                        애니맥스 플러스
                      </div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>애니플러스</div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>kt alpha</div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>대원</div>
                    </div>
                    <div class={styles.option_title}>
                      <input type="checkbox" value="view" className={styles.checkbox}/>
                      <div style={{ fontSize: "0.875rem" }}>기타</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div class={styles.fmain_right}>
            <div class={styles.rtitle}>
              <div class={styles.rsub}>
                총
                <span class={styles.rtotal}>
                  20
                </span>
                개의 작품이 검색됬어요
              </div>
              <div class={styles.rfilter}>
                <div class={styles.rselected}>
                  라프텔 랭킹 순
                  <svg
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                    height="1em"
                    width="1em"
                    viewBox="0 0 40 40"
                    style={{ verticalAlign: "middle" }}
                  >
                    <g>
                      <path d="m11.6 16.6h16.8l-8.4 8.4z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <FINDITEM/>
          </div>  
        </div>
      </div>
    );
  }
}

export default Finder;
