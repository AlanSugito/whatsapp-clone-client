import { storage } from "../../utils";
import { FC } from "react";
import Profile from "../molecules/Profile";
import SearchBar from "../molecules/SearchBar";

interface ConversationLayoutProps {
  children: React.ReactNode;
}

const ConversationLayout: FC<ConversationLayoutProps> = ({ children }) => {
  const { image } = storage.getItem("user");

  return (
    <div className="flex flex-col">
      <Profile image={image} />
      <SearchBar />
      <div className="overflow-auto h-screen">{children}</div>
    </div>
  );
};

export default ConversationLayout;
