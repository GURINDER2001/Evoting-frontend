import './App.css';
import { Route, Switch } from 'react-router';
// import Dashboard from './components/dashboard/Dashboard';
// import Navbar from './components/navbar/Navbar';
// import ManageUsers from './components/manageUsers/ManageUsers';
// import Contents from './components/content/Contents';
// import Category from './components/content/categoryStats/Category';
// import Unit from './components/content/unitStats/Unit';
// import Login from './components/auth/login/Login';
import AuthGuard from './AuthGuard';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Listing from './pages/Listing';
import Poll from './pages/Poll';
// import { connect } from 'react-redux';
// import Chapter from './components/content/chapterStats/Chapter';
// import Level from './components/content/levelStats/Level';
// import BlogsDashboard from './components/blogs/BlogsDashboard';
// import AddBlog from './components/blogs/AddBlog';
// import Invitation from './components/Invitation/Invitation';
// import Feedback from './components/feedback/feedback';
// import Advertisement from './components/advertisement/advertisement';

function App(props) {
  return (
    <div >
      <Navbar />

      <Switch>
        {/* <Route path="/video" component={VideoCustom} />
        <Route path="/login" component={Login} /> */}
           {/* <Route path="/content" component={Contents} /> */}
           {/* <Route
    path="/content"
    render={({ match: { url } }) => (
      <>
        <AuthGuard  path={`${url}/`} component={Contents} exact />
        <AuthGuard  path={`${url}/category/:id`} component={Level} />
        <AuthGuard path={`${url}/level/:id`} component={Category} />
        <AuthGuard  path={`${url}/unit/:id`} component={Unit} />
        <AuthGuard  path={`${url}/chapter/:id`} component={Chapter} />
      </>
    )}
  />

<Route
    path="/blog"
    render={({ match: { url } }) => (
      <>
        <AuthGuard  path={`${url}/`} component={BlogsDashboard} exact />
        <AuthGuard  path={`${url}/new`} component={AddBlog} />
        <AuthGuard path={`${url}/level/:id`} component={Category} />
        <AuthGuard  path={`${url}/unit/:id`} component={Unit} />
        <AuthGuard  path={`${url}/chapter/:id`} component={Chapter} />
      </>
    )} */}

    {/* /> */}
      {/* <AuthGuard  path="/dashboard" component={Dashboard} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        {/* <AuthGuard  path="/manageUsers" component={ManageUsers} />
        <AuthGuard  path="/invitations" component={Invitation} />
        <AuthGuard  path="/feedback" component={Feedback} />
        <AuthGuard  path="/advertisement" component={Advertisement} /> */}
        {/* <Route path="/login" component={Login} /> */}
        <Route  path="/poll/:id" component={Poll} />
        <Route  path="/auth" component={Login} />
        <Route  path="/list" component={Listing} />
        <Route path="/" component={Home} />
        
        {/* <AuthGuard  path="/" component={Dashboard} /> */}

      </Switch>
    </div>
  );
}
// function mapStateToProps(state) {
//   return { activeUser: state.activeUser.data };
// }
export default App;
