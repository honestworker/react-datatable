import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense*/
// import PageLoader from './components/Common/PageLoader';

// import Base from './components/Layout/Base';
// import BasePage from './components/Layout/BasePage';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props}/>;

const CommonTable = lazy(() => import('./components/tbl'));
const XlsxTable = lazy(() => import('./components/tblxlsx'));
const FixedcolTable = lazy(() => import('./components/tblfixedcol'));

const Routes = ({ location }) => {
    return (
        <div>
            <Suspense fallback={false}>
                {location.pathname === '/' ? <Redirect from="/" to="/table1" /> : null}
                <Switch location={location}>
                    <Route path="/table1" component={waitFor(CommonTable)}/>
                    <Route path="/table2" component={waitFor(XlsxTable)}/>
                    <Route path="/table3" component={waitFor(FixedcolTable)}/>
                </Switch>
            </Suspense>
        </div>
    )
}

export default withRouter(Routes);