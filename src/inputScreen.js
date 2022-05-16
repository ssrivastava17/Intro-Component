import "./inputScreen.css";
import React from 'react';

const InputScreens = (props) => {
    //   const tipInfo = props.tipInfo;
//   const labelText = props.labelText;
//   const callBack = props.callBack;
const value = props.value;
const callBack = props.callBack;
const myDefault = props.default;

  return (
      
      <div className="inputScreens"> 
        <div className="myInput">
          <input  type="text" 
                    placeholder= {myDefault}
                    value = {value} // will change/re-render if bill changes
                    onChange = {(e) => callBack(e.target.value)}
          />
        </div>
      </div>  
    );
  }
  
  // function myFunction(labelText, tipInfo, e){
  //   if(labelText == "Bill"){
  //     tipInfo.setBill(e.target.value);
  //   }
  //   else{
  //     tipInfo.setPeople(e.target.value);
  //   }
  // }


  export default InputScreens; // name that it is exported as