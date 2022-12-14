import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
      <div className='header'>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <NavLink className="nav-link active navbar-brand" aria-current="page" to="/">Home</NavLink>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" to="/CreatePosts" >Create a new blog post</NavLink>
             </div>
          </div>
        </div>
      </nav>
      </div>
    )
}

export default Header
