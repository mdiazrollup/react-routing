import React,{ Component } from "react";
import Courses from '../Courses/Courses';
import Users from '../Users/Users';
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import ErrorPage from '../../components/ErrorPage/ErrorPage';

class Content extends Component {
	render() {
		return(
			<div>
				<nav>
				<NavLink to="/courses"
					exact
					activeStyle={{
						textTransform: 'uppercase'
					}}>Courses</NavLink>
				&nbsp;&nbsp;
				<NavLink to="/users"
					exact
					activeStyle={{
						textTransform: 'uppercase'
					}}>Users</NavLink>
				</nav>
				<Switch>
					<Route path="/courses" component={Courses}></Route>
					<Route path="/users" exact component={Users}></Route>
					<Redirect from="/all-courses" to="/courses"></Redirect>
					<Route component={ErrorPage}></Route>
				</Switch>
			</div>
		);
	}
}

export default Content;