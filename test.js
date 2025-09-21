const cars = [ 
    { brand: "Toyota", year: 2018, color: "سفید", mileage: 45000 }, 
    { brand: "BMW", year: 2020, color: "مشکی", mileage: 28000 }, 
    { brand: "Hyundai", year: 2017, color: "نقره‌ای", mileage: 60000 }, 
    { brand: "Kia", year: 2019, color: "قرمز", mileage: 35000 }, 
    { brand: "Mercedes", year: 2021, color: "آبی", mileage: 15000 }, 
    { brand: "Peugeot", year: 2016, color: "خاکستری", mileage: 72000 }, 
    { brand: "Honda", year: 2018, color: "سبز", mileage: 41000 }, 
    { brand: "Nissan", year: 2022, color: "سفید", mileage: 5000 }, 
    { brand: "Ford", year: 2015, color: "مشکی", mileage: 88000 }, 
    { brand: "Chevrolet", year: 2019, color: "طلایی", mileage: 33000 } ]

    
            

    const newest = cars.reduce((firstCar,secondCar) => {
        if( firstCar.year>secondCar.year){ return firstCar;}else
        {return secondCar;}
    })
    console.log("جواب سوال1:",newest);


    const high=
        cars.filter(function (highmileage)
        {
            return highmileage.mileage>50000;});
            console.log("جواب سوال 2:",high);


            const average = cars.reduce((firstCar, secondCar)=>
                firstCar + secondCar.mileage/cars.length
            ,0);
            console.log("جواب سوال 3:",average);


            const ordered= cars.sort((car1,car2)=> car1.year - car2.year)
            console.log("جواب سوال 4:",ordered);
            
            
            const plus= cars.map((car)=>car.mileage+1000)
            console.log("جواب6",plus);
            

            const bmw = cars.map(car =>
            {
                if(car.brand==="BMW") {
                    return {...car , color:"نقره ای"};
                }
                return car
            });
            console.log("جواب 5",bmw);
            
















