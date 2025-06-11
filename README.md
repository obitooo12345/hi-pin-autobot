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

Example `token.txt`:
```
eyJhbGciOi1...
eyJhbGciOi2...
```

## Note

- `checkin-log.json` stores check-in timestamps (auto-created).
- Do **NOT** upload your tokens to GitHub.

---
