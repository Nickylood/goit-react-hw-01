import clsx from "clsx";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ friend: { id, avatar, name, isOnline } }) => {
  return (
    <div className={css.border} id={id}>
      <img className={css.avatar} src={avatar} alt="avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.change, isOnline ? css.isOnline : css.isOffline)}>
        {isOnline}
      </p>
    </div>
  );
};
