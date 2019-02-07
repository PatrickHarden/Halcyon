import React from 'react'
import { Router, Link, Head } from 'react-static'

import { hot } from 'react-hot-loader'

//
import Search from './Search'
import SiteHeader from './sections/Header'
import SiteFooter from './sections/Footer'



const App = () => (
  <Router>
    <div id="site">
      <SiteHeader />
      <main className="content">
        <Search />
      </main>
      <SiteFooter />
  </div>
  </Router>
)

export default hot(module)(App)
