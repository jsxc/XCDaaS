import { Router } from 'express';
import discoverXMPPServices from 'xmpp-connection-discovery';
import isEmpty from 'lodash.isempty';

export default () => {
  const api = Router();

  api.get('/discover/:domain', async (req, res) => {
    const { domain } = req.params;

    try {
      const services = await discoverXMPPServices(domain);

      if (isEmpty(services)) {
        return res.status(404).json({
          error: { message: 'XMPP Services Not Found' },
          data: null,
        });
      }

      return res.json({
        error: null,
        data: { services },
      });
    } catch (error) {
      return res.status(500).json({
        error: { message: 'Internal Server Error' },
        data: null,
      });
    }
  });

  api.use((req, res) => {
    return res.status(404).json({
      error: { message: 'Not Found' },
      data: null,
    });
  });

  return api;
};
