import { Injectable, Logger } from "@nestjs/common";
import { InjectDiscordClient, On, Once } from "@discord-nestjs/core";
import { Client } from "discord.js";

@Injectable()
export class BotGateway {
  private readonly logger = new Logger(BotGateway.name);

  constructor(
    @InjectDiscordClient()
    private readonly client: Client,
  ) {}

  @Once("ready")
  onReady() {
    this.logger.verbose(`Bot ${this.client.user?.tag} was started!`);
  }

  @On("error")
  onError(error: Error) {
    this.logger.error(error.message);
  }
}
