import { EnumPhotoStatus } from "../enums";

export interface IPhoto {
  id: number;
  message: string;
  user: string;
  image: string;
  avatar: string;
  path: string;
  status: EnumPhotoStatus;
}