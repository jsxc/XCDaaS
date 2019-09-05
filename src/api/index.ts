import { Router } from 'express';
import discoverXMPPServices from 'xmpp-connection-discovery';

export default () => {
  const api = Router();

  api.get('/discover/:domain', async (req, res) => {
    const { domain } = req.params;

    try {
      /**
       *  FIXME: Update xmpp-connection-discovery package version
       *  when the publisher updates npm with the most recent code
       *  available on GitHub.
       *
       *  When an invalid domain is supplied,
       *  xmpp-connection-discovery does not behave nicely.
       *  This behavior is fixed on GitHub but not published
       *  on npm.
       */
      const services = await discoverXMPPServices(domain);

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
    res.status(404).json({
      error: { message: 'Not Found' },
      data: null,
    });
  });

  return api;
};
