import mongoose, { Schema } from "mongoose";

const lectureSchema = new Schema({
  lectureId: {
    type: String,
    required: true,
  },
  lectureTitle: {
    type: String,
    required: true,
  },
  lectureDuration: {
    type: Number,
    required: true 
  },
  lectureUrl: {
    type: String,
    required: true 
  },
  ispreviewFree: {
    type: Boolean,
    default: false,
    required: true
  }
}, {
    _id: false,
    timestamps: true
});

const chapterSchema = new Schema(
  {
    chapterId: {
      type: String,
      required: true,
    },
    chapterTitle: {
      type: String,
    },
    chapterOrder: {
      type: Number,
      required: true,
    },
    chapterContent: [lectureSchema],
  },
  {
    _id: false,
    timestamps: true
  },

);

const courseSchema = new Schema(
  {
    courseTitle: {
      type: String,
      required: true,
    },
    courseDescription: {
      type: String,
      required: true,
    },
    courseThumbnail: {
      type: String,
    },
    coursePrice: {
      type: Number,
      required: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    courseContent: [chapterSchema],
    courseRatings: [
      { userId: { type: String }, rating: { type: Number, min: 1, max: 5 } },
    ],
    educator: {
      type: String,
      ref: "user",
      required: true,
    },
    enrolledStudents: [{ type: String, ref: "user" }],
  },
  {
    timestamps: true,
    minimize: false,
  },
);

const courseModel =
  mongoose.model.Course || mongoose.model("Course", courseSchema);

export default courseModel;
