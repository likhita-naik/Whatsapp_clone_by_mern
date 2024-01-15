import logo from './logo.svg';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AccountProvider } from './Context/AccountContext';
import Messenger from './Components/MessengerHome';

function App() {
  const clientId='112145308332-mo4ut064n762a532qi1otsjc1bc5bejv.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger></Messenger>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
