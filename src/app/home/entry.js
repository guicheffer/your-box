/*-
 * ⭐️ HomeEntry
 *
 * This is the home entry file for your box challenge.
 *
-*/

import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

import AbstractEntry from '../core/entry'

import AppList from './app-list'

// eslint-disable-next-line no-undef
const browser = window

class HomeEntry extends AbstractEntry {
  getBoxes () {
    const { endpoint } = this.initilizationData

    // Load api response data through given endpoint url
    return browser.fetch(endpoint)
      .then(response => response.json())
      .then(boxes => this.renderBoxes(boxes.items))
      // Sorry for not providing a error treatment screen
      // eslint-disable-next-line no-console
      .catch(error => console.error(`🚨 -> ${error}`))
  }

  renderBoxes (boxes) {
    ReactDOM.render(
      <AppList
        eventBus={this.eventBus}
        boxes={boxes}
        defaultBoxesClassName="list__boxes"
      />,
      this.ui.list,
    )

    _.delay(() => { this.ui.boxes.removeAttribute('data-loading') }, 1000)
  }

  start ({ eventBus, initilizationData }) {
    this.store = {}

    this.initilizationData = initilizationData
    this.eventBus = eventBus.initialize(this)

    this.ui = {
      list: browser.document.querySelector('#app-your-box-list'),
      boxes: browser.document.querySelector('.js-box-container'),
    }

    this.getBoxes()
  }
}

export default HomeEntry
