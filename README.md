# Minefort Server Keeper 🧊⏳

An automated GitHub Actions workflow designed to run a daily cloud runner task, preventing your free Minefort Minecraft server from being wiped due to the 3-day inactivity deletion timer.

---

## 🚀 How It Works

Minefort automatically deletes servers that remain empty and unaccessed for 3 consecutive days. This repository uses **GitHub Actions** as a free cloud runner to execute a daily task, ensuring your repository stays active and serving as a home base for your custom automation scripts.

---

## ⚙️ Setup & Configuration Instructions

### 1. Fork or Clone the Repository
If you want to use this for your own server, fork or clone this repository to your own GitHub account.

### 2. Configure Your Server IP
1. Navigate to `.github/workflows/keepalive.yml` in your repository.
2. Locate the Python block inside the workflow file.
3. Update the `server_ip` variable to match your specific Minefort server address:
   ```python
   # Change this to your exact Minefort server address
   server_ip = "yourserver.minefort.com"
   ```
4. **Important Note:** Make sure your server is turned on when the automation executes, or ensure you have your connection hooks configured properly.

### 3. Enable GitHub Actions
* If this is a newly created repository, go to the **Actions** tab at the top of your repository and click **"I understand my workflows, go ahead and enable them"** if prompted.
* You can also test the workflow manually at any time by going to **Actions** -> **Minefort Server Keeper** -> **Run workflow**.

---

## 📅 Schedule Details

By default, the cron schedule is set to run once every 24 hours (every day at midnight UTC):
```yaml
schedule:
  - cron: '0 0 * * *'
```
You can modify this cron syntax inside `keepalive.yml` if you prefer a different execution frequency.
