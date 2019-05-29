import  React from 'react';
import './App.css';

function timer(){
	
  return (
    <div className="App App-logo" style={{backgroundColor:'#cccffc',padding:'10px', height:'100%',width:'100%'}}>
      
	  
	  <div style={{backgroundColor:'blue', width:'100%', height:'88px',color:'white',fontSize:'20px'}}>
	  <p>&nbsp;</p>
	  <p>Employee Performance Reoprt</p>
	  </div>
	  
	<div style={{paddingTop:'10px'}}>
	<img className="imgrad" src={require("./me.jpg")} alt={{}} />
        <p>Welcome KO !!</p>
      </div>
	  
	  <table className="tabledesign">
	  <tr><th>Project name</th>
	  <th><code>Percentage of completion</code></th>
	  <th><code>Performance quality</code></th>
	  </tr>
	  
	  <tr className="oddrow">
	  <td>Webapplication</td>
	  <td>80%</td>
	  <td>Excelent</td>
	  </tr>
	 
	 
	 <tr>
	  <td>Android ROM</td>
	  <td>50%</td>
	  <td>Good</td>
	  </tr>
	 
	 <tr className="oddrow">
	  <td>Server Scripting</td>
	  <td>90%</td>
	  <td>Excelent</td>
	  </tr>
	 
	 <tr >
	  <td>ERP</td>
	  <td>50%</td>
	  <td>Good</td>
	  </tr>
	 
	 
	 
	 <tr className="oddrow">
	  <td>Mobile app</td>
	  <td>90%</td>
	  <td>Excelent</td>
	  </tr>
	 
	 
	 
	 <tr >
	  <td>Linux kernel</td>
	  <td>90%</td>
	  <td>Excelent</td>
	  </tr>
	 
	  </table>
	  
	</div>
	
	
  );
}





export default timer;
