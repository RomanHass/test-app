import {useEffect, useState} from "react"
import {Layout} from "./layout/layout"

function App() {
  const [showCart, setShowCart] = useState(false)
  const [cartValue, setCartValue] = useState(0)

  useEffect(() => {
    const finalValue = 5827.50
    const duration = 1500
    const steps = 50
    const increment = finalValue / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const newValue = increment * currentStep

      if (currentStep >= steps) {
        setCartValue(finalValue)
        clearInterval(timer)
      } else {
        setCartValue(parseFloat(newValue.toFixed(2)))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const handleToggleCart = () => setShowCart(!showCart)
  const handleClose = () => setShowCart(false)

  return (
    <Layout showCart={showCart}
            cartValue={cartValue}
            onToggleCart={handleToggleCart}
            onClose={handleClose}
    />
  )
}

export default App