# Import

```js

// import 
import { List } from "data_structures_and_algorithms_javascript"

```

# List

```js

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

  const tasksStack = new Stack(); // []
  tasksStack.push('To Do 1'); // ['To Do 1']
  tasksStack.push('To Do 2'); // ['To Do 1', 'To Do 2']
  tasksStack.push('To Do 3'); // ['To Do 1', 'To Do 2', 'To Do 3']
  const task1 = tasksStack.pop(); // task = 'To Do 3' & tasksStack = ['To Do 1','To Do 2']
  const task2 = tasksStack.peak(); // task = 'To Do 2' & tasksStack = ['To Do 1','To Do 2']
  tasksStack.length() // 2
  
```