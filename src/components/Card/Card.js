import styles from './Card.module.scss'

export function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked"/>
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>ЦЕНА :</span>
          <b>{props.price} р.</b>
        </div>
        <button className="button" onClick={ () => alert('Click!!!') }>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
        </button>
      </div>
    </div>
  )
}