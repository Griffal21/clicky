import React, { Component } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

class App extends Component {
  // create state to hold onto friend list information
  state = {
    friendList: friends
  };

  // come up with methods to delete a friend and update the friendList
  removeFriend = friendId => {
    // use .filter() to get all friends from this.state.friendList back without the friend we clicked on
    const updatedFriendList = this.state.friendList
      .filter(friend => friend.id !== friendId)
      .sort(() => 0.5 - Math.random());

    // use this.setState() to update our friendList and trigger a rerender of the friendcards
    this.setState({
      friendList: updatedFriendList
    });
  };

  // render our UI and use .map to print FriendCards for each friend in the friendList
  render() {
    // destructure friendlist from state
    const { friendList } = this.state;

    console.log(friendList);

    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {/* Use .map to render friendlist  */}
        {friendList.map(friend => {
          return (
            <FriendCard
              key={friend.id}
              friendId={friend.id}
              name={friend.name}
              image={friend.image}
              location={friend.location}
              occupation={friend.occupation}
              removeFriend={this.removeFriend}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default App;
