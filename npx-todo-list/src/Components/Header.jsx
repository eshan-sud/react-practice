import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  return (
    <>
        <nav className="navbar bg-black">
            <div className="container-fluid">
                <a className="text-white" href="">{props.title}</a>
                {
                    props.searchBar=="true" ?
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : ""
                }
            </div>
        </nav>
    </>
  )
}

Header.propTypes = {
    title : PropTypes.string,
    searchBar : PropTypes.bool.isRequired
}