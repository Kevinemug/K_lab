const item = [

    { name: 'Bike', price: 100 }, 

    { name: 'TV', price: 200 }, 

    { name: 'Album', price: 10 }, 

    { name: 'Book', price: 5 }, 

    { name: 'Phone', price: 500 }, 

    { name: 'Computer', price: 1000 }

];



function cheapestItem(array) {



    let low = array[0].price;

    let lowName=array[0].name;



    for (let i=0; i<array.length; i++){



        if (array[i].price <= low){

            low = array[i].price;

            lowName=array[i].name;

        }



    }

    

     return `The cheapest item is ${lowName} costs ${low}.`;

}



function expensiveItem(array) {

    let high = array[0].price;

    let highname=array[0].name;

    for (let i=0; i<array.length; i++){



        if (array[i].price >= high){

            high = array[i].price;

            highname=array[i].name;

        }



    }

    

     return `The most expensive item is ${highname} costs ${high}.`;

}



function totalPrice(array){

    let total_price = 0;



    for (let i=0; i<array.length; i++){



        total_price += array[i].price;



    }



    return `The total price is ${total_price}.`;

}



function totalBelowTen(array){

    let total_price = 0;



    for (let i=0; i<array.length; i++){

        if (array[i].price < 10){

            continue;

        }



        else {

            total_price += array[i].price;

        }

    }



    return `The total cost of products above $10 is ${total_price}`;

}



console.log(cheapestItem(item));

console.log(expensiveItem(item));

console.log(totalPrice(item));

console.log(totalBelowTen(item));
