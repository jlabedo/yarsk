import React from 'react'

import TopNavBar from '../TopNavBar'
import SideNavBar from '../SideNavBar'

import styles from './styles.css'

export default class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = { navbar: true }
  }
  toggleNavBar () {
    this.setState({ navbar: !this.state.navbar })
  }
  render () {
    return (
      <div className={styles.body}>
        <SideNavBar theme={styles} open={this.state.navbar} />
        <div id={styles.mainWrapper}>
          <TopNavBar onBurgerClick={this.toggleNavBar.bind(this)} />
          <main>
            <h2>Main content</h2>
            <div className='flex-container'>
              <div className='flex-50'>
                <div className='red'><a href='#'>Coucou</a>
                </div>
              </div>
              <div className='flex-50'>
                <div className='input-group'>
                  <label>Input:</label>
                  <input type='text'/>
                </div>
                <button>Submit</button>
              </div>
            </div>
          </main>
        </div>
      </div>)
  }
}
