import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData(({ redirectURL }) => (

    <section>
        {window.location.replace(redirectURL)}
    </section>
  ))