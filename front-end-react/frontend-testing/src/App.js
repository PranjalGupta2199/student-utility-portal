import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NotFound from "./Components/NotFound";
import ForgotPassword from "./Components/ForgotPassword";
import Profile from "./Components/Profile";
import Test from "./Components/Test";
import PostNotice from "./Components/PostNotice";
import ContactUs from "./Components/ContactUs";
import Homepage from "./Components/Homepage";
import AdminLogin from "./Components/AdminLogin";
import AdminHome from "./Components/AdminHome";
import UserProfileOfficial from "./Components/UserProfileOfficial";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/admin/login" component={AdminLogin} />
					<Route exact path="/admin/home" component={AdminHome} />
					<Route path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route path="/forgotpassword" component={ForgotPassword} />
					<Route
						path="/profile/:type/:username"
						component={UserProfileOfficial}
					/>
					<Route path="/test" component={Test} />
					<Route path="/notice" component={Homepage} />
					<Route path="/contactus" component={ContactUs} />
					<Route
						path="/:postnotice/:username"
						component={PostNotice}
					/>
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}
export default App;
