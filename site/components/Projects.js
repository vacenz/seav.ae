import React, { Component } from 'react'
import styles from './Projects.css'
import CSSModules from 'react-css-modules'

import Social from './Social'
import Card from './Card'

@CSSModules(styles, { allowMultiple: true })
export default class Projects extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName='Projects'>

        <div styleName='TitleContainer'>
          <h1 styleName='Title'>svsx.sx</h1>
        </div>

        <Social />

        <Card
          background='rgba(19, 73, 112, 0.95)'
          title='dekucomponents.com'
          image='http://i.imgur.com/2VgF4Ut.jpg'
          link='https://github.com/StevenIseki/dekucomponents.com' />

        <Card
          background='rgba(19, 73, 112, 0.95)'
          title='cssmodul.es'
          image='http://i.imgur.com/VIU31i9.jpg'
          link='https://github.com/StevenIseki/cssmodul.es' />

        <Card
          background='rgba(19, 73, 112, 0.95)'
          title='reactcomponents.xyz'
          image='http://i.imgur.com/x9MDULe.jpg'
          link='https://github.com/StevenIseki/reactcomponents.xyz' />

        <Card
          title='vace.nz'
          image='http://i.imgur.com/f4u22sg.png'
          link='http://vace.nz' />

        <Card
          title='pcmusi.cz'
          image='http://i.imgur.com/xUnPaBy.png'
          link='http://pcmusi.cz' />

        <Card
          title='snvx tumblr'
          image='http://i.imgur.com/rAzeFu9.png'
          link='http://steveniseki.tumblr.com/' />

      </div>
    )
  }
}
