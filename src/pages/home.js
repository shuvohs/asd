import React from 'react'

import Hero from '../components/Hero';
import Analytics from '../components/Analytics';
import Newsletter from '../components/Newsletter';
import Cards from '../components/Cards';

export default function home() {
  return (
    <React.Fragment>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </React.Fragment>
  )
}
