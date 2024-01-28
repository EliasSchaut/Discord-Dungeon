import { Command, Handler, InteractionEvent } from "@discord-nestjs/core";
import { SlashCommandPipe } from "@discord-nestjs/common";
import {
  CommandInteraction,
  GuildMemberRoleManager,
  InteractionReplyOptions,
} from "discord.js";
import { Injectable } from "@nestjs/common";
import { WriteDto } from "@/types/dto/write.dto";
import { SolutionService } from "@/common/services/solution.service";

@Command({
  name: "write",
  description: "Schreibe eine Lösung in das Buch",
})
@Injectable()
export class WriteCommand {
  constructor(private readonly solutionService: SolutionService) {}

  @Handler()
  async on_write(
    @InteractionEvent() interaction: CommandInteraction,
    @InteractionEvent(SlashCommandPipe) options: WriteDto,
  ): Promise<InteractionReplyOptions> {
    const { w1, w2, w3 } = options;
    const solution = [w1, w2, w3]
      .filter((w) => w)
      .map((w) => w!.trim())
      .join(" ")
      .toLowerCase();

    const { role_id, response } = this.solutionService.check(solution);

    if (role_id) {
      const guild_reward_role =
        (await interaction.guild!.roles.fetch(role_id))!;
      const member_roles = interaction.member!.roles as GuildMemberRoleManager;
      if (member_roles.cache.has(guild_reward_role.id)) {
        return {
          content: `**Glückwunsch!!!**\nAber du hast das Rätsel bereits gelöst. Es passiert nichts!`,
          ephemeral: true,
        };
      } else {
        await member_roles.add(guild_reward_role);
      }
    }
    return {
      content: response,
      ephemeral: true,
    };
  }
}
