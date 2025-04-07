import { IsNotEmpty, IsString } from 'class-validator';

export class updatePostRequestDto {
  @IsString()
  @IsNotEmpty()
  readonly community?: string;

  @IsString()
  @IsNotEmpty()
  readonly title?: string;

  @IsString()
  @IsNotEmpty()
  readonly content?: string;
}
