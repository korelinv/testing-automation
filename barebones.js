const assert = require('assert');


// should fail
(() => {
    let a = true;
    let b = false;

    assert(a === b, 'oh no!');
})();
