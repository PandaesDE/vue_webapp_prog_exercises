export default new class AOCService {

    #genericFetch(path) {
        return fetch(path)
            .then((res) => {
                return res.text();
            })
            .catch((res) => {
                return "no info data found " + res;
            });
    }


    async getAOCInfo(year, day) {
        return await this.#genericFetch(`/api/aoc/${year}/${day}`);
    }

    async getAOCCode(year, day) {
        return await this.#genericFetch(`/api/aoc/getCode/${year}/${day}`);
    }
}