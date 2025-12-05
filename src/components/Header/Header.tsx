import clsx from "clsx"
import {CartWidget} from "../CartWidget/CartWidget"
import {LanguageSelect} from "../LanguageSelect/LanguageSelect"
import {Menu} from "../Menu/Menu"
import {SearchInput} from "../SearchInput/SearchInput"
import s from './header.module.css'

type Props = {
  showCart: boolean
  cartValue: number
  onToggleCart: () => void
}

export const Header = ({showCart, cartValue, onToggleCart}: Props) => {
  return (
    <div className={clsx(s.container, showCart && s.wide)}>
      <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.iconButton}>
            <Menu/>
          </div>
          <div className={s.iconButton}>
            <LanguageSelect/>
          </div>
          <div className={s.iconButton}>
            <SearchInput/>
          </div>
        </div>
        <CartWidget isActive={showCart}
                    value={cartValue}
                    onClick={onToggleCart}
        />
      </header>
    </div>
  )
}