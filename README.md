# Minefort Server Keeper 🤖🛡️

A lightweight, automated local Node.js bot powered by **Mineflayer** designed to keep your Minecraft server active, prevent idle shutdowns, and bypass the 3-day inactivity deletion timer on free hosts like Minefort.

## ✨ Features

- **Automated Ghost Player:** Logs into your server as an active player so your dashboard registers active player counts instead of staying dead at `0/10`.
- **Anti-AFK Movement Loop:** Randomly walks, jumps, and looks around every few seconds to prevent the server from kicking the bot for being idle.
- **Auto-Reconnect Protocol:** Automatically handles disconnections, network drops, or server restarts, attempting a safe reconnection loop after 10 seconds.
- **Cracked/Offline Mode Support:** Fully configured to work smoothly with servers that have offline authentication enabled.

---

## 🚀 Quick Setup Guide

### 1. Prerequisites
Make sure you have **Node.js** installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### 2. Clone or Download the Repository
Open your terminal and clone this repository (or download the files directly into a local folder):
```bash
git clone [https://github.com/The-Fox-369/keepalive.git](https://github.com/The-Fox-369/keepalive.git)
cd keepalive
