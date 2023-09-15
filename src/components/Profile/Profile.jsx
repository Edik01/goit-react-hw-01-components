import { ProfileContainer, Avatar,Username,Tag, Location, Stats,StatsItem } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <div class="description">
        <Avatar src={avatar} alt="User avatar" width="100" height="100" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Stats>
        <StatsItem>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};
