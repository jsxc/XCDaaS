import { Router } from 'express';

export default () => {
  const api = Router();

  api.get('/ping', async (req, res) => {
    return res.json({ ping: 'pong' });
  });

  return api;
};
