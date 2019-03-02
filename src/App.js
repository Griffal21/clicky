import React, { Component } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

const friendArr = ["spaceholder", false, false, false, false, false, false, false, false, false, false, false, false];
var click = 0;

function check (data) {
  if (friendArr[data]) {
    alert("You Lose!");
    for (var i = 1; i<friendArr.length; i++) {
      friendArr[i] = false;
      click = 0;
    }
  }
  else {
    friendArr[data] = true;
    click ++
      if (click === 12) {
        alert("You Win!");
        for (var j = 1; j<friendArr.length; j++) {
          friendArr[j] = false;
          click = 0;
      }
    }
    //$(".score").html("Your Score: " + click);
  }
}

class App extends Component {
  // create state to hold onto friend list information
  state = {
    friendList: friends
  };

  // come up with methods to delete a friend and update the friendList
  removeFriend = friendId => {
    // use .filter() to get all friends from this.state.friendList back without the friend we clicked on
    const updatedFriendList = this.state.friendList

      // .filter(friend => friend.id !== friendId)
      
      .sort(() => 0.5 - Math.random());
      
      console.log("friendId:" + friendId);
      check(friendId);
      console.log(friendArr);
      console.log("click: " + click);

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
        <h2 className="score"></h2>
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
