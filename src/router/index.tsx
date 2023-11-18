import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../pages/home/home';
import Monaco from '../pages/monaco/monaco';
import Test1 from '../pages/test1/test1';
import Test2 from '../pages/test2/test2';

export const routes = [
  { path: '/', element: <Navigate to='home'></Navigate> },
  { path: '/home', element: <Home></Home> },
  { path: '/monaco', element: <Monaco></Monaco> },
  { path: '/test1', element: <Test1></Test1> },
  { path: '/test2', element: <Test2></Test2> }
];