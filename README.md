# HiPin Auto Bot

Automated bot for farming HiPin tasks using **multiple accounts**.

## Features
- ✅ Multi-account daily check-in
- ✅ 24-hour wait cycle per token
- ✅ Log check-ins to prevent repeats
- ✅ Safe token handling via .gitignore

## Usage

1. Add your tokens to `token.txt`, one per line.
2. Install dependencies: `npm install axios`
3. Run the bot: `node index.js`


Clone this repository
bash
git clone https://github.com/obitooo12345/hi-pin-autobot.git
cd hi-pin-autobot 

4. Install required packages
bash

npm install axios 

5. Add your tokens
Create a token.txt file with one token per line:
bash

echo -e "token1\ntoken2\n..." > token.txt 
6. Run the bot
bash

node index.js 
Note: Keep your token.txt private and never share it publicly.
```

## Note

- `checkin-log.json` stores check-in timestamps (auto-created).
- Do **NOT** upload your tokens to GitHub.

---
