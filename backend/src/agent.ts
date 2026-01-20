import { Agent, Step } from './types';

const agents: Map<string, Agent> = new Map();

export function createAgent(name: string, task: string): Agent {
  const id = `agent_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  const agent: Agent = {
    id,
    name,
    task,
    status: 'idle',
    steps: [],
    createdAt: new Date(),
  };
  
  agents.set(id, agent);
  return agent;
}

export function getAgent(id: string): Agent | undefined {
  return agents.get(id);
}

export function getAllAgents(): Agent[] {
  return Array.from(agents.values());
}

export async function runAgent(id: string): Promise<void> {
  const agent = agents.get(id);
  if (!agent) throw new Error('Agent not found');
  
  agent.status = 'running';
  
  const steps = generateStepsFromTask(agent.task);
  agent.steps = steps;
  
  for (const step of steps) {
    step.status = 'running';
    step.startedAt = new Date();
    
    await simulateStepExecution(step);
    
    step.status = 'completed';
    step.completedAt = new Date();
  }
  
  agent.status = 'completed';
  agent.completedAt = new Date();
}

function generateStepsFromTask(task: string): Step[] {
  const steps: Step[] = [
    {
      id: '1',
      description: 'Analyzing task requirements',
      status: 'pending',
    },
    {
      id: '2',
      description: 'Breaking down into subtasks',
      status: 'pending',
    },
    {
      id: '3',
      description: 'Executing main task logic',
      status: 'pending',
    },
    {
      id: '4',
      description: 'Generating final output',
      status: 'pending',
    },
  ];
  
  return steps;
}

async function simulateStepExecution(step: Step): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 2000));
  step.output = `Completed: ${step.description}`;
} 
