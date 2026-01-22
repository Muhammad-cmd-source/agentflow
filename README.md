# AgentFlow - Multi-Agent Task Orchestrator

> A full-stack TypeScript platform for creating and managing autonomous agents that execute multi-step tasks with real-time progress tracking.
---

##  Overview

AgentFlow is a production-ready platform demonstrating long-running agent orchestration with real-time UI updates. Users can create custom agents, assign natural language tasks, and watch them execute multi-step workflows in real-time.

##  Features

-  **Create Custom Agents** - Natural language task assignment
-  **Real-Time Progress Tracking** - Live updates as agents execute
-  **Multi-Step Task Execution** - Complex workflows broken into stages
-  **Clean Developer API** - RESTful design for easy integration
-  **Modern Stack** - TypeScript, Next.js, Express, Tailwind CSS
-  **Intuitive UI** - Responsive design with real-time feedback

---

##  Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Real-time polling** - Auto-refresh agent status

### Backend
- **Express.js** - RESTful API server
- **TypeScript** - End-to-end type safety
- **In-memory state** - Scalable to PostgreSQL/Redis
- **CORS enabled** - Cross-origin support

---

##  Screenshots

### Main Dashboard
![Dashboard](screenshots/dashboard.png)
*Clean interface showing active agents with status indicators and progress bars*

### Agent Creation
![Create Agent](screenshots/create.png)
*Simple modal for creating new agents with natural language tasks*

### Agent Execution
![Running Agent](screenshots/running.png)
*Real-time progress tracking with step-by-step execution details*

### Completed Agent Details
![Agent Details](screenshots/details.png)
*Detailed view showing all execution steps, timestamps, and outputs*

---

##  Architecture

```
User Input → Next.js UI → Express API → Agent Engine → State Management
                ↓                                            ↓
         Real-time Polling ←──────────────────── In-Memory Store
```

### Key Design Decisions:

1. **Polling vs WebSockets**: Used polling for simplicity; WebSocket upgrade path available
2. **In-Memory Storage**: Demonstrates concept; production would use PostgreSQL + Redis
3. **Modular Agent Logic**: Easy to swap simulation for real LLM integration
4. **Type Safety**: Shared types between frontend/backend prevent runtime errors

---

##  API Endpoints

### `POST /api/agents`
Create a new agent and start execution
```typescript
{
  "name": "Research Assistant",
  "task": "Analyze recent AI papers and summarize findings"
}
```

### `GET /api/agents`
List all agents with current status

### `GET /api/agents/:id`
Get detailed agent information including execution steps

---

##  Running Locally

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
npm run dev
# Runs on http://localhost:3001
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

### Environment Variables
```bash
# frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

##  Why I Built This

This project demonstrates my ability to:
-  Build and ship complete features independently
-  Design intuitive developer-facing APIs
-  Think about state management and real-time updates
-  Write production-quality TypeScript
-  Understand agent orchestration concepts

---

##  Code Quality

- **TypeScript Strict Mode** - Maximum type safety
- **Consistent Code Style** - ESLint configuration
- **Error Handling** - Graceful failures with user feedback
- **Responsive Design** - Works on desktop and mobile
- **Clean Architecture** - Separation of concerns
- **Documented Code** - Clear comments and function signatures

---

##  Project Structure

```
agentflow/
├── backend/
│   ├── src/
│   │   ├── index.ts      # Express server setup
│   │   ├── agent.ts      # Agent orchestration logic
│   │   └── types.ts      # Shared type definitions
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── app/
    │   └── page.tsx      # Main application page
    ├── components/
    │   ├── AgentCard.tsx # Agent status card
    │   └── AgentDetail.tsx # Detailed agent view
    ├── lib/
    │   └── api.ts        # API client functions
    ├── types/
    │   └── index.ts      # TypeScript interfaces
    └── package.json
```

---

