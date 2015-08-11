# ccc-twitterpi
Angular (eventually) webapp that polls #cccamp15 tweets and displays them on a raspi with a 320x400 display


# Authorization
You need to register your application at twitter. Then you'll get som OAuth keys.
Create an auth.json and fill it as follows (you'll get the values from twitter:

	 {
	         "consumer_key": "your_consumer_key",
	         "nonce": "your_nonce",
	         "signature": "your_signature",
	         "signature_method": "HMAC-SHA1",
	         "timestamp": "the_timestamp",
	         "version": "1.0"
	 }