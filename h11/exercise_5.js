
async function getPrice(id) {

    const response = await fetch(`https://dummyjson.com/products/${id}`);


    if (!response.ok) {
        throw Error(`Product ${id} not found (status ${response.status})`);
    }

    const product = await response.json();
    return product.price;
}

async function getTotal(ids) {
    let total = 0;

   
    for (const id of ids) {
        total += await getPrice(id);
    }

    return total;
}

async function main() {
    try {
        console.log("total:", (await getTotal([1, 2, 3])).toFixed(2));
        console.log("price 9999:", await getPrice(9999));
    } catch (error) {

        console.log("error:", error.message);
    }
}

main();
