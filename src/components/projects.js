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
                 <div>
                     <h1>
                         This is PHP
                     </h1>
                 </div>
            )
        }
        else if (this.state.activeTab ===2){
            return (
                 <div>
                     <h1>
                         This is React
                     </h1>
                 </div>
            )
        }
        else if (this.state.activeTab ===3){
            return (
                 <div>
                     <h1>
                         This is Mysql
                     </h1>
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
          <Tab>Mysql</Tab>
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