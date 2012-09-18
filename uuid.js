// generates an RFC4122, version 4, UUID
exports.generate = generate;
function generate() {
    return R(8) + "-" + R(4) + "-4" + R(3) + "-" + R(8) + R(4);
}

// generates up to 8 random digits in the upper-case hexadecimal alphabet
function R(n) {
    return (
        Math.random().toString(16) + "00000000"
    ).slice(2, 2 + n).toUpperCase();
}