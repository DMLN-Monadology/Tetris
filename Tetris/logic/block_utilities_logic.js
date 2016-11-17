
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

  return (x_min > 0 && x_max < 11 && y_min > 0 && y_max < 20)
};


//this check is to be made against rotated coordinates. if they collide
//with existing blocks in the state, then no moves!
//used in reducer, since that is how we get the blocks array
//if true, then let them go. if not, stop!

export const hits_a_block = (string_coordinates, blocks) => {
  let coordinates = string_coordinates.map(numberize)

  let blocks_below = [];

  coordinates.map( coordinate => {
    blocks_below.push([coordinate[0]-1, coordinate[1]])
  });

  blocks_below = blocks_below.map(stringify_pair);

  let struck = false;

  blocks_below.forEach(coordinate => {
    if (blocks.includes(coordinate)) {
      struck = true;
    };
  })

  return struck;
}

export const move_all_blocks_down = (blocks, row_num) => {
  let coordinates = blocks.map(numberize);

  let deleted_row = parseInt(row_num);

  let shifted_blocks = [];

  coordinates.map ( coordinate => {
    if (coordinate[0] > deleted_row) {
      shifted_blocks.push([coordinate[0] - 1, coordinate[1]])
    } else {
      shifted_blocks.push(coordinate)
    };
  })
  return shifted_blocks.map(stringify_pair);
};
