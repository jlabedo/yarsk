import React from 'react'
import styles from './styles'

export default class Statistic extends React.Component {
  render () {
    var variation = this.props.variation ? (
      <div className={styles.variation}>
        {this.props.variation}
      </div>) : undefined

    return (
      <div className={styles.variationContainer}>
        <div className={styles.container}>
          <span className={styles.value}>{this.props.value}</span>
          <span className={styles.label}>{this.props.label}</span>
        </div>
        {variation}
      </div>)
  }
}

Statistic.propTypes = {
  value: React.PropTypes.string,
  label: React.PropTypes.string,
  variation: React.PropTypes.string
}
