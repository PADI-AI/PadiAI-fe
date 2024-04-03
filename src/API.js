import axios from 'axios';

const Key = "Bearer 439370833a80a9c1c8e5c31038b16238d92000e5421465ca61be325b7730480a621e6536cf721ab4f78095f25b33f7ecf2823603e0a6a0e7acf0bd6d534ce60a75f239a58017bfa2e3c45885563e6fb32cfe9a8d74386b9639da6030afc92c2f0a93ba38f9fa6c7daad18d2db9723078f9e71da769ed215d68a68d122514f7ca";
const URL = "http://localhost:1337/api/"

export async function managerAPI() {

    const result = await axios.get(`${URL}managers?populate[newHire]=*&populate[teamLearning]=*`,{
        headers: {
            Authorization: Key,
        },
        credential: true,
    })
    .then((response) => response)
    .catch((errors) => errors);
    return (result)
}