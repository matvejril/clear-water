function toInputFormat(d) {
    return new Date(d).toISOString().substr(0, 10);
}

module.exports = toInputFormat;
