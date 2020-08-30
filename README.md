# Necrot Moderation
 A small Discord moderation bot, without a command handler

---

### Warning: This will most likely be the worst code you have ever seen. I am pretty new to Discord.js, but new enough to commit a repository

### Any errors?
If you'd like to come to me personally, contact me: `Olsen#5830`

---
# Getting started (For people who aren't used to Discord.js)

## Requirements
* Node.js
* A code editor (visual studio code, atom, notepad++ etc)

### Step zero, making a Discord bot account
Make an application first, then click the bot tab. You should see "add bot", click that and now you have a bot account!
![Step zero](https://i.imgur.com/9aDRoKA.png "Step zero")

### Step one, making the folder
Make a folder on your desktop (or you documents, anywhere is alright, just make a folder lol)
![Step one](https://i.imgur.com/o3T5Ebd.jpg "Step one")


### Step two, opening powershell
Do shift + right click to get this menu up, click "open powershell here" (or "cmd" depending on whatever PC you have)
![Step two](https://i.imgur.com/islsjeL.png "Step two")


### Step three, initiating
Type into your powershell/cmd `npm init` and enter information that is requested, **set your entry point to `bot.js`** After doing that, we should now have a file called `package.json`


### Step four, installing Discord.js
Now, you should type `npm install discord.js --save`, now we are installing the discord.js modules

### Step five, getting the files
Download `bot.js` and `config.json`

### Step six (I)
Get your bots token via https://discordapp.com/developers

### Step six (II), config.json
Place your bot's token **between** the quotation marks, you can also edit the prefix if you'd like!
![Step six](https://i.imgur.com/dy7OSYW.png "Step six")

### Step seven, running your bot
Run your bot by typing `node bot` into your powershell/cmd

### Step eight, adding your bot to your server
Use this link and replace **client_id_here** with your actual client ID
https://discordapp.com/api/oauth2/authorize?client_id=client_id_here&permissions=0&scope=bot
# And your bot is running!
Enjoy the bot, updates are frequent so always return to replace your `bot.js` with the newest one

---

If you're suffering any difficulties then once again, contact me `Olsen#5830` on Discord
