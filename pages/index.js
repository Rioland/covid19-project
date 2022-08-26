import Head from 'next/head'
import {MainNavBar} from '../components/navbars'
import { Fragment } from 'react'
export default function Home() {
  return (
  <Fragment>
   <div className='header'>
        <MainNavBar/>
   </div>
  </Fragment>
  )
}
