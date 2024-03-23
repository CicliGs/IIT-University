import React, { Component } from 'react'
import vk from "../../../src/images/icons/vk.svg"
import inst from "../../../src/images/icons/instagram.svg"
import twitter from "../../../src/images/icons/twitter.svg"
import git from "../../../src/images/icons/gitHub.svg"
import In from "../../../src/images/icons/linkedIn.svg"
import "../Footer/style.css"


export default class Footer extends Component {
  render() {
    return (
      <div>    <footer className="footer">
      <div className="container">
          <div className="footer__wrapper">
              <ul className="social">
                  <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                  <li className="social__item"><a href="#!"><img src={inst} alt="Link"/></a></li>
                  <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                  <li className="social__item"><a href="#!"><img src={git} alt="Link"/></a></li>
                  <li className="social__item"><a href="#!"><img src={In} alt="Link"/></a></li>
              </ul>
              <div className="copyright">
                  <p>© Брестский Государственный Технический Университет</p>
              </div>
          </div>
      </div>
  </footer></div>
    )
  }
}
