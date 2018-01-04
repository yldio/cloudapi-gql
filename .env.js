'use strict';

const { homedir } = require('os');
const { join } = require('path');

const { SDC_URL, SDC_KEY_ID, SDC_KEY_PATH, SDC_ACCOUNT } = process.env;

process.env.SDC_KEY_PATH = SDC_KEY_PATH || join(homedir(), './.ssh/id_rsa');
process.env.SDC_KEY_ID = !(/^\//).test(SDC_KEY_ID || '')
  ? `/${SDC_ACCOUNT}/keys/${SDC_KEY_ID}`
  : SDC_KEY_ID;
