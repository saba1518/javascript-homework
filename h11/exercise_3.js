
async function getProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
        throw Error(`Product ${id} not found (status ${response.status})`);
    }

    return await response.json();
}

const ids = [11, 12, 13, 14, 15];

async function getOneByOne(ids) {
    const products = [];

    for (const id of ids) {
        products.push(await getProduct(id));
    }

    return products;
}

async function getAllAtOnce(ids) {
    return await Promise.all(ids.map(id => getProduct(id)));
}

async function main() {
    let start = Date.now();
    const slow = await getOneByOne(ids);
    const slowMs = Date.now() - start;

    start = Date.now();
    const fast = await getAllAtOnce(ids);
    const fastMs = Date.now() - start;

    console.log("titles:", fast.map(product => product.title));

    console.log(
        "same result:",
        slow.map(p => p.id).join() === fast.map(p => p.id).join()
    );

    console.log(
        "total:",
        fast.reduce((sum, product) => sum + product.price, 0).toFixed(2)
    );

    console.log("all at once is faster:", fastMs < slowMs);
}

main();

