import React from 'react'
import classnames from 'classnames'

import defaultStyles from './styles'

export default class SideNavBar extends React.Component {
  render () {
    let cNames = classnames(defaultStyles.nav, this.props.open && defaultStyles.open)
    return (
      <div className={cNames}>
        <nav>
          <a href='' title=''>Accueil</a>
          <a href='' title=''>Page 1</a>
          <a href='' title=''>Page 2</a>
        </nav>
        <div className={defaultStyles.wrapper}></div>
      </div>
    )
  }
}

SideNavBar.propTypes = { theme: React.PropTypes.object, open: React.PropTypes.bool }
SideNavBar.defaultProps = { theme: defaultStyles, open: false }
