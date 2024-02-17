import React, { useState } from 'react'
import Logo from '../../assets/imgs/logo.png'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'

const MainDash = () => {

  const [selected, setSelected] = useState(0);

  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards />
        <Table />
    </div>
  )
}

export default MainDash
