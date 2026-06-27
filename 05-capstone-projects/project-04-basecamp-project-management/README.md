<div align="center">

<img src="https://img.shields.io/badge/StratFlow-Project%20Management-6C63FF?style=for-the-badge" alt="StratFlow"/>

# ⚡ StratFlow

### AI-Powered Project Management Platform

**Built with MERN Stack · Real-time Collaboration · AI Intelligence**

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socket.io&logoColor=white)](https://socket.io)
[![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)](https://redis.io)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

---

> *"Where strategy meets velocity — StratFlow turns project chaos into coordinated momentum."*

[Live Demo](https://stratflow.vercel.app) · [API Docs](https://stratflow.vercel.app/api-docs) · [Report Bug](https://github.com/yourusername/stratflow/issues) · [Request Feature](https://github.com/yourusername/stratflow/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [🚀 Key Features](#-key-features)
- [🤖 AI-Powered Features](#-ai-powered-features)
- [🔥 Unique Advanced Features](#-unique-advanced-features)
- [🏗️ Tech Stack](#️-tech-stack)
- [📐 System Architecture](#-system-architecture)
- [🗃️ Database Schema](#️-database-schema)
- [📁 Project Structure](#-project-structure)
- [⚙️ Getting Started](#️-getting-started)
- [🔑 Environment Variables](#-environment-variables)
- [📡 API Reference](#-api-reference)
- [🧪 Running Tests](#-running-tests)
- [🐳 Docker Deployment](#-docker-deployment)
- [📊 Screenshots](#-screenshots)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## About The Project

**StratFlow** is a full-stack, production-grade project management platform inspired by Basecamp — reimagined with AI intelligence, real-time collaboration, and developer-first architecture. Built entirely on the MERN stack with Socket.io for real-time features and integrated OpenAI for intelligent automation.

It goes beyond simple task tracking: StratFlow features an **AI Sprint Planner**, **burnout detection**, **NLP-powered search**, **dependency graph visualization**, and **GitHub integration** — making it not just placement-ready, but genuinely competitive with professional SaaS products.

Whether you are a solo developer or leading a 50-person engineering team, StratFlow adapts to your workflow with smart automation, multi-view boards, and deep analytics.

---

## 🚀 Key Features

### 🗂️ Core Project Management

- **Multi-view Boards** — Switch between Kanban, List, Gantt, Calendar, and Timeline views with one click
- **Nested Task Hierarchy** — Projects → Milestones → Tasks → Subtasks with full progress rollup
- **Smart Tagging & Labels** — Color-coded labels, priority flags (P0–P4), and custom metadata
- **File Attachments** — Drag-and-drop file uploads with image previews (via Cloudinary)
- **Rich Text Descriptions** — Markdown-powered task descriptions with @mentions and #task-links
- **Activity Feed** — Complete audit trail of every change across the project

### 👥 Team & Collaboration

- **Role-Based Access Control** — Owner, Admin, Member, and Viewer roles with granular permissions
- **@Mentions & Notifications** — Context-aware notifications with priority scoring
- **Commenting System** — Threaded comments with emoji reactions and resolution marking
- **Team Workspaces** — Separate workspaces per organization with member management
- **Guest Access** — Shareable read-only project links for external stakeholders

### 📊 Reporting & Analytics

- **Sprint Velocity Charts** — Historical velocity tracking with trend lines
- **Burndown & Burnup Charts** — Real-time sprint progress tracking
- **Cumulative Flow Diagrams** — Identify bottlenecks before they cause delays
- **Individual & Team Workload Dashboard** — Visual capacity planning
- **Custom Report Builder** — Drag-and-drop report creation with CSV/PDF export

---

## 🤖 AI-Powered Features

> These features use the OpenAI API and are what make StratFlow stand out from the crowd.

### 1. 🧠 AI Sprint Planner

Analyzes historical sprint data, team velocity, and individual capacity to:

- Auto-suggest which backlog items to include in the next sprint
- Flag over-committed sprints before you start
- Redistribute tasks when a team member is blocked or absent

### 2. 🔮 Deadline Risk Predictor

A lightweight ML model trained on project patterns that:

- Assigns a **Risk Score (0–100)** to each active milestone
- Sends early alerts 3–5 days before predicted deadline slippage
- Provides reasoning: *"Task X has 3 unresolved blockers and 2 days left"*

### 3. 💬 NLP Task Creation

Type or speak in natural language:
> *"Create a bug task for the login page crash, assign it to Rahul, high priority, due this Friday"*
StratFlow parses intent and fills all fields automatically using AI.

### 4. 🔍 Smart Search (Natural Language Query)

Search your entire workspace with plain English:
> *"Show me all overdue backend tasks assigned to me this sprint"*
> *"Find all tasks blocked by API integration"*

### 5. 📝 AI Meeting → Tasks

Paste raw meeting notes, and AI extracts:

- Action items as tasks with automatic assignees and due dates
- Decision log linked to relevant milestones
- Open questions as discussion threads

### 6. 📈 Auto-Generated Sprint Retrospective

At sprint end, AI generates a full retrospective document covering:

- Velocity analysis vs. forecast
- Blockers summary with root cause patterns
- Team performance insights (anonymized)
- Recommendations for the next sprint

---

## 🔥 Unique Advanced Features

These features make StratFlow truly 10x compared to standard project management clones:

### ⚡ 1. Real-time Collaborative Editing (Socket.io)

- Live cursors showing who is viewing which task
- Collaborative description editing (Operational Transformation)
- Real-time status changes broadcast to all connected clients instantly
- Typing indicators on comments

### 🌐 2. GitHub / GitLab Integration

- **Link PRs and commits directly to tasks**
- Task status auto-updates: `In Progress` when PR opened, `Done` when PR merged
- Commit messages containing `#TASK-42` auto-link to the task timeline
- PR review status shown as a task checklist item

### 🧬 3. Task Dependency Graph

- Interactive D3.js force-directed graph showing all task dependencies
- **Critical path highlighting** — instantly see which tasks will delay the entire project
- Circular dependency detection with warnings
- One-click navigation from any node to the task detail

### 🔴 4. Burnout Radar

- Monitors each team member's assigned open tasks + deadlines + working hours
- Generates a **"Load Score"** (color-coded: green/yellow/red)
- Notifies the project manager when a member hits the warning threshold
- Suggests automatic task redistribution

### 🎙️ 5. Voice Command Interface

- Web Speech API integration — activate with `Cmd + Shift + V`
- Supports commands like:
  - *"Move task 47 to In Progress"*
  - *"Assign the API design task to Pooja"*
  - *"Show me my overdue tasks"*
- Voice transcription shown in real time before executing

### ⏱️ 6. Built-in Pomodoro Timer with Auto-Time Logging

- Every task has a Pomodoro timer
- Completed sessions are automatically logged as time entries
- Generates weekly time reports per project and per team member
- Alerts if a task is consuming far more Pomodoros than estimated

### 🗺️ 7. Visual Workload Heatmap

- GitHub-style contribution heatmap for each team member
- Color intensity shows task completion density per day
- Hover to see exactly which tasks were completed that day
- Excellent for performance reviews and sprint planning

### 🔁 8. Custom Automation Rules (No-Code)

A built-in automation engine — think Zapier but native:

| Trigger | Action |
|---------|--------|
| Task moved to Done | Notify stakeholder via email |
| Deadline < 24 hours | Escalate priority to P0 |
| All subtasks complete | Auto-close parent task |
| New member joined project | Auto-assign onboarding checklist |
| PR merged on GitHub | Move linked task to Review |

### 📧 9. Email-to-Task (Inbound Email Parsing)

- Each project gets a unique email address: `project-xyz@stratflow.app`
- Forwarding an email to it automatically creates a task
- Subject → Task title, Body → Description, Attachments → Files
- Sender is auto-matched to a team member if email exists in workspace

### 🕹️ 10. Focus Mode

- Single-task immersive view — hides the entire sidebar and navigation
- Embedded Pomodoro timer, task notes, linked subtasks
- Background ambient sound options (rain, lo-fi, white noise)
- Keyboard-only navigation for power users

---

## 🏗️ Tech Stack

### Frontend

| Technology | Purpose |
|-----------|---------|
| React 18 + Vite | UI Framework with HMR |
| Redux Toolkit + RTK Query | State management & API caching |
| React Router v6 | Client-side routing |
| TailwindCSS | Utility-first styling |
| Socket.io Client | Real-time communication |
| D3.js | Dependency graph visualization |
| Recharts | Analytics dashboards |
| React DnD Kit | Drag-and-drop Kanban |
| TipTap Editor | Rich-text task descriptions |
| Framer Motion | Animations & transitions |

### Backend

| Technology | Purpose |
|-----------|---------|
| Node.js + Express.js | REST API server |
| Socket.io | WebSocket server for real-time |
| MongoDB + Mongoose | Primary database |
| Redis (Upstash) | Caching, sessions, pub/sub |
| JWT + Bcrypt | Authentication & security |
| Cloudinary | File & image storage |
| Nodemailer + Resend | Transactional email |
| Bull Queue (Redis) | Background job processing |
| OpenAI API | AI features |
| Swagger / OpenAPI | API documentation |

### DevOps & Tools

| Technology | Purpose |
|-----------|---------|
| Docker + Docker Compose | Containerization |
| GitHub Actions | CI/CD pipeline |
| Jest + Supertest | Unit & integration testing |
| Husky + ESLint | Pre-commit hooks & linting |
| Morgan + Winston | Request logging |
| Helmet.js | HTTP security headers |

---

## 📐 System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT (React + Vite)                      │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐  ┌───────────────┐  │
│  │  Redux   │  │  Socket  │  │   React   │  │  D3.js / Chart│  │
│  │ Toolkit  │  │.io Client│  │   Router  │  │  Components   │  │
│  └──────────┘  └──────────┘  └───────────┘  └───────────────┘  │
└─────────────────────────┬───────────────────────────────────────┘
                          │ HTTP / WebSocket
┌─────────────────────────▼───────────────────────────────────────┐
│                    NGINX Reverse Proxy                            │
└─────────────────────────┬───────────────────────────────────────┘
                          │
         ┌────────────────┴────────────────┐
         ▼                                 ▼
┌─────────────────┐               ┌─────────────────┐
│   Express API   │               │  Socket.io      │
│   (REST)        │               │  Server         │
│                 │               │  (Real-time)    │
│  ┌───────────┐  │               │                 │
│  │  Routes   │  │               │  Rooms by       │
│  │  /auth    │  │               │  Project ID     │
│  │  /users   │  │               └────────┬────────┘
│  │  /projects│  │                        │
│  │  /tasks   │  │               ┌────────▼────────┐
│  │  /ai      │  │               │  Redis Pub/Sub  │
│  └───────────┘  │               │  (Upstash)      │
└────────┬────────┘               └─────────────────┘
         │
   ┌─────┴──────────┐
   ▼                ▼
┌──────┐      ┌──────────┐     ┌───────────┐
│Mongo │      │  Redis   │     │  OpenAI   │
│  DB  │      │  Cache   │     │Cloudinary │
└──────┘      └──────────┘     └───────────┘
```

---

## 🗃️ Database Schema

```javascript
// User Schema
{
  _id: ObjectId,
  name: String,
  email: { type: String, unique: true },
  password: String, // bcrypt hashed
  avatar: String,   // Cloudinary URL
  role: { type: String, enum: ['user', 'admin'] },
  workspaces: [{ type: ObjectId, ref: 'Workspace' }],
  createdAt: Date
}

// Workspace Schema
{
  _id: ObjectId,
  name: String,
  slug: String, // unique
  owner: { type: ObjectId, ref: 'User' },
  members: [{
    user: { type: ObjectId, ref: 'User' },
    role: { type: String, enum: ['owner', 'admin', 'member', 'viewer'] }
  }],
  projects: [{ type: ObjectId, ref: 'Project' }]
}

// Project Schema
{
  _id: ObjectId,
  title: String,
  description: String,
  workspace: { type: ObjectId, ref: 'Workspace' },
  owner: { type: ObjectId, ref: 'User' },
  members: [{ type: ObjectId, ref: 'User' }],
  status: { type: String, enum: ['active', 'archived', 'completed'] },
  startDate: Date,
  endDate: Date,
  milestones: [{ type: ObjectId, ref: 'Milestone' }],
  tags: [String],
  inboxEmail: String, // for Email-to-Task feature
  settings: {
    defaultView: String,
    automationRules: [AutomationRuleSchema]
  }
}

// Task Schema
{
  _id: ObjectId,
  title: String,
  description: String,         // rich text / markdown
  project: { type: ObjectId, ref: 'Project' },
  milestone: { type: ObjectId, ref: 'Milestone' },
  parent: { type: ObjectId, ref: 'Task' },
  subtasks: [{ type: ObjectId, ref: 'Task' }],
  assignees: [{ type: ObjectId, ref: 'User' }],
  reporter: { type: ObjectId, ref: 'User' },
  status: {
    type: String,
    enum: ['backlog', 'todo', 'in_progress', 'in_review', 'done', 'cancelled']
  },
  priority: { type: String, enum: ['p0', 'p1', 'p2', 'p3', 'p4'] },
  labels: [String],
  dueDate: Date,
  estimatedHours: Number,
  loggedHours: Number,
  dependencies: [{ type: ObjectId, ref: 'Task' }],
  attachments: [AttachmentSchema],
  comments: [{ type: ObjectId, ref: 'Comment' }],
  githubPR: String,
  aiRiskScore: Number,
  timeEntries: [TimeEntrySchema],
  createdAt: Date,
  updatedAt: Date
}
```

---

## 📁 Project Structure

```
stratflow/
├── client/                          # React Frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── api/                     # RTK Query API slices
│   │   ├── app/                     # Redux store setup
│   │   ├── components/              # Reusable UI components
│   │   │   ├── Board/               # Kanban board components
│   │   │   ├── Charts/              # Analytics charts (Recharts)
│   │   │   ├── DependencyGraph/     # D3.js graph component
│   │   │   ├── Editor/              # TipTap rich text editor
│   │   │   ├── Modals/              # Task detail, create modals
│   │   │   └── UI/                  # Buttons, badges, inputs
│   │   ├── features/                # Redux slices
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useSocket.js         # Socket.io hook
│   │   │   ├── useVoiceCommand.js   # Web Speech API hook
│   │   │   └── usePomodoro.js       # Pomodoro timer hook
│   │   ├── layouts/
│   │   ├── pages/
│   │   │   ├── Auth/
│   │   │   ├── Dashboard/
│   │   │   ├── Project/
│   │   │   ├── Analytics/
│   │   │   └── Settings/
│   │   ├── services/
│   │   ├── utils/
│   │   └── main.jsx
│   └── vite.config.js
│
├── server/                          # Node.js + Express Backend
│   ├── config/
│   │   ├── db.js                    # MongoDB connection
│   │   ├── redis.js                 # Redis connection
│   │   └── cloudinary.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── project.controller.js
│   │   ├── task.controller.js
│   │   ├── analytics.controller.js
│   │   └── ai.controller.js         # All AI feature logic
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── roleCheck.middleware.js
│   │   ├── rateLimiter.js
│   │   └── errorHandler.js
│   ├── models/
│   ├── routes/
│   ├── services/
│   │   ├── socket.service.js
│   │   ├── ai.service.js
│   │   ├── email.service.js
│   │   ├── github.service.js
│   │   └── queue.service.js
│   ├── tests/
│   ├── app.js
│   └── server.js
│
├── docker-compose.yml
├── .github/
│   └── workflows/ci.yml
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `>= 18.x`
- MongoDB `>= 6.0` (local or MongoDB Atlas)
- Redis (local or Upstash free tier)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/yourusername/stratflow.git
cd stratflow
```

**2. Install dependencies**

```bash
# Server
cd server && npm install

# Client
cd ../client && npm install
```

**3. Configure environment variables**

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env.local
```

**4. Seed the database (optional)**

```bash
cd server && npm run seed
```

**5. Run development servers**

```bash
# Backend (port 5000)
cd server && npm run dev

# Frontend (port 5173)
cd client && npm run dev
```

**6. Visit** `http://localhost:5173`

---

## 🔑 Environment Variables

### Server (`server/.env`)

```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:5173

MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/stratflow

REDIS_URL=rediss://:password@endpoint.upstash.io:6380

JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RESEND_API_KEY=re_xxxxxxxxxxxxxxx
EMAIL_FROM=noreply@stratflow.app

OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_MODEL=gpt-4o

GITHUB_WEBHOOK_SECRET=your_webhook_secret
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_secret
```

### Client (`client/.env.local`)

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000
VITE_CLOUDINARY_UPLOAD_PRESET=stratflow_unsigned
```

---

## 📡 API Reference

Base URL: `http://localhost:5000/api/v1`

> All protected routes require `Authorization: Bearer <token>`

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register new user |
| POST | `/auth/login` | Login and get JWT |
| POST | `/auth/refresh` | Refresh access token |
| GET | `/auth/me` | Get current user profile |

### Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | Get all projects |
| POST | `/projects` | Create new project |
| GET | `/projects/:id` | Get project by ID |
| PUT | `/projects/:id` | Update project |
| DELETE | `/projects/:id` | Delete project |
| GET | `/projects/:id/analytics` | Get project analytics |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects/:id/tasks` | Get all tasks in project |
| POST | `/projects/:id/tasks` | Create new task |
| GET | `/tasks/:id` | Get task details |
| PUT | `/tasks/:id` | Update task |
| PATCH | `/tasks/:id/status` | Update task status |
| POST | `/tasks/:id/comments` | Add comment |
| POST | `/tasks/:id/time` | Log time entry |

### AI Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/ai/sprint-plan` | Generate AI sprint plan |
| POST | `/ai/task-from-text` | NLP task creation |
| POST | `/ai/meeting-to-tasks` | Extract tasks from meeting notes |
| GET | `/ai/risk-score/:projectId` | Get deadline risk scores |
| POST | `/ai/retrospective/:sprintId` | Generate sprint retrospective |
| POST | `/ai/search` | Natural language search |

> Full Swagger docs at `http://localhost:5000/api-docs`

---

## 🧪 Running Tests

```bash
cd server

npm test                # All tests
npm run test:unit       # Unit tests only
npm run test:integration # Integration tests
npm run test:coverage   # With coverage report
```

---

## 🐳 Docker Deployment

```bash
# Build and start all services
docker-compose up --build

# Detached mode
docker-compose up -d

# Stop
docker-compose down
```

Services started: `stratflow-client` (5173), `stratflow-server` (5000), `mongodb` (27017), `redis` (6379)

---

## 📊 Screenshots

> *(Add screenshots here after building the UI)*

| Dashboard | Kanban Board | Dependency Graph |
|-----------|-------------|-----------------|
| `docs/screenshots/dashboard.png` | `docs/screenshots/board.png` | `docs/screenshots/graph.png` |

---

## 🗺️ Roadmap

- [x] Core CRUD for Projects, Tasks, Comments
- [x] JWT Authentication with Refresh Tokens
- [x] Real-time collaboration with Socket.io
- [x] Kanban Board with drag-and-drop
- [x] Role-Based Access Control (RBAC)
- [ ] AI Sprint Planner (v1)
- [ ] GitHub Integration
- [ ] Task Dependency Graph (D3.js)
- [ ] Burnout Radar system
- [ ] Voice Command Interface
- [ ] Mobile PWA support
- [ ] Stripe billing integration

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add: AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [yourlinkedin](https://linkedin.com/in/yourlinkedin)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

<div align="center">

**Star this repo if it helped you!**

Made with the MERN Stack

</div>
