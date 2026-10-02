#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "cryptojobslist",
  boardId: "cryptojobslist-official",
  domain: "cryptojobslist.com",
  npmName: "zc-cryptojobslist-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
