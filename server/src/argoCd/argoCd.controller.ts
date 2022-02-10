import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArgoCdService } from "./argoCd.service";
import { ArgoCdControllerBase } from "./base/argoCd.controller.base";

@swagger.ApiTags("argo-cds")
@common.Controller("argo-cds")
export class ArgoCdController extends ArgoCdControllerBase {
  constructor(
    protected readonly service: ArgoCdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
