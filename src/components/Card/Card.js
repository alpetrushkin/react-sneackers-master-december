import React from "react";
import styles from './Card.module.scss'

export function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickAddHandler = () => {
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked"/>
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>ЦЕНА :</span>
          <b>{props.price} р.</b>
        </div>
        <img className={styles.plus} onClick={onClickAddHandler} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}  alt="Plus"/>
      </div>
    </div>
  )
}