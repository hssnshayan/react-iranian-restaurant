import React, { Fragment, useState, useEffect } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.css'

const Header = ({onShowModal}) => {
  return (
    <Fragment>
        <header className={styles.header}>
            <h1>Iranian Restaurant</h1>
            <HeaderCartButton onClick={onShowModal} />
        </header>
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="A table of all foods ..." />
        </div>
    </Fragment>
  )
}

export default Header