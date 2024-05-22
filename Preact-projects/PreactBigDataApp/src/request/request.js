
const URL = "https://us-east-2.aws.neurelo.com/rest/products"
const APIKEY = "neurelo_9wKFBp874Z5xFw6ZCfvhXfFXS+qEk0CNKigOZhTvsKrXiEJK9aDujgjK5TMVNC7B5beDFKhDF9bEKuCXeuAb/ulD3z4HN1DUVy0ygEdwfRsCe3g+pHL+XmJDQD8JOWa3jw0ALUJzEWYCoEJDzJj1LeNElodKD2lCqSgMx0Prbxw5mTcnDqMuxp02o6K2hJUY_lLfGmru/o7M5NSDdc/jQh0pijzEY3VG9J30d+wam0j8="

export const getAllProducts = async () => {
    const url = URL;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': APIKEY,
        },
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data
    } catch (error) {
        console.error(error);
    }
}
export default getAllProducts;

