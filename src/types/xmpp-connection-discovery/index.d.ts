declare module 'xmpp-connection-discovery' {
  function discoverXMPPServices(
    domain: string,
  ): Promise<{
    tcp: [{ server: string; port: number }];
    websocket: [{ server: string }];
    xbosh: [{ server: string }];
  }>;

  export = discoverXMPPServices;
}
