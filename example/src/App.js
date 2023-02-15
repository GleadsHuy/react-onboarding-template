import React, { Fragment } from 'react'
import { BrowserRouter, Link, Route, redirect } from 'react-router-dom'

import {
  Register,
  SelectService,
  IncorporationCountry,
  IncorporationCompanyType,
  IncorporationEntityNameCheck,
  IncorporationPackage,
  IncorporationAdditionalService
} from 'react-onboarding-template'
import 'react-onboarding-template/dist/index.css'

const App = () => {
  return (
    <Fragment>
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
        <Route
          path='/incorporation-additional-service'
          component={IncorporationAdditionalService}
          exact
        ></Route>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
