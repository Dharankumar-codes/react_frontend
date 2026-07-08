import mypic from "../assets/mypic.jpeg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src={mypic} alt="profile" />
      <h2>Dharan Kumar</h2>
      <p>Frontend Developer</p>
    </div>
  );
};

export default ProfileCard;