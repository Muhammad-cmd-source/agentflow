import express from 'express';
import cors from 'cors';
import { createAgent, getAgent, getAllAgents, runAgent } from './agent';
import { CreateAgentRequest } from './types';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/agents', async (req, res) => {
  try {
    const { name, task } = req.body as CreateAgentRequest;
    
    if (!name || !task) {
      return res.status(400).json({ error: 'Name and task are required' });
    }
    
    const agent = createAgent(name, task);
    
    runAgent(agent.id).catch(err => {
      console.error('Agent execution failed:', err);
    });
    
    res.status(201).json(agent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create agent' });
  }
});

app.get('/api/agents', (req, res) => {
  const agents = getAllAgents();
  res.json(agents);
});

app.get('/api/agents/:id', (req, res) => {
  const agent = getAgent(req.params.id);
  
  if (!agent) {
    return res.status(404).json({ error: 'Agent not found' });
  }
  
  res.json(agent);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
}); 
