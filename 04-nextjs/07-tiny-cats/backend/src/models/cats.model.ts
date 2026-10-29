/**
 * Cats:
 * - name
 * - breed
 * - description
 * - energy level
 * - life span
 * - kids friendly
 * - appartment friendly
 * - image
 * - color
 */

import mongoose, { Model } from "mongoose";
import type { ICats } from "../types/cats.types.js";

type CatsModel = Model<ICats, {}>;

const catSchema = new mongoose.Schema<ICats, CatsModel>(
  {
    name: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    decsription: {
      type: String,
      required: true,
    },
    energyLevel: {
      type: String,
      required: true,
    },
    lifeSpan: {
      type: Number,
      default: 1,
    },
    kidsFriendly: {
      type: Boolean,
      default: true,
    },
    appartmentFriendly: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const catsModel =
  (mongoose.models.Cats as CatsModel | undefined) ??
  mongoose.model<ICats, CatsModel>("Cats", catSchema);
export default catsModel;
