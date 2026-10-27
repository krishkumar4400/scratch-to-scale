import { IResume } from "@/types/resume.types.ts";
import mongoose, { Model, models } from "mongoose";

const resumeSchema = new mongoose.Schema<IResume>({
  title: {
    type: String,
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

        trim: true,
      },
      email: {
        type: String,

        unqiue: true,
        trim: true,
      },
      mobile: {
        type: String,

        trim: true,
      },
      location: {
        type: String,

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

          trim: true,
        },
        description: {
          type: String,

          trim: true,
        },
        position: {
          type: String,

          trim: true,
        },
        startDate: {
          type: String,

          trim: true,
        },
        endDate: {
          type: String,

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
        },
        description: {
          type: String,

          trim: true,
        },
        liveLink: {
          type: String,

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
