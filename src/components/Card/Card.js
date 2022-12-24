import React from "react";
import styles from './Card.module.scss'

export function Card({title, price, imageUrl, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickAddHandler = () => {
    onPlus({title, price, imageUrl})
    setIsAdded(!isAdded)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked"/>
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>ЦЕНА :</span>
          <b>{price} р.</b>
        </div>
        <img className={styles.plus} onClick={onClickAddHandler} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}  alt="Plus"/>
      </div>
    </div>
  )
}