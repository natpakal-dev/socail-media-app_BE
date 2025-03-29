import { IsOptional, IsString } from 'class-validator';

export class updatePostRequestDto {
  @IsString()
  @IsOptional()
  readonly community?: string;

  @IsString()
  @IsOptional()
  readonly title?: string;

  @IsString()
  @IsOptional()
  readonly content?: string;
}
