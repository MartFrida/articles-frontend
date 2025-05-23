import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from './redux/auth/operations';
import { useEffect } from 'react';

import Header from './components/Header/Header';
import Login from './components/Login/Login.jsx';
import Loader from './components/Loader/Loader';
import Register from './components/Register/Register.jsx';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { Articles } from './pages/Articles/Articles.jsx'
import HomePage from './pages/HomePage/HomePage';
import { NewArticle } from './pages/NewArticle/NewArticle.jsx'
import { EditArticle } from './pages/EditArticle/EditArticle.jsx'

import PublicRoute from './redux/routesConfig/PublicRoute.jsx';
import PrivateRoute from './redux/routesConfig/PrivateRoute.jsx';
import { selectIsRefresh } from './redux/selectors';
import SearchComponent from './components/SearchComponent/SearchComponent.jsx';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])

  const isRefresh = useSelector(selectIsRefresh)

  return isRefresh ? (<Loader />) : (
    <div className="App ">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/search' element={<SearchComponent />} />
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
        <Route
          path='/articles/new'
          element={
            <PrivateRoute>
              <NewArticle />
            </PrivateRoute>
          }
        />
        <Route
          path='/articles/edit'
          element={
            <PrivateRoute>
              <EditArticle />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
