
export const stringify = (number) => {
  let string = number.toString();
  if (string.length === 1) { string = "0" + string};
  return string
}

export const stringify_pair = (pair) => {
  let x = stringify(pair[0]);
  let y = stringify(pair[1]);
  return x + y
}


export const numberize = (string) => {
  let x = parseInt(string.slice(0,2));
  let y = parseInt(string.slice(2,4));
  return [x, y]
}

// these functions take coordinates in 2-d array of integers

export const is_within_boundary = (coordinates) => {
  let x_coordinates = [];
  let y_coordinates = [];
  coordinates.map( coordinate =>  {
    x_coordinates.push(coordinate[1])
    y_coordinates.push(coordinate[0])
  });

  let x_min = Math.min.apply(Math, x_coordinates);
  let x_max = Math.max.apply(Math, x_coordinates);
  let y_min = Math.min.apply(Math, y_coordinates);
  let y_max = Math.max.apply(Math, y_coordinates);

  return (x_min > 0 && x_max < 11 && y_min > 0 && y_max < 16)
};


//this check is to be made against rotated coordinates. if they collide
//with existing blocks in the state, then no moves!
//used in reducer, since that is how we get the blocks array
//if true, then let them go. if not, stop!

export const hits_a_block = (coordinates, blocks) => {
  let struck = false;
  coordinates.every(coordinate => {
    if (blocks.includes(coordinate)) {
      struck = true;
    };
  })

  return struck;
}
