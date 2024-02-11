import { FriendList } from "./components/FriendList/FriendList";
import { Profile } from "./components/Profile/Profile";

import userData from "./Json/userData.json";
import friends from "./Json/friends.json";

import transactions from "./Json/transactions.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
