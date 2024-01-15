import "./profile.css";

function Profile({ name, photo, bio }) {
  return (
    <div className="profile">
      <div>{name}</div>
      <img src={photo} alt="User" className="profile-photo" />
      <div>{bio}</div>
    </div>
  );
}

export default Profile;
