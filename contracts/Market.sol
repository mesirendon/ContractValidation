pragma solidity >= 0.5.0 < 0.7.0;

import "./MarketInterface.sol";

contract Market is MarketInterface {
  constructor() public {
    initialized = true;
  }
}
