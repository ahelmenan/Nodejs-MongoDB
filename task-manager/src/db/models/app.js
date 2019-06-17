const car = [
    {
        name : 'BMW',
        rank : 60.3
    },
    {
        name : 'AUDI',
        rank : 43.7
    },
    {
        name : 'volkswagen',
        rank : 50.2
    },
    {
        name : 'volkswagen',
        rank : 50.2
    } ,
    {
        name : 'volkswagen',
        rank : 50.2
    } ,
    {
        name : 'volkswagen',
        rank : 50.2
    } 
]

const sortByRank = () => car.sort((x, y) => x.rank - y.rank);
console.log(sortByRank());

const averageRank = () => {
    let total = 0;
    let average = 0;
    
    for (let i = -1; ++i < car.length;)
        total += car[i].rank;
    return average = Number((total / car.length).toFixed(1));
}
console.log(averageRank());






 
