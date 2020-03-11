import React from 'react';
import Card from './components/Card'

export const App = () => {
  return <div>
    Welcome to Feeder client.
    <Card title="John updated his profile" 
      username="John Smith"
      user_icon="http://2.bp.blogspot.com/-8ms4E7aH4w8/UMztXOsniqI/AAAAAAAAIW0/qql0GcspDzs/s1600/2298.jpg" 
      date_time="17/05/19" 
      text="This is my new profile picture! Hope you like it :)" 
      image_link="http://2.bp.blogspot.com/-8ms4E7aH4w8/UMztXOsniqI/AAAAAAAAIW0/qql0GcspDzs/s1600/2298.jpg"
      media="twitter" 
    />
  </div>;
};
