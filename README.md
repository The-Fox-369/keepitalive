# 🤖 Minefort ServerKeeper

A lightweight, automated local Node.js bot built using **Mineflayer** to keep free Minecraft servers alive on **Minefort** and completely bypass automatic deletion timers.

## 🚀 Features

* **Offline/Cracked Mode Support:** Works seamlessly with Minefort servers that allow cracked/offline players (`auth: 'offline'`).
* **Active Player Simulation:** Periodically performs random movement actions (walking, jumping) and camera rotations to prevent AFK kick timeouts.
* **Auto-Reconnect Protocol:** Automatically handles dropped connections and attempts to log back in after 10 seconds.

---

## 🛠️ Installation & Setup

1. **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. **Clone or Download** this repository to your local machine.
3. Open your terminal inside the project folder and install the required dependency:
   ```bash
   npm install mineflayer
   ```

---

## 💻 Usage

Run the bot locally from your machine anytime you want to keep your server awake and clear the deletion timer:

```bash
node bot.js
```

## ⚙️ Configuration

If you need to change your target server address or version, open `bot.js` and update the configuration object:

```javascript
const bot = mineflayer.createBot({
  host: 'your-server-ip.minefort.com',
  username: 'ServerKeeperBot',
  auth: 'offline',
  version: '1.21.4'
});
```
