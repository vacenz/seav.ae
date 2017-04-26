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
      <div styleName='Wrapper'>
        <div styleName='TitleContainer'>
          <h1 styleName='Title'>steven iseki martin</h1>
        </div>
        <Social />

        <div styleName='Projects'>
          <Card
            background='rgba(19, 73, 112, 0.95)'
            title='dekucomponents.com'
            image='http://i.imgur.com/2VgF4Ut.jpg'
            link='http://deku.vace.nz/' />

          <Card
            background='rgba(19, 73, 112, 0.95)'
            title='cssmodul.es'
            image='http://i.imgur.com/KbxSEsl.png'
            link='http://cssmodules.vace.nz/' />

          <Card
            background='rgba(19, 73, 112, 0.95)'
            title='starjs'
            image='http://i.imgur.com/FlBHLqs.png'
            link='http://starjs.ooo/' />

          <Card
            title='vace.nz'
            image='http://i.imgur.com/f4u22sg.png'
            link='http://vace.nz' />

          <Card
            title='trac.kz'
            image='http://i.imgur.com/xUnPaBy.png'
            link='http://trac.kz' />

          <Card
            title='snvx tumblr'
            image='http://i.imgur.com/rAzeFu9.png'
            link='http://steveniseki.tumblr.com/' />
        </div>
      </div>
    )
  }
}
