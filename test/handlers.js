'use strict';

const { expect } = require('code');
const Lab = require('lab');
const Handlers = require('../lib/handlers');

const lab = exports.lab = Lab.script();
const { describe, it } = lab;
const Joi = require('joi');

describe('handlers', () => {
  it('loads up all the handlers', async () => {
    const schema = Joi.object().keys({
      config: Joi.func().arity(1),
      updateConfig: Joi.func().arity(2),
      datacenter: Joi.func().arity(3),
      datacenters: Joi.func().arity(1),
      vlan: Joi.func().arity(2),
      vlans: Joi.func().arity(2),
      createVLAN: Joi.func().arity(2),
      updateVLAN: Joi.func().arity(2),
      deleteVLAN: Joi.func().arity(2),
      network: Joi.func().arity(2),
      networks: Joi.func().arity(2),
      createNetwork: Joi.func().arity(2),
      deleteNetwork: Joi.func().arity(2),
      firewall_rule: Joi.func().arity(2),
      firewall_rules: Joi.func().arity(1),
      firewall_rules_create_machine: Joi.func().arity(2),
      createFirewallRule: Joi.func().arity(2),
      updateFirewallRule: Joi.func().arity(2),
      enableFirewallRule: Joi.func().arity(2),
      disableFirewallRule: Joi.func().arity(2),
      deleteFirewallRule: Joi.func().arity(2),
      image: Joi.func().arity(2),
      images: Joi.func().arity(2),
      createImageFromMachine: Joi.func().arity(2),
      updateImage: Joi.func().arity(2),
      deleteImage: Joi.func().arity(2),
      exportImage: Joi.func().arity(2),
      key: Joi.func().arity(2),
      keys: Joi.func().arity(2),
      createKey: Joi.func().arity(2),
      deleteKey: Joi.func().arity(2),
      enableMachineFirewall: Joi.func().arity(2),
      disableMachineFirewall: Joi.func().arity(2),
      metadataValue: Joi.func().arity(2),
      metadata: Joi.func().arity(2),
      updateMachineMetadata: Joi.func().arity(2),
      deleteMachineMetadata: Joi.func().arity(2),
      deleteAllMachineMetadata: Joi.func().arity(2),
      nic: Joi.func().arity(2),
      nics: Joi.func().arity(2),
      addNic: Joi.func().arity(2),
      removeNic: Joi.func().arity(2),
      snapshot: Joi.func().arity(2),
      snapshots: Joi.func().arity(2),
      createMachineSnapshot: Joi.func().arity(2),
      startMachineFromSnapshot: Joi.func().arity(2),
      deleteMachineSnapshot: Joi.func().arity(2),
      tag: Joi.func().arity(2),
      tags: Joi.func().arity(2),
      addMachineTags: Joi.func().arity(2),
      replaceMachineTags: Joi.func().arity(2),
      deleteMachineTag: Joi.func().arity(2),
      deleteMachineTags: Joi.func().arity(2),
      machine: Joi.func().arity(2),
      machines: Joi.func().arity(2),
      actions: Joi.func().arity(2),
      stopMachine: Joi.func().arity(2),
      startMachine: Joi.func().arity(2),
      rebootMachine: Joi.func().arity(2),
      resizeMachine: Joi.func().arity(2),
      renameMachine: Joi.func().arity(2),
      createMachine: Joi.func().arity(2),
      deleteMachine: Joi.func().arity(2),
      packages: Joi.func().arity(2),
      package: Joi.func().arity(2),
      policy: Joi.func().arity(2),
      policies: Joi.func().arity(2),
      createPolicy: Joi.func().arity(2),
      updatePolicy: Joi.func().arity(2),
      deletePolicy: Joi.func().arity(2),
      rndName: Joi.func().arity(1),
      rndImageName: Joi.func().arity(1),
      role: Joi.func().arity(2),
      roles: Joi.func().arity(2),
      createRole: Joi.func().arity(2),
      updateRole: Joi.func().arity(2),
      deleteRole: Joi.func().arity(2),
      services: Joi.func().arity(1),
      account: Joi.func().arity(1),
      updateAccount: Joi.func().arity(2),
      user: Joi.func().arity(2),
      users: Joi.func().arity(2),
      createUser: Joi.func().arity(2),
      updateUser: Joi.func().arity(2),
      changeUserPassword: Joi.func().arity(2),
      deleteUser: Joi.func().arity(2)
    });

    const res = await Joi.validate(Handlers, schema, { abortEarly: false });
    expect(res).to.exist();
  });
});
