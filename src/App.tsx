import { useEffect } from 'react';
import './App.css';
import Users from './pages/Users';
//import { apiHelper } from './utils/Helper';

function App() {
  // const sample =  Helper('gadfacdadda','get');
  // console.log(sample);

  // const apiCall: any = apiHelper;
  // console.log('apiCall', apiCall);


  return (
    <div className="App">
      <Users />
      <h2>users-lists</h2>
    </div>
  );
}

export default App;
