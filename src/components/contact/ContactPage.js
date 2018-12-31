import React from 'react';
import {Media, Progress, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import * as emailjs from 'emailjs-com';


class SkillsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          result:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) { 
          this.setState({
            result: ('Thank you ' + this.state.name + ' I will get back to you soon')
          });

          event.preventDefault();
          this.setState({
              name: '',
              email: '',
              message: ''
            });
        }      
      

   
      

render(){
return(



<div className="container">

<div className="jumbotron">
  <h1 className="display-4">Contact Us</h1>
  <p className="lead">This is a simple React Application..</p>
  <hr className="my-4"></hr>

  <Form id="contact-form" onSubmit={this.handleSubmit}>
<FormGroup>
<Label id="lable" for="name" > Name : </Label>
<Input id="input" type="text" placeholder="Name" name="name" required value={this.state.name}  onChange={this.handleChange}/>
</FormGroup>


 <FormGroup>
<Label id="lable" for="email"> Email : </Label>
<Input id="input" type="email" required placeholder="example@example.com" name="email" value={this.state.email}   onChange={this.handleChange}  />
 </FormGroup>

 <FormGroup>
 <Label id="lable" for="message"> Message : </Label>
 <Input id="textarea" placeholder="Enter your message ..." type="textarea" name="message" value={this.state.message} onChange={this.handleChange}/>
 </FormGroup>

<button id="btn-more" className="btn btn-secondary"  type="submit"value="Submit" email="mailto:riyadh.alamro@gmail.com"> Submit </button>
</Form>
<div id="Riyadh" className="result"> {this.state.result} </div>
<br></br>



</div>


</div>


     );  
    }
    
}
export default SkillsPage;