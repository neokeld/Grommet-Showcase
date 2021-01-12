//As of Enzyme 3, you will need to install Enzyme along with an Adapter corresponding to the version of React you are using.
//The adapter will also need to be configured in your global setup file (here).
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
