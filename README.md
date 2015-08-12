# ccc-twitterpi
Angular webapp that polls #cccamp15 tweets and displays them on a raspi with a 320x400.

# Backend
You need a backend server that provides you with updates from twitter. Luckily I created one that runs with python. You can find it at https://github.com/Guysbert/ccc-twitterpi-backend
It runs on localhost:5000. That's why that address is used in the controller. If you want to provide your own backend you have to use the following json format:

    [
      {
        "user": "@foo",
        "text": "bar"
      },
      {
        "user": "@captain_obvious",
        "text": "#cccamp15 is awesome"
    ]
  
