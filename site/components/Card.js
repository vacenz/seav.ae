import React, { Component } from 'react'
import styles from './Card.css'
import CSSModules from 'react-css-modules'

@CSSModules(styles, { allowMultiple: true })
export default class Card extends Component {

  static get defaultProps () {
    return {
      background: 'rgba(3, 204, 133, 0.95)'
    }
  }

  constructor(props) {
    super(props)
    this.state = { active: false }
  }

  handleMouseOver() {
    this.setState({ active: true })
  }

  handleMouseOut() {
    this.setState({ active: false })
  }

  render() {
    const { active } = this.state
    const { background, title, image, link } = this.props
    let backgroundStyle = {
      opacity: active ? '1' : '0',
      background: background
    }
    return (
      <div styleName='Card'
           onMouseOver={() => this.handleMouseOver()}
           onMouseOut={() => this.handleMouseOut()}>
        <a href={link}>
          <div styleName='Background' style={backgroundStyle}>
            <h3 styleName='Description'>{title}</h3>
        	</div>
          <img styleName='Image' src={image} alt={title} />
      	</a>
      </div>
    )
  }
}
