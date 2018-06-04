import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard/FriendCard";

import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {friends.map(friend =>
      <FriendCard name ={friend.name} image = {friend.image} job = {friend.job} location ={friend.location}></FriendCard>
)}
   {/* <FriendCard name = {friends[0].name} img = {friends[0].img} job = {friends[0].job} location ={friends[0].location}/>
    <FriendCard />
    <FriendCard /> */}

   
    
  </Wrapper>
);

export default App;
