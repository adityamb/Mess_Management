import React from 'react'
import './menus.css'
import Navbar from '../layout/Navbar'
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';

  
  export default function SimpleSelect() {
   
  
   
  
   
  
    return (
      <div>
        <Navbar />
            <h3>Menu</h3>
      <table className="table container white black-text">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Day</th>
      <th scope="col">Breakfast</th>
      <th scope="col">Lunch</th>
      <th scope="col">Dinner</th>

    </tr>
  </thead>
  <tbody>
   {/* {messcutData} */}
   <tr>
        <td>Monday</td>
        <td>Iddly+sambar</td>
        <td>Meals+chicken</td>
        <td>Chappathi+egg</td>

         
       </tr>
       <tr>
        <td>Tuesday</td>
        <td>puttu+kadala</td>
        <td>Meals+fish fry</td>
        <td>poratta+beef</td>
        </tr>

       <tr>
        <td>wednesday</td>
        <td>uppumavu+banana</td>
        <td>Meals+fish cury</td>
        <td>tomato rice+boiled egg</td>
        </tr>
        <tr>
      
        <td>Thursday</td>
        <td>dosha+chutny</td>
        <td>Meals+fish fry</td>
        <td>poratta+beef</td>
         
       </tr>
       <tr>
        <td>Friday</td>
        <td>iddiyappam+egg curry</td>
        <td>Meals+chiken curry</td>
        <td>beef biriani</td>
        </tr>
        <tr>
        <td>saturday</td>
        <td>poori+vella kadala</td>
        <td>Meals+egg fry</td>
        <td>kuzimanthi</td>
        </tr>
        <tr>
        <td>sunday</td>
        <td>bread+jam</td>
        <td>Meals+rasam+cabbage</td>
        <td>Kanji+chammanthi</td>
        </tr>


  </tbody>
</table>
     
        </div>
  );
}