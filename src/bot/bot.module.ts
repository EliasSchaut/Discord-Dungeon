import { Module } from "@nestjs/common";
import { DiscordModule } from "@discord-nestjs/core";
import { BotGateway } from "@/bot/bot.gateway";
import { BeginCommand } from "@/bot/commands/begin.command";
import { WriteCommand } from "@/bot/commands/write.command";
import { SolutionService } from "@/common/services/solution.service";
import { CombineCommand } from "@/bot/commands/combine.command";

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [
    BotGateway,
    SolutionService,
    BeginCommand,
    WriteCommand,
    CombineCommand,
  ],
})
export class BotModule {}
