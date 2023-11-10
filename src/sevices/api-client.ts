import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1d953160fea0478a9d5de42d14d856a8"
    }
})

