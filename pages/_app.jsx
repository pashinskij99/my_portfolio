import clsx from 'clsx'
import { useRouter } from 'next/router'
import 'normalize.css'
import React, { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Progress } from '../components/progress'
import { SideBar } from '../components/sidebar'
import { Preloader } from '../components/preloader'
import TransitionPage from '../components/transitionPage'
import { setIsAnimating } from '../store/progress'
import Cursor from '../components/cursor'
import { store } from '../store/store'
import '../styles/index.scss'

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(true), 1500)
  }, [])

  return (
    <Provider store={store}>
      <Preloader isAnimating={!loading} />

      {loading && (
        <div className='app'>
          {window.innerWidth > 767 && <Cursor />}

          <Loading />

          <SideBar />

          <TransitionPage>
            <Component {...pageProps} />
          </TransitionPage>
        </div>
      )}
    </Provider>
  )
}

const Loading = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { isAnimatingProgress } = useSelector((state) => state.progress)

  useEffect(() => {
    const handleFixStyle = () => {
      const nodes = document.querySelectorAll('link[rel=stylesheet], style:not([media=x])')
      const copies = [...nodes].map((el) => el.cloneNode(true))

      for (let copy of copies) {
        copy.removeAttribute('data-n-p')
        copy.removeAttribute('data-n-href')

        document.head.appendChild(copy)
      }

      const handler = () => {
        router.events.off('routeChangeComplete', handler)
  
        window.setTimeout(() => {
          for (let copy of copies) {
            document.head.removeChild(copy)
          }
        }, 1000)
      }

      router.events.on('routeChangeComplete', handler)
    }
    const handleStart = () => dispatch(setIsAnimating(true))
    const handleStop = () => dispatch(setIsAnimating(false))

    router.events.on('beforeHistoryChange', handleFixStyle)
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return <Progress isAnimating={isAnimatingProgress} />
}

export default MyApp
