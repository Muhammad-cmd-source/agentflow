export interface Agent {
  id: string;
  name: string;
  status: 'idle' | 'running' | 'completed' | 'failed';
  task: string;
  steps: Step[];
  createdAt: Date;
  completedAt?: Date;
}

export interface Step {
  id: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  output?: string;
  startedAt?: Date;
  completedAt?: Date;
}

export interface CreateAgentRequest {
  name: string;
  task: string;
} 
