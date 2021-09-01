import path from 'path';
import signale from 'signale';
import { GCommandsClient } from 'gcommands';

const token = '';

signale.config({
  displayFilename: true,
  displayTimestamp: true,
  displayDate: false,
});

const client = new GCommandsClient({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'],
  cmdDir: path.join(__dirname, 'commands'),
  //eventDir: 'events/',
  caseSensitiveCommands: false, // true or false | whether to match the commands' caps
  caseSensitivePrefixes: false, // true or false | whether to match the prefix in message commands
  language: 'english', // english, spanish, portuguese, russian, german, czech, slovak, turkish, polish, indonesian, italian
  commands: {
    slash: 'both', // https://gcommands.js.org/docs/#/docs/main/dev/typedef/GCommandsOptionsCommandsSlash
    context: 'both',
    prefix: '!!', // for normal commands
  },
  defaultCooldown: '2s',
});

client.on('debug', signale.debug); // warning | this also enables the default discord.js debug logging
client.on('log', signale.info);
client.on('ready', () => {
  signale.success('Client is ready!');
});

client.addListener('shutdown', (err) => {
  signale.error(err);
  client.destroy();
  process.exit(1);
});

client.login(token);
