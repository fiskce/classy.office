import React from 'react'


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Header from './Header';
import Login from './Login';
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import Footer from './Footer';
import NewList from './NewList';
import StopLight from './StopLight';
import Cart from './Cart';
import History from './History';
import { AiFillAlert } from 'react-icons/ai'
import Sell from './Sell';




function exampleReducer(state, action) {
    switch (action.type) {
        case 'close':
            return { open: false }
        case 'open':
            return { open: true, size: action.size }
        default:
            throw new Error('Unsupported action...')
    }
}

function Home() {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        size: undefined,
    })
    const { open, size } = state
    const [tabvalue, setTabvalue] = React.useState(0);
    const [loading, setLoading] = React.useState(false)
    const handleChange = (event, newValue) => {
        setTabvalue(newValue);

    };
    const { path, url } = useRouteMatch()
    console.log(path, url)
    return (
        <>
            <div className="flex flex-col h-screen  container mx-auto">
                <Header dispatch={dispatch} url={url} />
                <Switch>
                    <Route exact path={path}>
                        <div className='flex justify-center items-center w-full my-5'>
                            <Tabs
                                value={tabvalue}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="NEWLIST" />
                                <Tab label="SPOTLIGHT" />
                            </Tabs>
                        </div>
                        <div className='flex flex-1  w-full'>
                            {tabvalue ? <StopLight dispatch={dispatch} /> : <NewList dispatch={dispatch} />}
                        </div>
                    </Route>
                    <Route exact path={`${path}cart`} component={Cart} />
                    <Route exact path={`${path}history`} component={History} />
                    <Route exact path={`${path}sell`} component={Sell} />
                    <Route >
                        <div className='flex w-full flex-col justify-center items-center my-3'>
                            <AiFillAlert style={{ width: 40, height: 40 }} />
                            <h3 className='text-center font-bold text-2xl my-3'> Page Not Found</h3>
                        </div>
                    </Route>
                </Switch>
                <Footer />
            </div>
            <Login open={open} dispatch={dispatch} size={size} />
        </>
    )
}

export default Home
