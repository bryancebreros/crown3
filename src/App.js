import {Route, Routes} from 'react-router-dom'
import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/navigation.component';
import SignIn from './components/routes/sign-in/sign-in.component'
import SignUp from './components/routes/sign-up/sign-up.component';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
