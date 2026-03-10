import { Type } from 'class-transformer';
import { IsBoolean, IsIn, IsNumber, IsString, Min } from 'class-validator';

export class CreateQuoteDto {
  @IsString()
  originCity!: string;

  @IsString()
  destinationCity!: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0.5)
  weight!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  length!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  width!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  height!: number;

  @IsIn(['parcel', 'document', 'bulky'])
  shipmentType!: string;

  @IsBoolean()
  cashOnDelivery = false;

  @IsIn(['domestic', 'international'])
  scope!: string;
}
