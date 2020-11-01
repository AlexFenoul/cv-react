import React, { useState } from 'react';
import { } from 'react-redux';
import { } from './carousselSlice.js';
import styles from './Caroussel.module.css';
import Carousel from 'react-bootstrap/Carousel'

export function Caroussel(props) {
  return (
    <Carousel className={styles.caroussel}>
        {props.carousel.map((item) =>
            <Carousel.Item>
                <img
                    className={"d-block w-100 " + styles.imgCaroussel}
                    src={"/carousel" + item.src}
                    alt={item.alt}
                />
                <Carousel.Caption>
                    {item.caption}
                </Carousel.Caption>
            </Carousel.Item>
        )}
    </Carousel>  
  );
}






