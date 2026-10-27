import { IResume } from "@/types/resume.types.ts";
import mongoose, { Model, models } from "mongoose";

const resumeSchema = new mongoose.Schema<IResume>({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "user id is required"],
  },
  summary: {
    type: String,
    trim: true,
  },
  personalInfo: {
    type: {
      fullname: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unqiue: true,
        trim: true,
      },
      mobile: {
        type: String,
        required: true,
        trim: true,
      },
      location: {
        type: String,
        required: true,
        trim: true,
      },
      github: {
        type: String,
        trim: true,
      },
      linkedIn: {
        type: String,
        trim: true,
      },
      portfolio: {
        type: String,
        trim: true,
      },
    },
    default: {},
  },
  workExperience: {
    type: [
      {
        company: {
          type: String,
          required: true,
          trim: true,
        },
        description: {
          type: String,
          required: true,
          trim: true,
        },
        position: {
          type: String,
          required: true,
          trim: true,
        },
        startDate: {
          type: String,
          required: true,
          trim: true,
        },
        endDate: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    default: [],
  },
  projects: {
    type: [
      {
        title: {
          type: String,
          trim: true,
          required: true,
        },
        description: {
          type: String,
          required: true,
          trim: true,
        },
        liveLink: {
          type: String,
          required: true,
          trim: true,
        },
        githubLink: {
          type: String,
        },
        techStack: [String],
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
      },
    ],
    default: [],
  },
  education: {
    type: [
      {
        institute: String,
        degree: String,
        startDate: String,
        endDate: String,
      },
    ],
    default: [],
  },
  skills: {
    type: [String],
    default: [],
  },
  achievements: {
    type: [String],
    default: [],
  },
  certifications: {
    type: [String],
    default: [],
  },
});

const resumeModel: Model<IResume> =
  (models.Resume as Model<IResume>) || mongoose.model("Resume", resumeSchema);

export default resumeModel;
