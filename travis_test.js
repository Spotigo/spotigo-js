// a file that will contain the travis ci tests
// currently returns 0 to pass the tests

const Spotigo = require("./index");

var client = new Spotigo.Client(process.env.SPOTIGO_HOST, process.env.SPOTIGO_PASS);
function assert(condition, message) {
    if (!condition) {
        throw new AssertException(message);
    }
}
class AssertException {
    constructor(message) {
        this.name = 'AssertionError';
        this.message = message || "Assert failed.";
    }
}

assert(client.host != undefined, "Client failed to initialize");
console.log(process.env.SPOTIGO_HOST);
process.exit(0);
