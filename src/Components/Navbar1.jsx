import React from 'react';
import styles from './Modules_Css/Navbar1.module.css';

export const Navbar1 = () => {
    return (
        <div className={styles.nav1_mainDiv}>
            <div className={styles.nav1_leftDiv}>
                <div className={styles.nav1_leftDiv_primelogo}>
                    
                </div>
            </div>
            <div className={styles.nav1_rightDiv}>
                <div className={styles.nav1_rightDiv_language}>EN</div>
                <div className={styles.nav1_rightDiv_signIn}>Sign In</div>
            </div>
        </div>
    );
}
