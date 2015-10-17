import React from 'react'
import styles from './styles'
import classnames from 'classnames'

export default class InputText extends React.Component {
  constructor (props) {
    super(props)
    this.state = { active: false, value: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  setActive (so) {
    this.setState({ active: so })
  }
  handleChange (e) {
    this.setState({ value: e.target.value })
  }
  render () {
    var transform = this.state.value.length > 0 ? true : this.state.active

    return (
    <div className={classnames(styles.input, transform ? styles.active : null)}>
      <label>{this.props.label}</label>
      <input type='text' onFocus={() => this.setActive(true)} onBlur={() => this.setActive(false)} onChange={this.handleChange} />
    </div>
    )
  }
}

InputText.propTypes = {
  label: React.PropTypes.string
}
