import Footer from '../Footer/Footer2'
import NavBar from '../NavBar/NavBar'
import NumbersIncrement from '../NumbersIncrement/NumbersIncrement'
import styles from './PositionRelative.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Nunito } from "next/font/google";
import { Provider } from 'react-redux'
import { store } from '@/services/store'

const nunito = Nunito({subsets: ["latin"]});
 
const PositionRelative = ({children}: any) => {

  return (
    <Provider store={store}>
      <div>
        <div className={`${styles.relative} ${nunito.className}`}>
          {children}
          <Footer />
        </div>
        <NavBar />
      </div>
    </Provider>
  )
}

export default PositionRelative