# Import

```js

// import 
import { List } from "data_structures_and_algorithms_javascript"

```

# Usage

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