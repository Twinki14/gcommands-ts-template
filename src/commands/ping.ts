import { Command, GPayloadOptions } from 'gcommands';
import { Client, GuildMember } from 'discord.js';

export = class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'ping',
      description: 'Ping!',
      cooldown: '5s',
    });
  }

  async run(p: runParamaters): Promise<void> {
    await p.respond({ content: ['Pong!'] });
  }
};

interface runParamaters {
  member: GuildMember;
  respond(options: string | GPayloadOptions): void;
}
