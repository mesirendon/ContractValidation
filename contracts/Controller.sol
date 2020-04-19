pragma solidity >= 0.5.0 < 0.7.0;

import "./MarketInterface.sol";

contract Controller {
  address owner;
  mapping(address => bool) public markets;
  event valid(address _contractAddress, bool _valid, address _sender);

  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Action performed by non-owner");
    _;
  }

  function addMarket(address _market) public onlyOwner {
    MarketInterface marketInterface = MarketInterface(_market);
    emit valid(_market, marketInterface.initialized(), msg.sender);
    markets[_market] = true;
  }
}
