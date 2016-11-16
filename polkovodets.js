function stringify(number) {
  let string = number.toString();
  if (string.length === 1) { string = "0" + string};
  return string
}

function stringify_pair(pair) {
  let x = stringify(pair[0]);
  let y = stringify(pair[1]);
  return x + y
}


function numberize(string) {
  let x = parseInt(string.slice(0,2));
  let y = parseInt(string.slice(2,4));
  return [x, y]
}


function rotate(string_coordinates) {
  let coordinates = string_coordinates.map(numberize)
  let origin = coordinates[0];
  let outer_coordinates = coordinates.splice(1,3);

  let cartesian_coordinates = [];
  outer_coordinates.map(coordinate => {
    let x = coordinate[0] - origin[0];
    let y = coordinate[1] - origin[1];
    cartesian_coordinates.push([x, y])
  })

  let rotated_cartesian_coordinates = [];
  cartesian_coordinates.map(coordinate => {
    let rotated_x = -1*coordinate[1];
    let rotated_y = coordinate[0];
    rotated_cartesian_coordinates.push([rotated_x,rotated_y])
  });

  let rotated_outer_coordinates = [];
  rotated_cartesian_coordinates.map(coordinate => {
    let rotated_x = origin[0]+coordinate[0];
    let rotated_y = origin[1]+coordinate[1];
    rotated_outer_coordinates.push([rotated_x,rotated_y])
  });

  let rotated_coordinates = [origin].concat(rotated_outer_coordinates);
  return rotated_coordinates.map(stringify_pair);
}


b = rotate( ["1204", "1205", "1305", "1306"])

// function rotate(block_coordinates) {
//   let origin = block_coordinates[0];
//   let outer_coordinates = block_coordinates.splice(1,3);
//   let rotated_coordinates = []
//
//   outer_coordinates.map(coordinate => {
//     let x = parseInt(coordinate.slice(0,2));
//     let y = parseInt(coordinate.slice(2,4));
//     rotated_x = -1*y;
//     rotated_y = x;
//     rotated_coordinate = stringify(rotated_x) + stringify(rotated_y);
//     rotated_coordinates.push(rotated_coordinate);
//   })
//
//   return origin.concat(rotated_coordinates);
// }
