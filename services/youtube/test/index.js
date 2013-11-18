var expect = require('expect.js'),
    youtube = require('..');

describe('youtube', function () {
    var config = {
        apiKey:'AIzaSyBL6PS3qcjaI4KSCrysejNsFHNQkHtXShs'
    };
    it('should define a search function', function (done) {
        expect(youtube(config).search).to.be.a(Function);
        done();
    });

    it('should get search results', function(done){
        var service = youtube(config);
        service.search('CK', function(err, results){
            expect(err).to.be(null);
            expect(results.items.length).to.be(10);
            done();
        });
    });

});
