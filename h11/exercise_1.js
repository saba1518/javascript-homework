
async function getProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
        throw Error(`Product ${id} not found (status ${response.status})`);
    }

    const product = await response.json();
    return product;
}

async function main() {
    const product = await getProduct(6);

    console.log("title:", product.title);
    console.log("price:", product.price);
    console.log("category:", product.category);

    try {
        await getProduct(9999);
    } catch (error) {
        console.log("error:", error.message);
    }
}

main();


