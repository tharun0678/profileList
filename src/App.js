import logo from './logo.svg';
import './App.css';
import mypic from '../src/images/mypic.jpg';
import arunpic from '../src/images/Arun.jpg';
import robot from '../src/images/robot.jpg';
import ironman from '../src/images/ironman.gif';
import panther from '../src/images/panther.gif';
import UserProfile from './components/UserProfile';

const userDetailsList = [{
  id:1,
  name:"Tharun Gopidinne",
  imgUrl:mypic,
  role:"Software Developer"

},
{
id:2,
  name:`Arun Gopidinne     .. `,
  imgUrl:arunpic,
  role:"HR Recruiter"

},
{
  id:3,
  name:"Sofia D Robot .......",
  imgUrl:robot,
  role:"Anything"

},
{
id:4,
  name:"Ironman D savier",
  imgUrl:ironman,
  role:"Human savier"

},
{
  id:5,
  name:"Panther D fighter",
  imgUrl:panther,
  role:"Forest savier"

},


]

const App = () => (
<div> 
  <h1 className='heading'>
    Profile Lists
  </h1>
  <ul>
    {userDetailsList.map((eachItem) => (
      <UserProfile userDetails={eachItem} key={eachItem.id}/>
    ))}
  
 

  </ul>


</div>

)

export default App;
