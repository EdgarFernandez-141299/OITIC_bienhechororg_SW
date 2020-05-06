import React from 'react';


class Header extends React.Component{

  state = {
    navCollapsed: true // colapsada = pantalla de PC
  }

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }

    render(){
      const {navCollapsed} = this.state
        return(

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/#">Bienhechor</a>
            <button className="navbar-toggler" onClick={this._onToggleNav} type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
          <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#">Modules <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Summary</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Endnotes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Contributors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Glossary</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
               <input className="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Buscar..."/>
               <button className="btn btn-primary my-2 my-sm-0">Download the toolkit</button>
            </form>
          </div>
        </nav>
      
        )
        
    }




}




export default Header;