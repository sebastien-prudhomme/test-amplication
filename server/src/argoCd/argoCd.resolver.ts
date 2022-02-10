import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ArgoCdResolverBase } from "./base/argoCd.resolver.base";
import { ArgoCd } from "./base/ArgoCd";
import { ArgoCdService } from "./argoCd.service";

@graphql.Resolver(() => ArgoCd)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ArgoCdResolver extends ArgoCdResolverBase {
  constructor(
    protected readonly service: ArgoCdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
