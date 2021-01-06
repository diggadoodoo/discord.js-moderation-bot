![Eden](https://i.imgur.com/DR9Kzh2.png "Eden")
 
 A small Discord moderation bot, without a command handler

---

# Getting started (For people who aren't used to Discord.js)


## Requirements
* Node.js
* A code editor (visual studio code, atom, notepad++ etc)

### Step zero, making a Discord bot account
Go to https://discord.com/developers and make an application. After creating your application, you should have the option to create a bot user.
![Step zero](https://i.imgur.com/TpOd97E.png "Step zero")

### Step one, making the folder
Make a folder for which your bot's coding will be in


### Step two, opening powershell
Do shift + right click and select open powershell (or cmd depending on your PC)
![Step two]https://i.imgur.com/1quX9nB.png "Step two")


### Step three, initiating
Type into your powershell/cmd `npm init` and enter information that is requested, **set your entry point to `bot.js`**. After doing that, we should now have a file called `package.json`


### Step four, installing Discord.js
Now, you should type `npm install discord.js`, we are installing the discord.js modules

### Step five, getting the files
Download `bot.js` and `config.json`

### Step six (I)
Get your bots token. Reminder, bot tokens are key information that gives complete access to your bot.
![Step six I](https://i.imgur.com/ytSLIi2.png "Step Six I")

### Step six (II), config.json
Place your bot's token **between** the quotation marks, you can also edit the prefix if you'd like.
![Step six](https://i.imgur.com/dy7OSYW.png "Step six")

### Step seven, running your bot
Run your bot by typing `node bot` into your powershell/cmd

### Step eight, adding your bot to your server
Use this link and replace **client_id_here** with your actual client ID
https://discordapp.com/api/oauth2/authorize?client_id=client_id_here&permissions=0&scope=bot
# And your bot is running!
Enjoy the bot, updates are frequent so always return to replace your `bot.js` with the newest one.

---

### Any errors?
If you'd like to come to me personally, join the [support server](https://discord.gg/t2nV9kBnch)
