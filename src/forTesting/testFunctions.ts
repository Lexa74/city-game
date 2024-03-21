export interface CarsData {
  id: number
  mileage: number
  brand: string
  price: number
  isNew: boolean
}

export const cars: CarsData[] = [
  {
    id: 1,
    mileage: 19000,
    brand: 'BMW',
    price: 1300000,
    isNew: false
  },
  {
    id: 2,
    mileage: 0,
    brand: 'Opel',
    price: 1700000,
    isNew: true
  },
  {
    id: 3,
    mileage: 0,
    brand: 'Nissan',
    price: 2000000,
    isNew: true
  },
  {
    id: 4,
    mileage: 1000,
    brand: 'Skoda',
    price: 1500000,
    isNew: false
  },
  {
    id: 5,
    mileage: 2000,
    brand: 'Mazda',
    price: 1500000,
    isNew: false
  },
  {
    id: 6,
    mileage: 10000,
    brand: 'Maserati',
    price: 2300000,
    isNew: false
  },
  {
    id: 7,
    mileage: 8000,
    brand: 'Subaru',
    price: 1500000,
    isNew: false
  },
  {
    id: 8,
    mileage: 15000,
    brand: 'Opel',
    price: 2700000,
    isNew: false
  },
  {
    id: 9,
    mileage: 5000,
    brand: 'Subaru',
    price: 1900000,
    isNew: false
  }
]

// 1 Сложить два входящих числа
export function plus(x: number, y: number) {
  return x + y
}

// 2 получить рандомное число
export function getRand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 3 Преобразовать строку в верхний регистр
export function getStringUppercase(string: string) {
  return string.toUpperCase()
}

// 4 Убрать все запятые из строки
export function replaceCommas(string: string) {
  return string.replaceAll(',', '')
}

// 5 Отсортировать массив
export function sortedByPrice(data: CarsData[]) {
  return [...data].sort((a, b) => a.price - b.price)
}

sortedByPrice(cars)

// 6 Отфильтровать массив
export function filterDataByParam<T>(data: T[], ruleFunc: (el: T) => boolean) {
  return data.filter(ruleFunc)
}

const filterCarsByPrice = (el: CarsData) => {
  return el.price > 10000
}

const filterCarsByBrand = (el: CarsData) => {
  return el.brand === 'Opel'
}

const test = (el: number) => {
  return el > 5
}

const test1 = (el: string) => {
  return el === '4'
}

filterDataByParam<CarsData>(cars, filterCarsByPrice)
filterDataByParam<CarsData>(cars, filterCarsByBrand)
filterDataByParam<number>([1, 2, 3, 4], test)
filterDataByParam<string>(['1', '2', '3', '4'], test1)
// 7 Найти конекретный элемент массива

// 8 Функция должна отсортировать и отфильтровать
export function filterAndSortArr(arr: CarsData[]) {
  return [...arr].filter((el) => el.isNew).sort((a, b) => b.price - a.price)
}

// 9 Функция высшего порядка

//
// export function sortData(data) {
//   return [...data].sort((el) => el.age - el.age)
// }
