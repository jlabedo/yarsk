import React from 'react'
import classnames from 'classnames'

import defaultStyles from './styles'

export default class SideNavBar extends React.Component {
  render () {
    let styles = Object.assign({}, defaultStyles, this.props.theme)
    let cNames = classnames(styles.nav, this.props.open ? styles.open : null)
    return (
      <div>
        <nav className={cNames}>
          <a href='' title=''>Accueil</a>
          <a href='' title=''>Page 1</a>
          <a href='' title=''>Page 2</a>
        </nav>
        <div className={styles.wrapper}></div>
      </div>
    )
  }
}

SideNavBar.propTypes = { theme: React.PropTypes.object, open: React.PropTypes.bool }
SideNavBar.defaultProps = { theme: defaultStyles, open: false }
