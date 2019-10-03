import {map} from 'rxjs/operators';

export function sortBy(collection, mapTo) {
  return collection.sort((item1, item2) => {
    item1 = mapTo(item1);
    item2 = mapTo(item2);
    return item1 > item2 ? -1 : item1 < item2 ? 1 : 0;
  });
}

export function sortByOperator(key) {
  return map((list) => {
    return sortBy(list, (item) => {
      return new Date(item[key]);
    });
  });
}
