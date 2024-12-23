# Apple Private Cloud Compute (PCC)

Dont' understand:
1. Secure Boot
2. Secure Enclave Processor (SEP)

Key features:
1. the node can attest to the software it's running (cryptographic keys allow you to know that the device is only running that publicly available image)

When your phone wants to do a task, it contacts Apple to get a list of nodes that can handle that task. You get a list of servers/nodes and their keys. You then encrypt your request and 1 node will process it. They use a 3rd party relay to hide your IP, and anonymous credentials.