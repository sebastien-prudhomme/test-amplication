import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ArgoCdServiceBase } from "./base/argoCd.service.base";

@Injectable()
export class ArgoCdService extends ArgoCdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
