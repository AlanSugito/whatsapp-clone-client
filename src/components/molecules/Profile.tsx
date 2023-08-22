import { FC } from "react";

interface ProfileProps {
  image: string;
  name?: string;
}

const Profile: FC<ProfileProps> = ({ image, name }) => {
  return (
    <div className="bg-slate-100 py-2 px-4 border-r-2 flex items-center gap-4">
      <img
        src={`http://localhost:2000/profile_pictures/${image}`}
        alt="profile_picture"
        className="w-[50px] h-[50px] rounded-full"
      />
      <h2>{name}</h2>
    </div>
  );
};

export default Profile;
