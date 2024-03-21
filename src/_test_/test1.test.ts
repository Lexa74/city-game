import {
  CarsData,
  filterAndSortArr,
  filterDataByParam,
  getRand,
  getStringUppercase,
  plus,
  replaceCommas,
  sortedByPrice
} from '../forTesting/testFunctions'

describe('test', () => {
  test('return number', () => {
    expect(plus(1, 3)).toBe(4)
  })
})

describe('function getRand', () => {
  test('should min max rand number', () => {
    const min = 1
    const max = 10
    expect(getRand(min, max)).toBeGreaterThanOrEqual(1)
    expect(getRand(min, max)).toBeLessThanOrEqual(5)
    expect(getRand(min, max)).not.toBeGreaterThanOrEqual(max + 1)
  })
})

describe('function getStringUppercase', () => {
  test('return uppercase string', () => {
    const input = 'string'
    const output = 'STRING'
    expect(getStringUppercase(input)).toBe(output)
  })
})

describe('function replaceCommas', () => {
  test('should replace commas', () => {
    const input = 's.t,ri, ng,'
    const output = 's.tri ng'
    expect(replaceCommas(input)).toBe(output)
  })
})

describe('function sortedByPrice', () => {
  test('should sorted desc', () => {
    const input = [
      {
        id: 1,
        mileage: 19000,
        brand: 'BMW',
        price: 1300000,
        isNew: false
      },
      {
        id: 3,
        mileage: 0,
        brand: 'Nissan',
        price: 2000000,
        isNew: true
      },
      {
        id: 2,
        mileage: 0,
        brand: 'Opel',
        price: 1700000,
        isNew: true
      }
    ]
    const output = [
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
      }
    ]
    expect(sortedByPrice(input)).toEqual(output)
    expect(sortedByPrice(input)).toEqual(input)
  })
})

describe('function filterDataByParam', () => {
  it('should filter numbers by param', () => {
    const inputNumbers: number[] = [1, 2, 3, 4]
    const filterNumbers = (el: number) => {
      return el > 3
    }

    expect(filterDataByParam(inputNumbers, filterNumbers)).toHaveLength(1)
    expect(filterDataByParam(inputNumbers, filterNumbers)).toEqual([4])
  })

  it('should filter array by param', () => {
    const inputArray: CarsData[] = [
      {
        id: 1,
        mileage: 19000,
        brand: 'BMW',
        price: 1300000,
        isNew: false
      },
      {
        id: 3,
        mileage: 0,
        brand: 'Nissan',
        price: 2000000,
        isNew: true
      },
      {
        id: 2,
        mileage: 0,
        brand: 'Opel',
        price: 1700000,
        isNew: true
      }
    ]
    const filterPrice = (el: CarsData) => {
      return el.price > 1300000
    }
    expect(filterDataByParam(inputArray, filterPrice)).toHaveLength(2)
    expect(filterDataByParam(inputArray, filterPrice)).not.toEqual([
      {
        id: 1,
        mileage: 19000,
        brand: 'BMW',
        price: 1300000,
        isNew: false
      }
    ])
    expect(filterDataByParam(inputArray, filterPrice)).toEqual([
      {
        id: 3,
        mileage: 0,
        brand: 'Nissan',
        price: 2000000,
        isNew: true
      },
      {
        id: 2,
        mileage: 0,
        brand: 'Opel',
        price: 1700000,
        isNew: true
      }
    ])
  })
})

describe('function filterAndSortArr', () => {
  it('should sorted and filtered array only for cars', () => {
    const inputArray: CarsData[] = [
      {
        id: 1,
        mileage: 19000,
        brand: 'BMW',
        price: 1300000,
        isNew: false
      },
      {
        id: 3,
        mileage: 0,
        brand: 'Nissan',
        price: 2000000,
        isNew: true
      },
      {
        id: 2,
        mileage: 0,
        brand: 'Opel',
        price: 1700000,
        isNew: true
      }
    ]
    const output = filterAndSortArr(inputArray)

    expect(output).toHaveLength(2)
    expect(output[output.length - 1]).toEqual({
      id: 2,
      mileage: 0,
      brand: 'Opel',
      price: 1700000,
      isNew: true
    })
    expect(output).toEqual([
      {
        id: 3,
        mileage: 0,
        brand: 'Nissan',
        price: 2000000,
        isNew: true
      },
      {
        id: 2,
        mileage: 0,
        brand: 'Opel',
        price: 1700000,
        isNew: true
      }
    ])
  })
})
