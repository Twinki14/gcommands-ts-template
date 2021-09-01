import { Command } from 'gcommands';
import { Client } from 'discord.js';

export default class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'test',
      description: 'Test',
      cooldown: '5s',
      category: 'Voice',
    });
  }

  run({ respond }): void {
    respond({ content: 'Hiyo!' });
  }
}
