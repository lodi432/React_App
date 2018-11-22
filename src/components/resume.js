import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './edukacija';
import Experience from './iskustvo';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://thumb.ibb.co/eUrtXA/imageedit-3-5389357961.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Domagoj Glavačević</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
         {/*    Solid background and advanced knowledge in computer development software and web including Java, PHP, HTML/CSS, React, Hibernate, Maven.<br></br>
            Skilled in working with database management tools such as MySQL.<br></br>
            Committed to delivering company objectives to projects and results to customers and improving each version of software I engage with with strong will to learn new technologies.
               */}
               Innovative tech mind with 3 years of experience in computer programming. <br></br>
              Capable of working with a variety of technology and software solutions, and managing databases. <br></br>
              Valuable team member who has experience diagnosing problems and developing solutions. 
              </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Trogirska 1</p>
            <h5>Phone</h5>
            <p>(031) 561-751</p>
            <h5>Email</h5>
            <p>glavacevic.d@gmail.com</p>
            <h5>Web</h5>
            <p>https://lodi432.github.io/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <img
                src="http://ferdiders.az/image/default.png"
                alt="avatar"
                style={{height: '85px'}}
                 />
            <Education
              startYear={2017}
              endYear={2018}
              schoolName="Edunova"
              schoolDescription="School of Informatics and Management in Osijek"
              schoolCall="Java Programmer"
               />
               <Education
                 startYear={2017}
                 endYear={2018}
                 schoolName="Edunova"
                 schoolDescription="School of Informatics and Management in Osijek"
                 schoolCall="PHP Programmer"
                  />
                   <Education
              startYear={2017}
              endYear={2018}
              schoolName="Agricultural and Veterinary School Osijek"
              schoolDescription="School of Agricultural and Veterinary in Osijek"
              schoolCall="Fitofarmaceut"
               />
               <hr style={{borderTop: '3px solid #e22947'}} /> 
              {/* <i class="fa fa-wrench" aria-hidden="true"></i> */}
              <h2>Skills</h2>
              <img
                src="https://c-parity.com/wp-content/uploads/2017/05/icon-circle-tools-blue.png"
                alt="avatar"
                style={{height: '85px'}}
                 />
            <Experience
             /*  startYear={2016}
              endYear={2018} */
              jobName="- Java MVC"
              jobName2="- Working with Databases and Hibernate ORM "
              jobName3="- Java GUI and Frontend in Netbeans(Swing, Java Fx)"
              jobName4="- 2 years of experience in PHP and Web Development "
              // jobName5="- Music production and sound engineering "
              jobName6="- Interests in React, Android and Magento "
              jobDescription=""
              />
           {/*   { <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />}  */}
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Languages</h2>


              <Skills
                skill="Java"
                progress={90}
                />
                <Skills
                  skill="PHP"
                  progress={80}
                  />
                <Skills
                    skill="Css"
                    progress={80}
                    />
                <Skills
                      skill="React"
                      progress={40}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;