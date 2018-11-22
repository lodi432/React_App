import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Landing extends Component {
    render(){
        return  (
            <div style = {{width: '100%', margin : 'auto'}}>
<Grid className = "landing-grid">
 <Cell col={12}>
 <img
 src="https://avatars1.githubusercontent.com/u/20270701?s=460&v=4"

 alt="avatare"
 className="avatare-img"
 />

 <div className="banner-text">
 <h1>Full Stack App Developer</h1>
 <hr/>
 {/* <p>HTML/CSS | Bootstrap | JavaScript | React Native | NodeJS | Express | MongoDB </p> */}
 <p>Java | PHP | Hibernate | HTML/CSS | Bootstrap | React | Mysql </p>
 <div className="social-links">

 <a href="http://google.com" rel="noopener noreferrer" taget="_blank">
 <i className="fa fa-linkedin-square" aria-hidden="true"/>
 </a>

  <a href="https://github.com/lodi432" rel="noopener noreferrer" taget="_blank">
 <i className="fa fa-github-square" aria-hidden="true"/>
 </a>

 <a href="http://google.com" rel="noopener noreferrer" taget="_blank">
 <i className="fa fa-free-code-camp" aria-hidden="true"/>
 </a>

  <a href="http://google.com" rel="noopener noreferrer" taget="_blank">
 <i className="fa fa-youtube-square" aria-hidden="true"/>
 </a>


 </div>
 </div>
 </Cell>

</Grid>
            </div>
        )
    }
}
export default Landing;