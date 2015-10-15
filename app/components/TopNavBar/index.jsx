import React from 'react'

import styles from './styles'
import fa from 'font-awesome/css/font-awesome'

export default class TopNavBar extends React.Component {
  render () {
    return (
      <div id={styles.topNav}>
          <span id={styles.burger} className={fa.fa + ' ' + fa['fa-bars']} onClick={this.props.onBurgerClick}></span>
          <h2>Page1</h2>
      </div>)
  }
}

TopNavBar.propTypes = { onBurgerClick: React.PropTypes.func }
