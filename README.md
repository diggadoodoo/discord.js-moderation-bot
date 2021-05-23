![Eden](https://i.imgur.com/DR9Kzh2.png "Eden")
 
 A small Discord moderation bot, without a command handler

---

# Getting started

## Requirements

- [Node.js](https://nodejs.org)
- Any text editor (Ex. [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), [WebStorm](https://www.jetbrains.com/webstorm/))
- [Git](https://git-scm.com/downloads)

### Step 1
Go to https://discord.com/developers/applications and create an application. After creating your application, you should have the option to create a bot user.
![image](https://i.imgur.com/TpOd97E.png)

### Step 2

Optionally, create a folder for containing your bots source code. Open a terminal / [CLI](https://en.wikipedia.org/wiki/Command-line_interface) into the folder.

<details>
<summary>Example for Microsoft Windows</summary>
Do folder shift + right click and select open powershell
<img alt="image" src="https://i.imgur.com/1quX9nB.png">
</details>


Then, on your terminal, execute the command:

```sh
git clone https://github.com/J2Olsen/discord.js-moderation-bot.git && cd discord.js-moderation-bot && npm install discord.js
```
This will clone this repository on github (`J2Olsen/discord.js-moderation-bot`), "cd" into it and then install the `discord.js` package.


### Step 3

Get your bots token. *Your token is like a password, so don't disclose it.*
![image](https://i.imgur.com/ytSLIi2.png)

After getting your bots token, edit `config.json` with your prefered text editor and add your token (You can also customize the prefix!) to something like this:

```json
{
    "token": "FPsAl1jP2rXCoXKQhaMYjx.WJc2x.Xppgr0GS3IGZygUUhuh2axu",
    "prefix": "+"
}
```

Then you can start your bot by executing `node bot` into your terminal.

### Step 4 | Adding your bot to your server
Use this link and replace **client_id_here** with your actual client ID
```
https://discordapp.com/api/oauth2/authorize?client_id=client_id_here&permissions=0&scope=bot
```

Yay! Enjoy the bot, updates are frequent so always return to replace your `bot.js` with the newest one.

---

### Any questions or errors?

If you'd like to come to me personally, join our [support server](https://discord.gg/t2nV9kBnch)

Also a big thank you to the contributors for correcting small errors and adding help to the bot.
