import React, { Component } from 'react'
import styles from './Social.css'
import CSSModules from 'react-css-modules'
import Codepen from './Icons/Codepen'
import Github from './Icons/Github'
import JsFiddle from './Icons/JsFiddle'
import StackOverflow from './Icons/StackOverflow'
import Twitter from './Icons/Twitter'

@CSSModules(styles, { allowMultiple: true })
export default class Projects extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName='Social'>
        <div styleName='SocialIcons'>
          <a href='http://codepen.io/StevenIseki' styleName='SocialIcon'><Codepen /></a>
          <a href='https://github.com/StevenIseki' styleName='SocialIcon'><Github /></a>
          <a href='http://jsfiddle.net/user/StevenIseki' styleName='SocialIcon'><JsFiddle /></a>
          <a href='http://stackoverflow.com/users/3709775/steven-iseki' styleName='SocialIcon'><StackOverflow /></a>
          <a href='https://twitter.com/StevenIseki' styleName='SocialIcon'><Twitter /></a>
        </div>

        <div style={{display: 'none'}}>
          <div>Icons made by <a href="http://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          <div>Icons made by <a href="http://www.flaticon.com/authors/elegant-themes" title="Elegant Themes">Elegant Themes</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </div>
      </div>
    )
  }
}
