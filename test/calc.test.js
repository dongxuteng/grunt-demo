describe('面积计算功能的测试', function() {
  it('area(10, 5) = 50', function() {
        var r = rectangle();
        expect(r.area(10, 5)).to.be.equal(50);
              
  });

  it('area("10", "5") = 50', function() {
        var r = rectangle();
        expect(r.area("10", "5")).to.be.equal(50);
              
  });

});
