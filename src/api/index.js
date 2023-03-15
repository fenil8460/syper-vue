import axios from 'axios';

const RestGetProduct = async () => {
    const productResult = await axios.get(
        `https://beta.the-syringe.com/api/job-category/nursing-jobs`
    )
    return productResult?.data?.results
}

export default RestGetProduct;