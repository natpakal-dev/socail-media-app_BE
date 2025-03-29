import { IsOptional, IsString } from 'class-validator';

export class createPostRequestDto {
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
