import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from './redux/auth/operations';
import { useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import PublicRoute from './redux/routesConfig/PublicRoute';
import { selectIsRefresh } from './redux/selectors';
import Loader from './components/Loader/Loader';
import { Articles } from './pages/Articles/Articles.jsx'
import Register from './components/Register/Register.jsx';
import { NotFound } from './pages/NotFound/NotFound.jsx'
import Login from './components/Login/Login.jsx';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])

  const isRefresh = useSelector(selectIsRefresh)

  return isRefresh ? (<Loader />) : (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
