import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Landingpagecomponent from './Landingpagecomponent'
import Page2 from "./Page2"
import { Route , Routes} from 'react-router-dom';
import Viewdata from './Viewdata';
export default function Landingpage() {
  return (
    <div className='lpa'>
        {/* <Navbar/> */}
        <Landingpagecomponent/>
        <Page2/>
        
    </div>
  )
}