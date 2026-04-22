window.onload = goFetch;
async function goFetch() {
    try {

        let parsedResultJS = await response.json();
        console.log(parsedResultJS)
    }
    catch (err) {
        console.log(err)
    }
}