import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjVvHbTNDG8AYtUjzCxbzG-NLeJyWieRk",
  authDomain: "fir-project-practice-1acbb.firebaseapp.com",
  projectId: "fir-project-practice-1acbb",
  storageBucket: "fir-project-practice-1acbb.appspot.com",
  messagingSenderId: "908976883535",
  appId: "1:908976883535:web:0d53420fc9e1638ee4273a",
  measurementId: "G-RGHSG2K8KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This is firebase project to practice setting up authentications
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
