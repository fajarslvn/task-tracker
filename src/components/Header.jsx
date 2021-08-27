import React from 'react'

const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

export default Header
