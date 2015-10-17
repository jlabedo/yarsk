import React from 'react'

import TopNavBar from '../TopNavBar'
import SideNavBar from '../SideNavBar'
import InputText from '../Forms/InputText'

import styles from './styles.css'
import grid from 'app/css/grid'

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
        <SideNavBar open={this.state.navbar} onWrapperClick={this.toggleNavBar.bind(this)} />
        <div id={styles.mainWrapper}>
          <TopNavBar onBurgerClick={this.toggleNavBar.bind(this)} />
          <main>
            <h2>Main content</h2>
            <div className={grid.flexContainer}>
              <div className={grid.flex50}>
                <div className='red'><a href='#'>Coucou</a>
                </div>
              </div>
              <div className={grid.flex50}>
                <InputText label='Input' />
                <button>Submit</button>
              </div>
            </div>
          </main>
        </div>
      </div>)
  }
}
