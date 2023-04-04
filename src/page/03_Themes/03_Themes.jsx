import React, { Component } from "react";
import THEME_CONTENTS from "./Themes_contents.jsx";
import styles from "./03_Themes.module.css";

class Themes extends Component {
  render() {
    return (
      <div class={styles.Themes_body}>
        <div class={styles.Themes_title}>테마추천 전체 리스트</div>
        <THEME_CONTENTS />
      </div>
    );
  }
}

export default Themes;
