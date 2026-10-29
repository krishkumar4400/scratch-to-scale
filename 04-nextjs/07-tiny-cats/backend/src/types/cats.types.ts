import type { Document } from "mongoose";

export interface ICats extends Document {
  name: string;
  breed: string;
  decsription: string;
  energyLevel: string;
  lifeSpan: number;
  kidsFriendly: boolean;
  appartmentFriendly: boolean;
  image: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}
