import { Command, Handler } from "@discord-nestjs/core";
import { Injectable } from "@nestjs/common";
import {
  CommandInteraction,
  GuildMemberRoleManager,
  InteractionReplyOptions,
} from "discord.js";
import process from "process";

@Command({
  name: "combine",
  description:
    "Kombiniert drei Schlüsselteile zu einem voll funktionsfähigen Schlüssel",
})
@Injectable()
export class CombineCommand {
  @Handler()
  async on_combine(
    interaction: CommandInteraction,
  ): Promise<InteractionReplyOptions> {
    const member = interaction.member!;
    const member_roles = member.roles as GuildMemberRoleManager;

    if (
      member_roles.cache.has(process.env.ROLE_ID_2_WISDOM as string) &&
      member_roles.cache.has(process.env.ROLE_ID_2_KNOWLEDGE as string) &&
      member_roles.cache.has(process.env.ROLE_ID_2_ACTIVITY as string)
    ) {
      const guild_reward_role = (await interaction.guild!.roles.fetch(
        process.env.ROLE_ID_3 as string,
      ))!;
      if (member_roles.cache.has(guild_reward_role.id)) {
        return {
          content: `**Glückwunsch!!!**\nAber du hast bereits die Schlüsselteile kombiniert. Es passiert nichts!`,
          ephemeral: true,
        };
      } else {
        await member_roles.add(guild_reward_role);
        return {
          content: `**Erfolg!!**\nDu fügst die drei Schlüsselteile :key2: zusammen. Kaum hast du alle Teile ineinander gelegt, blitzt alles in einem hellen Strahl auf.\nAuf einmal hältst du einen fertigen ganzen Schlüssel :fleur_de_lis: in der Hand, der dir wie neu erscheint. Es ist noch ganz warm und hat eine lila Farbe angenommen.\nDu bist ganz aufgeregt und schreitest langsam Richtung jener düster wirkenden Tür :smiling_imp:.\nDer Schlüssel :fleur_de_lis: passt tatsächlich! Der Weg zu <#${process.env.CHANNEL_ID_3}> steht dir nun offen!`,
          ephemeral: true,
        };
      }
    } else {
      return {
        content: `**Misserfolg!**\nDu hast leider nicht alle drei Schlüsselteile :key2:, die du benötigst, um daraus einen ganzen Schlüssel :fleur_de_lis: zu kombinieren!`,
        ephemeral: true,
      };
    }
  }
}
