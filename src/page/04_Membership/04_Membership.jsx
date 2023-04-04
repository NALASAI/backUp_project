import React, {Component} from "react";
import styles from './04_Membership.module.css';

class Membership extends Component{
    render(){
        return(
            <div class={styles.Membership_body}>
                <div class={styles.Membership_wrapper}>
                    <a href="/" style={{textDecoration: 'none'}}><svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg" class={styles.Membership_svg1}><path fill-rule="evenodd" clip-rule="evenodd" d="M40.099 7.252h-1.652a1.554 1.554 0 01-1.562-1.572v-.308c0-.866.697-1.572 1.562-1.572h6.735c.856 0 1.562.706 1.562 1.572v.308c0 .866-.696 1.572-1.562 1.572h-1.651v11.182c0 .865-.697 1.572-1.562 1.572h-.309a1.573 1.573 0 01-1.561-1.572V7.252zM10.652 20.006H8.215c-2.686 0-4.885-2.209-4.885-4.905v-9.72c0-.865.696-1.57 1.572-1.57H5.2c.866 0 1.562.705 1.562 1.57v9.72c0 .796.647 1.453 1.453 1.453h2.437c.865 0 1.562.706 1.562 1.572v.308c0 .865-.697 1.572-1.562 1.572zm38.927-.03c.1.02.21.03.319.03h6.317c.865 0 1.562-.707 1.562-1.572v-.299c0-.865-.707-1.571-1.562-1.571h-4.447v-2.925h3.452c.866 0 1.562-.707 1.562-1.572v-.298c0-.866-.706-1.572-1.562-1.572h-3.452V7.252h4.447c.865 0 1.562-.706 1.562-1.572v-.308c0-.866-.707-1.572-1.562-1.572h-6.317c-.866 0-1.572.706-1.572 1.572v13.062c0 .756.537 1.393 1.253 1.542zM18.88 7.272c-.716.11-1.224.756-1.224 1.482v3.552h2.905V8.715c0-.876-.786-1.582-1.68-1.443zm-2.785 12.734h-.309a1.575 1.575 0 01-1.572-1.572v-9.62c0-2.577 1.94-4.785 4.497-4.984 2.865-.229 5.282 2.06 5.282 4.885v9.719c0 .865-.696 1.572-1.561 1.572h-.309a1.567 1.567 0 01-1.562-1.572v-2.686h-2.905v2.686c0 .865-.696 1.572-1.561 1.572zm15.21-12.754h2.428c.865 0 1.562-.706 1.562-1.572v-.308c0-.866-.697-1.572-1.562-1.572h-2.438c-2.686 0-4.884 2.209-4.884 4.905v9.719c0 .865.696 1.572 1.562 1.572h.298c.866 0 1.562-.707 1.562-1.572v-4.357h3.89c.865 0 1.562-.707 1.562-1.572v-.299c0-.865-.697-1.572-1.562-1.572h-3.89v-1.91c.02-.805.677-1.462 1.472-1.462zm35.794 12.754h-2.437c-2.686 0-4.885-2.209-4.875-4.905v-9.72c0-.865.697-1.571 1.562-1.571h.308c.856 0 1.562.706 1.562 1.572v9.72a1.46 1.46 0 001.453 1.452h2.427c.856 0 1.562.706 1.562 1.572v.308c0 .865-.696 1.572-1.562 1.572z" fill="currentColor"></path></svg></a>
                    <div class={styles.Membership_wrap}>
                        <div class={styles.Membership_sub}>
                        신작부터 역대 인기 작품까지
                        애니메이션을 한 곳에서 편-안하게 즐기세요!
                        </div>
                        <button class={styles.email_login}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class={styles.Membership_svg2}><path fill-rule="evenodd" clip-rule="evenodd" d="M23.582 4.32L12 11.238.412 4.32A1.17 1.17 0 000 5.203v13.594c0 .351.166.665.418.883L12 12.767l11.9 7.227h.1V5.204a1.17 1.17 0 00-.418-.884z" fill="#E2E2E2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.281 20h22.62l-8.078-8.002H8.177l-7.76 7.686c.232.198.53.316.864.316z" fill="#D0D0D0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.281 4a1.35 1.35 0 00-.87.32l10.704 10.55a1.259 1.259 0 001.764 0L23.581 4.32A1.333 1.333 0 0022.72 4H1.281z" fill="#EEE"></path></svg>
                            이메일로 로그인
                        </button>
                        <div class={styles.Membership_login}>
                            <button class={styles.submit_login_btn}>이메일로 가입</button>
                            <button class={styles.submit_login_btn}>다른 방법으로 계속</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Membership;