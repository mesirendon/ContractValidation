# Contracts validation

This simple repo works on top of TDD in order to guarantee that an `address` passed as parameter to a function is actually an address that belongs to a specific SmartContract type.

## Setup

Just clone this repo, install the project dependencies and run the tests:

### Dependencies

You should have truffle and ganache installed running on top node v10+.

```bash
$ npm i -g truffle ganache-cli
```

### Installation and running up

In a console get ganache working

```bash
$ ganache-cli
```

In other console

```bash
$ git clone git@github.com:mesirendon/ContractValidation.git
$ cd ContractValidation
$ npm i
$ truffle test
```
