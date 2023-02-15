import React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'

import {
  Register,
  SelectService,
  IncorporationCountry,
  IncorporationCompanyType,
  IncorporationEntityNameCheck,
  IncorporationPackage
} from 'react-onboarding-template'
import 'react-onboarding-template/dist/index.css'

const App = () => {
  return (
    <div style={{ height: '100%' }}>
      <BrowserRouter>
        <Route path='/register' component={Register} exact></Route>
        <Route path='/select-service' component={SelectService} exact></Route>
        <Route
          path='/incorporation-country'
          component={IncorporationCountry}
          exact
        ></Route>
        <Route
          path='/incorporation-company-type'
          component={IncorporationCompanyType}
          exact
        ></Route>
        <Route
          path='/incorporation-entity-name-check'
          component={IncorporationEntityNameCheck}
          exact
        ></Route>
        <Route
          path='/incorporation-package'
          component={IncorporationPackage}
          exact
        ></Route>
      </BrowserRouter>
    </div>
  )
}

export default App
