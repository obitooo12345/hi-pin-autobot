const axios = require('axios');
const fs = require('fs');
const path = './checkin-log.json';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loadCheckinLog() {
    if (!fs.existsSync(path)) return {};
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

function saveCheckinLog(log) {
    fs.writeFileSync(path, JSON.stringify(log, null, 2));
}

async function dailyCheckIn(token, headers) {
    const log = loadCheckinLog();
    const today = new Date().toISOString().slice(0, 10);
    if (log[token] === today) {
        console.log(`🕓 Token ${token.slice(0, 6)}... already checked in today.`);
        return;
    }
    try {
        const res = await axios.post('https://api.hipin.io/v1/user/check-in', {}, { headers });
        console.log(`🎁 Token ${token.slice(0, 6)}... Check-In:`, res.data?.message || 'Success');
        log[token] = today;
        saveCheckinLog(log);
    } catch (e) {
        console.log(`❌ Token ${token.slice(0, 6)}... failed:`, e.message);
    }
}

async function runBot(token) {
    const headers = { authorization: token };
    while (true) {
        await dailyCheckIn(token, headers);
        console.log(`✅ Token ${token.slice(0, 6)}... sleeping for 24h`);
        await delay(86400 * 1000); // 24 hours
    }
}

async function startAll() {
    const tokens = fs.readFileSync('token.txt', 'utf-8')
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean);

    for (const token of tokens) {
        runBot(token); // parallel
    }
}

startAll();
