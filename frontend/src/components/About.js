import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

const About = () => {
  return (
    <div className="App">
      <div className="gray3">
        <div>
          this page will 
          1. describe what TARO is, 
          2. explain the proposal system
          3. walk users through the process of getting metamask,connecting to metamask and getting validated the link to install metamask
          https://metamask.io/download.html
        </div>
        <div>
          The last step for the user to begin earning TARO is to validate their account.  This is done by taking a quiz about Queretaro.  This helps to keep the TARO tokens among people who care about their city.
        </div>
      </div>
      <Button className="Quiz" href="/quiz" >Take the Queretaro quiz</Button>
    </div>
  );
};

export default About;
