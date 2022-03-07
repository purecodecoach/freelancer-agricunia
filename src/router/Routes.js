import React from 'react'
import { Route, Switch } from 'react-router'
import Layout from '../layout/Layout'
import Pages from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Pages />
    </Switch>
  )
}

export default Routes

