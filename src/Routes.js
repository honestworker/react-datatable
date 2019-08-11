import React, { Suspense, lazy } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />;

const CommonTable = lazy(() => import("./components/tbl"));
const XlsxTable = lazy(() => import("./components/tblxlsx"));
const FixedcolTable = lazy(() => import("./components/tblfixedcol"));
const Frm = lazy(() => import("./components/form"));

const Routes = ({ location }) => {
  return (
    <div>
      <Suspense fallback={false}>
        {location.pathname === "/" ? <Redirect from="/" to="/table1" /> : null}
        <Switch location={location}>
          <Route path="/table1" component={waitFor(CommonTable)} />
          <Route path="/table2" component={waitFor(XlsxTable)} />
          <Route path="/table3" component={waitFor(FixedcolTable)} />
          <Route path="/form" component={waitFor(Frm)} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(Routes);
