# List

```js

  import { List } from "data_structures_and_algorithms_javascript"

  const moviesList = new List();
  moviesList.append('Interstellar');
  moviesList.append('Shutter Island');
  moviesList.append('Inception');
  console.log(moviesList.toString()) // ['Interstellar', 'Shutter Island', 'Inception']

  moviesList.clear();
  console.log(moviesList.toString()) // []

  moviesList.remove('Inception');
  console.log(moviesList.toString()) // ['Interstellar', 'Shutter Island']


```


# Stack

```js

  import { Stack } from "data_structures_and_algorithms_javascript"

  const tasksStack = new Stack(); // []
  tasksStack.push('To Do 1'); // ['To Do 1']
  tasksStack.push('To Do 2'); // ['To Do 1', 'To Do 2']
  tasksStack.push('To Do 3'); // ['To Do 1', 'To Do 2', 'To Do 3']
  const task1 = tasksStack.pop(); // task = 'To Do 3' & tasksStack = ['To Do 1','To Do 2']
  const task2 = tasksStack.peak(); // task = 'To Do 2' & tasksStack = ['To Do 1','To Do 2']
  tasksStack.length() // 2

```



# Queue

```js

  import { Queue } from "data_structures_and_algorithms_javascript"

  const people = new Queue(); // []
  people.enqueue('Person 1'); // ['Person 1']
  people.enqueue('Person 2'); // ['Person 1', 'Person 2']
  people.enqueue('Person 3'); // ['Person 1', 'Person 2', 'Person 3']
  people.length() // 3
  const person1 = people.dequeue(); // 'Person 1'
  people.enqueue(person1);  // ['Person 2', 'Person 3', 'Person 1']
  people.back() // 'Person 1'
  people.front() // 'Person 2'
  people.empty() // false

```


# LinkedList

```js

  import { LinkedList } from "data_structures_and_algorithms_javascript"

  const cities = new LinkedList();
  cities.insert('Tehran', 'head');
  cities.insert('LA', 'Tehran');
  cities.insert('London', 'LA');
  cities.insert('Amsterdam', 'London');
  cities.find('Amsterdam') // Node {element: "Amsterdam", nextElement: null}
  cities.remove('Amsterdam');
  cities.find('Amsterdam') // null
  cities.findPrevious('Amsterdam') // Node {element: "London", nextElement: null}

```
