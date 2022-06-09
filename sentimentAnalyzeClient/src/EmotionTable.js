import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              /*Write code to use the .map method that you worked on in the 
              Hands-on React lab to extract the emotions. If you are stuck,
              please click the instructions to see how to implement a map*/
              Object.entries(this.props.emotions).map(function(mapentry) {
                return (
                    <tr>
                    <td>{mapentry[0]}</td>
                    <td>{mapentry[1]}</td>
                    </tr>
                )
                })
<<<<<<< HEAD
=======
            
>>>>>>> adb9c51c1e2d53c9b8ee59f8f20491d6e55b98a3
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;