// lexical scope
function cryForHelp() {
    const plea = 'help me!';
    function offerPlea() {
        console.log(plea);
    }
    offerPlea();
}

cryForHelp();

// offer plea is not accessible
// offerPlea();
