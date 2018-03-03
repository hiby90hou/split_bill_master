# Start Split Bill

A web app that can help event organizer to split bill and collect event fee in a easy way. For a group of people to go to a no-split-bill restaurant, this app is also an ideal tool for them - one person can pay the total price to them, and collect money from other people through this app(scan QR code or click the link in the app). 

## demo website

[Start Split Bill](https://hiby90hou.github.io/split_bill_master/)

## Based on

1. React
2. NodeJS
3. Material-UI
4. Paypal sandbox
5. Heroku

## Installation

1. clone this repo
```
git clone https://github.com/hiby90hou/split_bill_master.git
```

2. install dependencies using npm
```
npm install
```

3. Set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET to the environment

You need to get a paypal developer account, creat a new app in the sandbox, and get these two keys from them.

4. start dev server and start coding in the main folder
```
cd split_bill_master

npm start
```

## Unsolved Problem
1. No money to use the real paypal account for test.
2. Need to have a function that can send event organizer email with the event information.
3. If event organizer close the webpage, all the information on it are gone - Need a function that can help user use order id to continue the bill collection.
4. When user finish payment they can go back to paypal payment page - this bug need to be fixed