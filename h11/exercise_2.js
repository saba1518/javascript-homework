
async function getProduct(id, baseUrl = "https://dummyjson.com") {
    const response = await fetch(`${baseUrl}/products/${id}`);

    if (!response.ok) {
        throw Error(`Product ${id} not found (status ${response.status})`);
    }

    return await response.json();
}

async function safeGetProduct(id, baseUrl) {
    console.log(`loading ${id}...`);

    try {
        return await getProduct(id, baseUrl);
    } catch (error) {
        console.log("failed:", error.message);
        return null;
    } finally {
        console.log(`finished ${id}`);
    }
}

async function main() {
    const good = await safeGetProduct(2);
    console.log("good:", good.title);

    const missing = await safeGetProduct(9999);
    console.log("missing:", missing);

    const offline = await safeGetProduct(2, "https://dummyjson.invalid");
    console.log("offline:", offline);
}

main();


