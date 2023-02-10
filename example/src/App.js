import React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'

import {
  Register,
  SelectService,
  IncorporationCountry,
  IncorporationCompanyType
} from 'react-onboarding-template'
import 'react-onboarding-template/dist/index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/register' component={Register}></Route>
      <Route path='/select-service' component={SelectService}></Route>
      <Route
        path='/incorporation-country'
        component={IncorporationCountry}
      ></Route>
      <Route
        path='/incorporation-company-type'
        component={IncorporationCompanyType}
      ></Route>
    </BrowserRouter>
  )
}

export default App
