import { Module } from "@nestjs/common";
import { ArgoCdModuleBase } from "./base/argoCd.module.base";
import { ArgoCdService } from "./argoCd.service";
import { ArgoCdController } from "./argoCd.controller";
import { ArgoCdResolver } from "./argoCd.resolver";

@Module({
  imports: [ArgoCdModuleBase],
  controllers: [ArgoCdController],
  providers: [ArgoCdService, ArgoCdResolver],
  exports: [ArgoCdService],
})
export class ArgoCdModule {}
