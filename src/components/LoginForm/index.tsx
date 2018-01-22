
import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
   
  this.state = {
  email:'',
  password:''
  };
  }


  validation() {
  let emailElement    = document.getElementById('email') as HTMLInputElement
  let passwordElement = document.getElementById('password') as HTMLInputElement

  let email = emailElement.value
  let password = passwordElement.value

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
     alert('email should not be empty');
    return false;
 }else if(password == ''){
    alert('Password should not be empty');
    return false;
 } else{
 <div>
   {(
          <Redirect to={'/thank-you'}/>
        )}
</div>     
 }
}
    render() {
        return (
      <div id="bodycontent">
         <img src="/" className="" data-jpibfi-post-excerpt="" data-jpibfi-post-url="" data-jpibfi-post-title="The Best Facebook Groups for Bloggers in 2018" data-jpibfi-src="/" data-lazy-loaded="true" data-jpibfi-indexer="0"/>
        <div className="content-block blog-post clearfix blog-post-2-column-layout">

        <article id="post-50542" className="post-50542 post type-post status-publish format-standard has-post-thumbnail hentry category-inspiration-2 category-places category-social-media">
        </article>
    </div>
      </div>
        );
    }
}