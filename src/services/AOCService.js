export default new class AOCService {

    #genericGETFetchText(path) {
        return fetch(path)
            .then((res) => {
                return res.text();
            })
            .catch((res) => {
                return "no info data found " + res;
            });
    }

    #genericGETFetchJson(path) {
        return fetch(path)
            .then((res) => {
                return res.json();
            })
            .catch((res) => {
                return {res};
            })
    }

    #genericPOSTFetch(path, body) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: body,
        }

        return fetch(path, requestOptions)
            .then((res) => {
                return res.text();
            })
            .catch((res) => {
                return "no info data found " + res;
            });
    }


    async getAOCInfo(year, day) {
        return await this.#genericGETFetchJson(`/api/aoc/${year}/${day}`);
    }

    async getAOCCode(year, day) {
        return await this.#genericGETFetchText(`/api/aoc/getCode/${year}/${day}`);
    }

    async getAOCInput(year, day) {
        return await fetch(`/api/aoc/getInput/${year}/${day}`)
            .then((res) => res.json())
            .then((res) => {
                return res.input;
            })
            .catch((res) => {
                return "no info data found " + res;
            });
    }

    async setAOCInput(year, day, input) {
        return await this.#genericPOSTFetch(`/api/aoc/setInput/${year}/${day}`, input);
    }
}