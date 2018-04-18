const ExtberryLib = require('../dist');

const Extberry = ExtberryLib.default;
const ExtberryPlatform = ExtberryLib.ExtberryPlatform;

ExtberryLib.mapExtberryToGlobalChrome();

describe('Test existing modules', () => {
    it('Extberry is ExtberryPlatform', (done) => {
        if (!Extberry instanceof ExtberryPlatform) {
            throw new Error("Extberry instance must be instance of ExtberryPlatform");
        }

        done();
    });
});