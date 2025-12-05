import {Header} from "../components/Header/Header"
import {Content} from "../components/Content/Content"
import {Cart} from "../components/Cart/Cart"
import clsx from "clsx";
import s from './layout.module.css'

type Props = {
  showCart: boolean
  cartValue: number
  onToggleCart: () => void
  onClose: () => void
}

export const Layout = ({showCart, cartValue, onToggleCart, onClose}: Props) => {
  return (
    <div className={s.mainContainer}>
      <Header cartValue={cartValue}
              showCart={showCart}
              onToggleCart={onToggleCart}
      />
      <main className={clsx(s.main, s.container)}>
        <Content/>
        <Cart isVisible={showCart} onClose={onClose}/>
      </main>
    </div>
  )
}