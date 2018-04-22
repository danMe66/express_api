class baseController {
    constructor(res) {
        this.res = res
        this.results = {
            result: 0,
            desc: 'successful',
            content: null
        }
    }

    json(status, data) {
        return this.res.json(status, this.results(data))
    }

}

module.exports = baseController