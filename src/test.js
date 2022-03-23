import React from 'react';

class Test extends React.Component{
  render(){
    console.log("ok");
    return(

      
      <div>
        <button onClick= {this.buttonHandler}>Ok</button>
      </div>

    )
  }
}
