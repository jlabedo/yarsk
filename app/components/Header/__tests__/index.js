import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ReactDOM from 'react-dom'
import Header from '../index.jsx'
import styles from '../style.sass'

describe('Header', function () {
  it('displays the title', function () {
    const header = TestUtils.renderIntoDocument(
      <Header />
    )

    const title = TestUtils.findRenderedDOMComponentWithClass(header, styles.title)
    const dom = ReactDOM.findDOMNode(title)

    expect(dom.textContent).to.equal('YARSK')
  })
})
