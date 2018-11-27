import React, {Component} from 'react';
import {Tabs,Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(

                <div className ="projekti-grid">
                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://camo.githubusercontent.com/870056360cf28500e06707b99b23d7c0d3873bf5/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f35384658525a525267355645626372456c572f67697068792e676966) center / cover' }}>Java Project</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://raw.githubusercontent.com/lodi432/Zavrsni_Rad_Java/master/S5.jpg) center / cover' }}>Java Weather API</CardTitle>
                        <CardText>
                           Java weather application that displays real-time Weather data in your city.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>

                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://raw.githubusercontent.com/lodi432/Zavrsni_Rad_Java/master/S4Tb.jpg) center / cover' }}>Employee CRUD with Java</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>

                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.edunova.hr/wp-content/uploads/2015/09/JAVA-LOGO-e1442244041387.png) center / cover' }}>Java Project</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>
</div>
            )
        } else if (this.state.activeTab ===1){
            return (
                
                <div className ="projekti-grid">
                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://raw.githubusercontent.com/lodi432/E-Shop/master/INSALEshop.png) center / cover' }}>PHP Project</CardTitle>
                        <CardText>
                        An PHP app that allows you to:

Process orders from customers and accept test Stripe payments.
Manage inventory in your Admin dashboard.

               </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://raw.githubusercontent.com/lodi432/INsale-shop-Magento2/master/MagentoINSALE.png) center / cover' }}>Insale Shop Magento 2</CardTitle>
                        <CardText>
                         Insale shop set up for development on Magento/2.2 (Community) open source Ecommerce solution.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>

                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fzag3-1.fna.fbcdn.net/v/t1.0-9/35517450_474827362937194_3441262663823261696_o.jpg?_nc_cat=109&_nc_ht=scontent.fzag3-1.fna&oh=a3bba2f7de7f4487d3d42b6cd9bfc29f&oe=5C660DE7) center / cover' }}>PHP Project - Techno</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>

                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover' }}>PHP Project</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>
                 </div>
            )
        }
        else if (this.state.activeTab ===2){
            return (
                 
                <div className ="projekti-grid">
                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.ibb.co/7b4jd23/ractlogo.png) center / cover' }}>React Portfolio</CardTitle>
                        <CardText>
                        Resume/Portfolio development with React, if you are reading this your are using it right now.
               </CardText>
                        <CardActions border>
                            <Button target="_blank" href="https://github.com/lodi432/React_App" colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button target="_blank" href="https://lodi432.github.io/React_App" colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.ibb.co/7b4jd23/ractlogo.png) center / cover' }}>3 Step Form</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>

                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.ibb.co/7b4jd23/ractlogo.png) center / cover' }}>React Project</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>

                    <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.ibb.co/7b4jd23/ractlogo.png) center / cover' }}>React Project</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>

                    </Card>
                 </div>
            )
        }
        else if (this.state.activeTab ===3){
            return (
                <div className ="projekti-grid">
                <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4t89v7llja7m-dKFCefPXlAUEkw4CTtkV99nOw8aJ9OHM-y2u) center / cover' }}>Java vs PHP</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4t89v7llja7m-dKFCefPXlAUEkw4CTtkV99nOw8aJ9OHM-y2u) center / cover' }}>Spring, React & Redux</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>

                </Card>

                <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4t89v7llja7m-dKFCefPXlAUEkw4CTtkV99nOw8aJ9OHM-y2u) center / cover' }}>Full Stack Project</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>

                </Card>

                <Card shaddow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4t89v7llja7m-dKFCefPXlAUEkw4CTtkV99nOw8aJ9OHM-y2u) center / cover' }}>Full Stack Project</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>

                </Card>
             </div>
            )
        }
    }

  
    render(){
        return  (
          <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState ({ activeTab: tabId })} ripple>
          <Tab>Java</Tab>
          <Tab>Php</Tab>
          <Tab>React</Tab>
          <Tab>Full Stack</Tab>
          </Tabs>

       
          <Grid>
          <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
          </Cell>
          </Grid>
  
          </div>
        )
    }
}
export default Projects;