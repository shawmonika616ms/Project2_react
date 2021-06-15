import logo from './logo.svg';
import './App.css';
import Card from './Card';
import React from 'react';
import Sdata from './Sdata';



function App() {
  return (
                <React.Fragment>
                 
                 {Sdata.map((val,index)=>{

                   return(

                    <Card
                      imgs={val.simgs}
                      cat={val.scat}
                      title={val.stitle}
                      links={val.slinks}
                    />
                   );
                 })};
                   
                     
                </React.Fragment>
    
  );
}

export default App;
