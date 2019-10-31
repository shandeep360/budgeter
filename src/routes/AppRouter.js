import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import BudgetDashboardPage from '../components/BudgetDashboardPageComponent';
import AddExpensePage from '../components/AddExpensePageComponent';
import EditExpensePage from '../components/EditExpensePageComponent';
import HelpPage from '../components/HelpPageComponent';
import NotFoundPage from '../components/NotFoundPageComponent';
import Header from '../components/HeaderComponent';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={BudgetDashboardPage} exact />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;