import PropTypes from 'prop-types';

import { List } from './FriendList.styled';
import { FriendListItem } from 'components/FriendsListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
