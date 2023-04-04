/** @format */
import React, { Component } from "react";
import DAILY_ITEM from "./Daily_item";
import styles from "./02_Daily.module.css";

class Daily extends Component {
  render() {
    return (
      <div class={styles.daily_body}>
        <div class={styles.daily_main}>
          <h1 class={styles.daily_title}>요일별 신작</h1>
          <div class={styles.daily_contents}>
            <DAILY_ITEM />
          </div>
        </div>
      </div>
    );
  }
}

export default Daily;
