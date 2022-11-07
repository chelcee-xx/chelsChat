import React, { useContext, useState } from "react";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);
  const [user, setUser] = useState(null);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists or not, if not create new one
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        // create a chat in chats collection
        // from my understanding, this code creates a collection named chats in our firestore db, then under add document i.e the next row it puts the combinedId then when you click on it it opens the message array we created int another row, along with any othe variable we sha add
        await setDoc(doc (db, "chats", combinedId), { 
          messages: [] 
        });

        // create user chats
      }
    
    // create user chats
    // this one goes to the already created userChats collection and updates the info there
    await updateDoc(doc(db, "userChats", currentUser.uid),{
      [combinedId+".userInfo"]: {
        uid:user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
      },
      [combinedId+".date"]: serverTimestamp()
    });
    await updateDoc(doc(db, "userChats", currentUser.uid),{
      [combinedId+".userInfo"]: {
        uid:user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
      },
      [combinedId+".date"]: serverTimestamp()
    });
  
  } catch(err) {}

  setUser(null)
  setUsername("")
};
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User Not Found</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" className="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
