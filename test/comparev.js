
var should = require('should');
var comparev = require('../lib/index');

describe('should compare() work', function() {
  it('should return 1 when v1 > v2', function() {
    comparev('0.8.10', '0.8.3').should.equal(1);
    comparev('0.9.1', '0.8.30').should.equal(1);
    comparev('0.9.11', '0.8.30').should.equal(1);
    comparev('0.92.11', '0.10.389').should.equal(1);
    comparev('1.7.11', '0.8.30').should.equal(1);
    comparev('1.7.11', '1.3.30').should.equal(1);
    comparev('1.7.11', '1.7.3').should.equal(1);
    comparev('1.217.9', '1.7.3').should.equal(1);
    comparev('0.10.11', '0.9.389').should.equal(1);
    comparev('1.0.0', '0.99.999').should.equal(1);
  });

  it('should return 0 when v1 = v2', function() {
    comparev('0.8.1', '0.8.1').should.equal(0);
  });

  it('should return -1 when v1 < v2', function() {
    comparev('1.7.11', '1.13.30').should.equal(-1);
    comparev('0.8.1', '0.8.3').should.equal(-1);
    comparev('0.9.11', '0.10.3').should.equal(-1);
    comparev('0.92.11', '0.100.3').should.equal(-1);
    comparev('1.7.11', '1.13.30').should.equal(-1);
    comparev('1.7.11', '1.7.39').should.equal(-1);
    comparev('1.7.9', '1.217.3').should.equal(-1);
  });
});