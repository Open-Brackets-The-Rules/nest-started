import { ApiModelProperty } from '@nestjs/swagger';

export class CreateImageDTO {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly description: string;

    @ApiModelProperty()
    readonly filename: string;
}
