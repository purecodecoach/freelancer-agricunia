import React from 'react'
import { Route, Switch } from 'react-router'
import Layout from '../layout/Layout'
import LogRegLayout from '../layout/LogRegLayout'
import AboutUs from './about/AboutUs'
import Contact from './contact/Contact'
import Dashboard from './dashboard/Dashboard'
import Login from './login/Login'
import Partner from './partner/Partner'
import Privacy from './privacypolicy/Privacy'
import ProductsPage from './productsPage/ProductsPage'
import Register from './Register/Register'
import SingleProduct from './singleproduct/SingleProduct'
import Terms from './terms/Terms'
import Checkout from './checkout/Checkout'
import Blog from './blog/Blog'





const Index = () => {

    const defaultLayout = ({ children }) => {
        return <Layout>
            {children}
        </Layout>
    }
    const loginLayout = ({ children }) => {
        return <LogRegLayout>
            {children}
        </LogRegLayout>
    }

    return (
        <Switch>
            <RouteWrapper exact path="/" component={Login} layout={loginLayout} />
            <RouteWrapper exact path="/register" component={Register} layout={loginLayout} />
            <RouteWrapper path="/dashboard" component={Dashboard} layout={defaultLayout} />
            <RouteWrapper path="/privacy" component={Privacy} layout={defaultLayout} />
            <RouteWrapper path="/about" component={AboutUs} layout={defaultLayout} />
            <RouteWrapper path="/contact" component={Contact} layout={defaultLayout} />
            <RouteWrapper path="/Partner" component={Partner} layout={defaultLayout} />
            <RouteWrapper path="/products" component={ProductsPage} layout={defaultLayout} />
            <RouteWrapper path="/terms" component={Terms} layout={defaultLayout} />
            <RouteWrapper path="/productdetails" component={SingleProduct} layout={defaultLayout} />
            <RouteWrapper path="/checkout" component={Checkout} layout={defaultLayout} />
            <RouteWrapper path="/blog" component={Blog} layout={defaultLayout} />
        </Switch>
    )
}



export default Index

function RouteWrapper({
    component: Component,
    layout: Layout,
    ...rest
}) {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}
