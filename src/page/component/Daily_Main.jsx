import React, { Component, useState } from "react";
import Mon from './dailycontent/01_mon';
import Tue from './dailycontent/02_tue';
import Wen from './dailycontent/03_wen';
import Thu from './dailycontent/04_thu';
import Fri from './dailycontent/05_fri';
import Sat from './dailycontent/06_sat';
import Sun from './dailycontent/07_sun';
import styles from './wbtn.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const btnlist = [
  {id: 1, day: '월', name:'mon'},
  {id: 2, day: '화', name:'tue'},
  {id: 3, day: '수', name:'wen'},
  {id: 4, day: '목', name:'thr'},
  {id: 5, day: '금', name:'fri'},
  {id: 6, day: '토', name:'sat'},
  {id: 7, day: '일', name:'sun'}
]

function SliderPrevArrow(props){
  const { styles, onClick } = props;
  return(
    <div className={styles.prev_btn} onClick={onClick}/>
  )
}

function SliderNextArrow(props){
  const { styles, onClick } = props;
  return(
    <div className={styles.prev_btn} onClick={onClick}/>
  )
}

const setting = {
  speed: 500,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 6,
  variableWidth: true,
  nextArrow: <SliderNextArrow/>,
  prevArrow: <SliderPrevArrow/>
}

const SelectList = () => {
  const [isSelectBtn, setIsSelectBtn] = useState("mon");

  const handleClick = (e) => {
    const {name} = e.target;
    setIsSelectBtn(name);
  }

  const SelectComponent = {
    mon: <Mon/>, 
    tue: <Tue/>,
    wen: <Wen/>,
    thr: <Thu/>,
    fri: <Fri/>,
    sat: <Sat/>,
    sun: <Sun/>
  }

  const WBTN = btnlist.map((Btnl) => {
    return(
      <button key={Btnl.id} name={Btnl.name} onClick={handleClick} className={Btnl.name === isSelectBtn ? styles.wbtn_on : styles.wbtn_off}>
        <span>{Btnl.day}</span>
      </button>
    )
  })

  return(
    <div className={styles.mc}>
      <div className={styles.wbtn}>
        <div className={styles.mtitle}>
          <span className={styles.sp_title}>요일별 신작</span>
          <div style={{ marginLeft: "1em", alignItems: "center", WebkitBoxAlign: "center"}}>
            <button className={styles.upload_btn}>
              <span style={{ flex: '1 1 0%', fontWeight: 'bold', fontSize: '1em', letterSpacing: '-0.0375em', color: 'rgb(99, 99, 99)', textAlign: 'center' }}>
                업로드 공지
              </span>
            </button>
          </div>
        </div>
        <div className={styles.wbtn_list}>
          {WBTN}
        </div>
      </div>
      {isSelectBtn && <Slider {...setting} className={styles.wcon_main}>{SelectComponent[isSelectBtn]}</Slider>}
    </div>
  )
}

class Daily_Main extends Component{
  render() {
    return (
      <SelectList/>
    );
  }
}

export default Daily_Main;