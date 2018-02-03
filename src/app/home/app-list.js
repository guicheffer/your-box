/*-
 * ⭐️ AppList
 *
 * This is our list component
 *
-*/

import React from 'react'

import Card from './card.jsx'

class AppList extends React.Component {
  constructor (props) {
    super(props)
    this.eventBus = this.props.eventBus
  }

  render () {
    return (
      <ul className={`${this.props.defaultBoxesClassName} js-boxes`}>
        {this.props.boxes.map((box, index) =>
          <Card
            key={index}
            eventBus={this.eventBus}
            id={box.id}
            img={box.img}
            subtitle={box.subtitle}
            name={box.box_name}
            url={box.url}
            price={box.price}
          />)}
      </ul>
    )
  }
}

export default AppList
