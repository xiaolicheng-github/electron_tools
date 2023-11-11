import React from 'react';
import './App.scss';
import { routes } from './router';
import { useRoutes } from 'react-router-dom';

export default function App() {

  const ElementRouter = useRoutes(routes);

  return <div className="app-root">
    <div className='page-container'>
      {ElementRouter}
    </div>
  </div>
}