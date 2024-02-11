import css from "./Profile.module.css";

export const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className={css.survey}>
      <div className={css.icon}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.value}>
          <span className={css.label}>Followers</span>
          <span className={css.other}>{stats.followers}</span>
        </li>
        <li className={css.value}>
          <span className={css.label}>Views</span>
          <span className={css.other}>{stats.views}</span>
        </li>
        <li className={css.value}>
          <span className={css.label}>Likes</span>
          <span className={css.other}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
