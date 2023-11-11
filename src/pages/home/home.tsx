import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routerParams } from '../../utils/router';

export default function Home() {

  const navigate = useNavigate();

  const [routeList] = useState([
    { path: 'test1', name: 'test1' },
    { path: 'test2', name: 'test2' }
  ])

  function handleClick(item: { path: any; name?: string; }) {
    navigate(...routerParams({
      path: item.path,
      query: {
        name: 'xxx'
      }
    }))
  }

  return <div>{
    routeList.map(item => <div onClick={() => handleClick(item)}>
      {item.name}
    </div>)
  }</div>
}