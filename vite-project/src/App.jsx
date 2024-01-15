import "./App.css";
import Profile from "./components/Profile";
import { photo } from "./components/Photo";
import { name } from "./components/Name";
import { bio } from "./components/Bio";

function App() {
  return (
    <div className="app">
      <h2>Profiles :</h2>
      <div className="profiles-box">
        {name.map((user) => (
          <Profile
            key={user.id}
            name={user.label}
            photo={photo.find((p) => p.id === user.id).image}
            bio={bio.find((b) => b.id === user.id).label}
          />
        ))}
      </div>
    </div>
    
  );
}

export default App;
