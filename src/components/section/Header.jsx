import React from 'react'
import {headerMenus,searchKeyword,snsLink} from '../../data/header'
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <header id="header" role="banner">
      <h1 className="header__logo">
        <a href="/">
          <em area-hidden='true'></em>
          <span>youtube</span>
        </a>
      </h1>
      <div className="header__menu">
        <ul className='menu'>
          {headerMenus.map((menu, key) => (
              <li key={key}>
                  <Link to={menu.src}>
                      {menu.icon}{menu.title}
                  </Link>
              </li>
          ))}
        </ul>
        <ul className='keyword'>
          <li><a href='/search/keyword'>키워드키워드</a></li>
          <li><a href='/search/keyword'>키키워드</a></li>
          <li><a href='/search/keyword'>키워드드드</a></li>
          <li><a href='/search/keyword'>키워워드</a></li>
          <li><a href='/search/keyword'>워드</a></li>
          <li><a href='/search/keyword'>워드</a></li>
          <li><a href='/search/keyword'>워드</a></li>
        </ul>
      </div>
      <div className="header__sns">
        <ul>
        </ul>
      </div>
    </header>
  )
}

export default header