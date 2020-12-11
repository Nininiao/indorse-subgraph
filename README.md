# indorse-subgraph
# Project description

Indorse is a revolutionary platform using new models of tokenization and decentralization to change the shape of professional social networking.

This is the subgraph, a collection of GraphQL schemas and mappings that parse the events broadcast by this subgraph on the Ethereum blockchain.

The smart contracts can be found here https://etherscan.io/address/0xf8e386eda857484f5a12e4b5daa9984e06e73705#code.

# Development
Before you can build, create and deploy this subgraph, you have to execute the following commands in the terminal:

$ yarn install

$ yarn prepare:mainnet

The first command installs all external dependencies, while the latter generates the subgraph.yaml file, which is required by The Graph.

The manual how to Build a Subgraph via Contract on Windows for a Non-Tech Curators you can find here https://ninadrokina.medium.com/how-to-build-a-subgraph-via-contract-on-windows-for-a-non-tech-curator-74d5d9e47e96
