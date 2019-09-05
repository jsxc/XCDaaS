import discoverXMPPServices from 'xmpp-connection-discovery';

(async () => {
  const result = await discoverXMPPServices('uni-konstanz.de');
  console.log('RESULT >', result);
})();
