import React from 'react'
import { Router } from 'react-static'

import { hot } from 'react-hot-loader'

//
import Routes from 'react-static-routes'
import SearchComponent from './sections/SearchComponent'
import SiteHeader from './sections/Header'
import SiteFooter from './sections/Footer'



const App = () => (
  <Router>
    <div id="site">
      <SiteHeader />
      <SearchComponent />
      <main className="content">
        <Routes />
      </main>
      <SiteFooter />
  </div>
  </Router>
)

export default hot(module)(App)
