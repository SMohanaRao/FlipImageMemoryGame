let images = []
for(let i = 1; i <= 6; i++) {
    images.push(require(`../Images/Flower${i}.jpg`))
}
export const cardImages = [...images, ...images]