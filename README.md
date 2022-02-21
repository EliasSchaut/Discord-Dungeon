# Discord-Dungeon-Adventure: Hodor's Master 
A Dungeon-Adventure for Discord. Solve hard riddles and achieve the lost documents of the holy Ilias!

## Details
This bot can run the following commands (and more like `help`):
* `begin`: Begin the Dungeon-Adventure by getting explanations, how everything works
* `write`: Write a guess to solve a given riddle. If a solution matches with a solution in the config, the member get a spell
* `whisper`: Write a spell from command `write` and receive a role to step forward in the adventure
* `combine`: Combine key parts to a whole key

## Preparations
* You need [node.js](https://nodejs.org/en/) and [discord.js](https://discord.js.org/#/) installed.
* You need a [Discord API Bot](https://discord.com/developers/applications) with:
  * it's token.
  * the image set to the picture in *discord/Hodor.png*
  * the name set to `Hodor`
* You need a [Discord server](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server) on which you can set permissions, so you can invite the bot and give it permissions.
  * Manage Roles
  * View Channels
  * Send Messages
  * Read Message History
  * Mention Everyone
  * Mention Messages

## Configuration
1. In Discord:
   * Create a category named `Dungeon` and create channels named the following and set rule **view channel** to *false* for `@everyone` in the channels:
     * `prolog`
     * `chamber-1`
     * `chamber-2`
     * `chamber-3`
     * `chamber-4`
     * `epilogue`
   * Copy the text from the folder */discord/* into the corresponding channels
   * Create the following roles with the following rules:
     * `Prolog`: can see channel `prolog`
     * `Chamber-1`: can see channel `chamber-1`
     * `Chamber-2`: can see channel `chamber-2`
     * `Chamber-2: Wisdom`
     * `Chamber-2: Expert`
     * `Chamber-2: Knowledge`
     * `Chamber-3`: can see channel `chamber-3`
     * `Chamber-4`: can see channel `chamber-4`
     * `Epilogue`: can see channel `epilogue`
     * `Geheimzahl: 231242132`
   * Add somewhere the possibility to view all roles (in best case as xp reward which includes viewing the guild template). The users need to view the role `Geheimzahl: 231242132` to solve a riddle
2. Rename the configuration file *(/config/config-template.json)* from ```config-template.json``` to ```config.json```
3. Open the configuration file (now ```config.json```) and set:
    * your bot's prefix
    * your bot's token
    * your admin id's: Enter a discord user id in quotation marks and separate several with a comma ```[ "<id>", "<id>", ..., "<id>"]```.\
      These are the only users who have the permission to execute the restricted commands
    * Copy guild id and add it into `guild_id`
    * Copy role ids of the created roles and add it in the corresponding quotation marks in `ids`
    * OPTIONAL: change lang from "de" to "en" for english instead of german language (bot only)
    * OPTIONAL: change the name or place of the command's directory by editing the file path `commands_path`
4. Run `npm install`.

## Run
Run ```index.js``` with ```npm start``` or ```node index.js```.



   
