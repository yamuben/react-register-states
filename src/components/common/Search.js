import React from 'react'
import '../../styles/style.scss'


function App (){

    return(
        <div className="search-input">

            <input
            type="text"
            placeholder="Search Student.."
           
            />

            <input type="button" value="Search" />

        </div>
    );
}
export default App;