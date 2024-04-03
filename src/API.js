import axios from 'axios';

const Key = '1faeae1c6647a2f459db294c369e313e696258da71d050cce2d726f444266fc713f7fa5089733201b710b6dbbbc8d2aef73445ddcf7ab6d927d6d6b6c524c3e884d2239a60982e3ec283cb5f22edba8724c66398fd64217b204b7a887f3b1a26172f58083b0e83fa8cd345de1f7b57c34d601440372d3bd77b3adeac2db993c5';
const URL = "http://localhost:1337/api/"

export async function managerAPI() {
    const result = await axios.get(`${URL}managers?populate[newHire]=*&populate[teamLearning=*]`,{
        headers: {
            Authorization: Key,
        },
        credential: true,
    })
    .then((response) => response)
    .catch((errors) => errors);
    return (result)
}