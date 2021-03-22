import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import styles from './carousel.module.scss';

export const Carrusel = () => {
    var items = [
        {
            img: "https://i.ibb.co/f92LJ3N/carrousel-2.jpg"
        },
        {
            img: "https://i.ibb.co/6Z9JHs9/carrousel-1.jpg"
        }
    ]

    return (
        <div>
           <Carousel 
            animation = "slide"
            navButtonsAlwaysInvisible= {true}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel> 
        </div>
    )
}

export function Item(item)
{
    return (
        <Paper>
            <img src={item.item.img} alt="" className={styles.img}/>
        </Paper>
    )
}


