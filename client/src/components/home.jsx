import React  from 'react';
import Profiel from './Profiel.jsx';
import Feed from './Feed.jsx'
import Freind from './Freind.jsx'
 class Home extends React.Component {
  render() {
    return <div>
    <div className="bob"> 
<Profiel/>
<Feed/>
<Freind/>
       
    </div>
    </div>;
  }
}
export default Home;