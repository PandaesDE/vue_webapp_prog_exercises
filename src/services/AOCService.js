import axios from "axios";


export default new class AOCService {
    getAOCInfo(year, day) {
        let path = `${process.env.BACKEND_API_URL}/aoc/${year}/${day}`;
        console.log(path);
        return axios.get(path);
    }
}