import { Module } from "@nestjs/common";
import { DiscordModule } from "@discord-nestjs/core";
import { BotGateway } from "@/bot/bot.gateway";
import { BeginCommand } from "@/bot/commands/begin.command";

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [BotGateway, BeginCommand],
})
export class BotModule {}
