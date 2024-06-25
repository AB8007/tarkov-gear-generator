export const randomizeItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomItem = array[randomIndex]
    console.log(randomItem)
    return randomItem;
}

export default randomizeItem