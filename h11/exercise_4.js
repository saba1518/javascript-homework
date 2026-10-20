
async function searchProducts(word) {
    const response = await fetch(
        `https://dummyjson.com/products/search?q=${word}&limit=5`
    );

    if (!response.ok) {
        throw Error(`Search failed (status ${response.status})`);
    }

    const data = await response.json();
    return data.products;
}

async function main() {
    try {
        const products = await searchProducts("phone");

        console.log("found:", products.length);
        console.log("titles:", products.map(product => product.title));

        if (products.length > 0) {
            const cheapest = products.reduce((a, b) =>
                a.price < b.price ? a : b
            );

            console.log(`cheapest: ${cheapest.title} · $${cheapest.price}`);
        }

        const nothing = await searchProducts("qwertyuiop");

        if (nothing.length === 0) {
            console.log("nothing: no results");
        }
    } catch (error) {
        console.log("error:", error.message);
    }
}

main();

