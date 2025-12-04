import clsx from "clsx";
import s from './cart.module.css'

type Props = {
  isVisible: boolean
  onClose: () => void
}

export const Cart = ({isVisible, onClose}: Props) => {
  return (
    <div className={clsx(s.cart, isVisible && s.visible)}>
      <div className={s.wrapper}>
        <div className={s.cartHeader}>
          <h2>Корзина</h2>
          <button onClick={onClose} className={s.close}>×</button>
        </div>
        <div className={s.cartContent}>
          <p>Товары в корзине...</p>
        </div>
      </div>
    </div>
  )
}