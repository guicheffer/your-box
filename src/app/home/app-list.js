/*-
 * ⭐️ AppList
 *
 * This is our list component
 *
-*/

import _ from 'lodash'
import React, { Component } from 'react'

import Card from './card.jsx'

class AppList extends Component {
  constructor (props) {
    super(props)

    this.state = _.assign(this.state, {
      boxes: this.props.boxes,
    })

    this.eventBus = this.props.eventBus
  }

  handleRemove (event) {
    event.preventDefault()

    const id = event.currentTarget.getAttribute('data-id')

    this.setState((state) => {
      const boxes = state.boxes.filter(box => box.id !== id)

      return { boxes }
    })
  }

  handleSort (event) {
    const sortBy = event.currentTarget.value

    if (sortBy) {
      this.setState((state) => {
        const boxes =
        _.orderBy(state.boxes, box => parseFloat(box.price), [sortBy])

        return { boxes }
      })
    }
  }

  render () {
    return (
      <div>
        <aside className='list__actions'>
          <select
            defaultValue={null}
            onChange={this.handleSort.bind(this)}
            className='list__sort js-sort'
          >
            <option value={null}> Sort by price </option>
            <option value='asc'> ASC </option>
            <option value='desc'> DESC </option>
          </select>
        </aside>

        <ul className={`${this.props.defaultBoxesClassName} js-boxes`}>
          {this.state.boxes.map((box, index) =>
            <Card
              key={index}
              eventBus={this.eventBus}
              handleRemove={this.handleRemove.bind(this)}
              id={box.id}
              img={box.img}
              subtitle={box.subtitle}
              name={box.box_name}
              url={box.url}
              price={box.price}
            />)}
        </ul>
      </div>
    )
  }
}

export default AppList
