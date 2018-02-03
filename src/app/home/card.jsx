/*-
 * ⭐️ Card Component
 *
 * This is responsable to shows up the correct information individually
 *
-*/

import React, { Component } from 'react'

class Card extends Component {
  render () {
    return (
      <li className={`list__box box--${this.props.id} js-box`}>
        <figure className='box__img'>
          <div className='box__img--itself' style={ { backgroundImage: `url(${this.props.img})` } }></div>
          </figure>
    		<div className='list__box--info'>
    			<a href='#' className='info__remove-item js-remove-item'
            data-id={this.props.id} onClick={this.props.handleRemove.bind(this)}> x </a>

    			<h2 className='info__title'> <a href={this.props.url}> {this.props.name} </a> </h2>
          <p className='info__subtitle'> {this.props.subtitle} </p>

    			<p className='info__price'> {this.props.price} </p>

    			<a href='#' className='info__go-to'> 🎁 &nbsp; <span>Box details</span> </a>
    		</div>
    	</li>
    )
  }
}

export default Card
