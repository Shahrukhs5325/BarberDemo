import axios from 'axios'
import { Auth } from 'aws-amplify';


const currentSession = async () => {
    try {
        const data = await Auth.currentSession();
        return data
    } catch (err) {
        console.log(err);
        return null;
    }
}

const instance = axios.create({
    baseURL: "http://ezygen-technology-bluebill-prod-env.ap-south-1.elasticbeanstalk.com/ezygentechnology/"
})

// global request from all apis,
instance.interceptors.request.use(
    async (config) => {
        // config.headers.Accept = "application/json";
        // config.headers['Content-Type'] = 'application/json';
        const token: any = await currentSession();

        if (token) {
            config.headers.Authorization = `Bearer ${token?.idToken.jwtToken}`;
        }

        // console.log("\n\n\n** url **\n",(API_URL+config?.url))
       // console.log("\n\n\n** token **\n", (token?.accessToken?.jwtToken))
        return config;
    },
    (error) => Promise.reject(error)
),

    // global response from all apis
    instance.interceptors.response.use(
        async (response) => {
            return response
        },

        (error) => {
            if ([401].includes(error.response.status)) {
                console.log("Invalid token or expired token.");

            }
            return Promise.reject(error)
        }
    )

export default instance