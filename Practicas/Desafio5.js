const cars = [
    {
      color: 'red',
      brand: 'Kia',
    },
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    },
    {
      licensePlate: 'RGB255',
    },
  ];
  
function solution(cars) {
    return cars.filter(function (car) {
        if (car.licensePlate) {
            return true;
        } 
    else {
        return false;
    }
});
}

solution(cars);