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


1.Clone this repository
bash
Copy code
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git cd YOUR_REPO Install required packages
bash
Copy code
npm install axios 
5. Add your tokens
Create a token.txt file with one token per line:
bash
Copy code
echo -e "token1\ntoken2\n..." > token.txt 
6. Run the bot
bash
Copy code
node index.js 
Note: Keep your token.txt private and never share it publicly.
Example `token.txt`:
```
eyJhbGciOi1...
eyJhbGciOi2...
```

## Note

- `checkin-log.json` stores check-in timestamps (auto-created).
- Do **NOT** upload your tokens to GitHub.

---
