/**
 * ==============================================================================
 * MINEFORT SERVERKEEPER BOT (MINEFLAYER LOCAL RUNNER)
 * ==============================================================================
 * 
 * IMPORTANT INSTRUCTIONS & SETUP:
 * 1. Make sure Node.js is installed on your machine (https://nodejs.org/).
 * 2. Open your terminal inside your project folder and run:
 *    - npm init -y
 *    - npm install mineflayer
 * 3. Make sure to change 'elementbendersmp.minefort.com' below if you ever change 
 *    your server IP, and ensure your server is online!
 * 4. Because Minefort allows cracked/offline players, `auth: 'offline'` is 
 *    mandatory so the bot doesn't look for an official Mojang/Microsoft account.
 * 5. Run this file anytime using: `node bot.js`
 * ==============================================================================
 */

const mineflayer = require('mineflayer');

// Define your server address once right here
const SERVER_IP = 'your-server-ip.minefort.com';

function createBot() {
  // Now it dynamically pulls from the variable
  console.log(`[Keeper] Attempting to connect to ${SERVER_IP}...`);

  const bot = mineflayer.createBot({
    host: SERVER_IP,             // Uses the variable here too
    username: 'ServerKeeperBot',
    auth: 'offline',
    version: '1.21.4'
  });

  // Triggered when the bot successfully spawns into the server world
  bot.on('spawn', () => {
    console.log('[Keeper] Bot successfully spawned! Active and keeping server alive.');

    // Set up a periodic loop to move around randomly and prevent AFK kick timers
    const moveInterval = setInterval(() => {
      const actions = ['forward', 'back', 'left', 'right', 'jump'];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      
      // Clear any previous movement states before applying a new one
      bot.clearControlStates();
      bot.setControlState(randomAction, true);
      
      // Randomly look around to simulate a real active player
      const yaw = Math.random() * Math.PI * 2;
      const pitch = (Math.random() - 0.5) * Math.PI;
      bot.look(yaw, pitch);
    }, 4000); // Executes a new movement action every 4 seconds

    // Clear the movement interval if the bot's session ends cleanly
    bot.on('end', () => {
      clearInterval(moveInterval);
    });
  });

  // Automatically handle disconnections and attempt reconnection
  bot.on('end', (reason) => {
    console.log(`[Keeper] Bot disconnected. Reason: ${reason}. Reconnecting in 10 seconds...`);
    setTimeout(createBot, 10000); // Wait 10 seconds before trying to log back in
  });

  // Catch and log any runtime errors so the script doesn't crash entirely
  bot.on('error', (err) => {
    console.log('[Keeper] Bot encountered an error:', err);
  });
}

// Kick off the initial bot connection loop
createBot();
