const Controller = artifacts.require('Controller');
const Market = artifacts.require('Market');
const NonMarket = artifacts.require('NonMarket');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

contract('Controller', (accounts) => {
  const [
    owner,
    alice,
    bob,
    charlie,
  ] = accounts;
  describe('one market', () => {
    beforeEach(async () => {
      this.controller = await Controller.new();
      this.market = await Market.new();
      this.nonMarket = await NonMarket.new();
    });
    it('should allow the owner to add a new market', () => {
      return this.controller.addMarket(this.market.address)
        .then((response) => expect(response.tx).to.match(/0x[a-fA-F0-9]{64}/))
        .then(() => this.controller.markets(this.market.address))
        .then((response) => expect(response).to.be.true);
    });
    it('should avoid non-owners adding new markets', () => {
      return expect(this.controller.addMarket(this.market.address, {from: alice}))
        .to.be.eventually.rejected;
    });
    it('should avoid adding non markets contracts', () => {
      return expect( this.controller.addMarket(this.nonMarket.address) )
        .to.be.eventually.rejected;
    });
  });
});
