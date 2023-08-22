import { useEffect } from "react";
import HomeLayout from "../layouts/HomeLayout";
import { socket } from "../../configs";
import { ConversationPanel, Conversations } from "../organisms";
import { ConversationProvider } from "../../providers";
import { initialState } from "../../context";
import { storage } from "../../utils";

const Home = () => {
  const { id } = storage.getItem("user");
  useEffect(() => {
    socket.connect();
    socket.emit("online", id);
  }, []);

  return (
    <>
      <ConversationProvider id={initialState.id} members={initialState.members}>
        <HomeLayout>
          <div>
            <Conversations />
          </div>
          <ConversationPanel />
        </HomeLayout>
      </ConversationProvider>
    </>
  );
};

export default Home;
