import { CommandInteraction, MessageEmbed } from 'discord.js';
import { createAPIKey } from '../../../services/wiseoldman';
import config from '../../../config';
import { Command, CommandConfig, CommandError, sendModLog } from '../../../utils';

const CONFIG: CommandConfig = {
  name: 'create-api-key',
  description: 'Create a new Wise Old Man API key.',
  options: [
    {
      type: 'string',
      required: true,
      name: 'project',
      description: 'The name of the project this key is meant to be used by.'
    },
    {
      type: 'user',
      required: true,
      name: 'requester',
      description: "Requester's Discord user tag."
    }
  ]
};

class CreateAPIKeyCommand extends Command {
  constructor() {
    super(CONFIG);
    this.private = true;
    this.moderation = true;
  }

  async execute(interaction: CommandInteraction) {
    const project = interaction.options.getString('project', true);
    const requesterId = interaction.options.getUser('requester', false)?.id;

    const requester = interaction.guild?.members.cache.find(m => m.id === requesterId);

    if (!requester) throw new Error();

    const key = await createAPIKey(project, requester.user.username);

    // DM the user back with the new API key
    await requester
      .send(
        `Wise Old Man API key for "${project}":\n\`${key.id}\`\n\n<https://docs.wiseoldman.net/#rate-limits--api-keys>`
      )
      .catch(() => {
        throw new CommandError(`Failed to send DM to <@${requesterId}>.`);
      });

    // Respond on the WOM discord chat with a success status
    const response = new MessageEmbed()
      .setColor(config.visuals.green)
      .setDescription(`✅ API key created for "${project}". A DM has been sent to <@${requesterId}>.`);

    await interaction.editReply({ embeds: [response] });

    sendModLog(
      interaction.guild,
      `API Key created (Project: ${project})`,
      interaction.user,
      requester?.user
    );
  }
}

export default new CreateAPIKeyCommand();
