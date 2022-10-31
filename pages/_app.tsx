import React, {useState} from 'react';
import clsx from 'clsx';
import { SideBar } from '../components/sidebar';
import 'normalize.css';
import '../styles/index.scss'

interface IMyApp {
  Component: any 
  pageProps: any
}

const MyApp : React.FC<IMyApp> = ({ Component, pageProps }) => {
  const [ open, setOpen ] = useState(false)

  return (
    <div className={clsx('app', open && 'app_active')}>
      <SideBar setOpen={setOpen} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
