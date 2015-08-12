#!/bin/bash
CURRENT_DATE=$(date +%s)
NONCE=$(uuidgen)

PARAMETER_STRING="GET&https%3A%2F%2Fapi.twitter.com%2F1.1%2F&oauth_consumer_key=GgdO7UKkzm5XPCOzomBEMHxCB&oauth_nonce=$NONCE&oauth_signature_method=HMAC-SHA1&oauth_timestamp=$CURRENT_DATE&oauth_token=46066555-KPFuwONAt4apDOPzQI6axl7Ti58CodetTuXNYcIwo"
SIGNING_KEY="7VkaDwv66nXdW8GmcuNs4B2cWSZHNGwK7jGdKGnwYnLTO0sWP1%0D%0A0ATBo13u&1SSeHUKsI5oZk45dzUgVqWObZZ8Vjtxet8jx"
echo $PARAMETER_STRING


#curl --get 'https://api.twitter.com/1.1/search/tweets.json' --data 'q=%23cccamp15' --header "Authorization: OAuth oauth_consumer_key='GgdO7UKkzm5XPCOzomBEMHxCB', oauth_nonce='$NONCE', oauth_signature='wDPilk61BPdYOw%2Bg0JXtyY866Yc%3D', oauth_signature_method='HMAC-SHA1', oauth_timestamp='$CURRENT_DATE', oauth_token="46066555-KPFuwONAt4apDOPzQI6axl7Ti58CodetTuXNYcIwo", oauth_version="1.0"" --verbose