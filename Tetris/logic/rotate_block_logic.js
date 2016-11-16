import {stringify,
        stringify_pair,
        numberize,
        is_within_boundary
} from './block_utilities_logic';


export const rotate = (string_coordinates) => {
  let coordinates = string_coordinates.map(numberize)

  let origin = coordinates[0];
  let outer_coordinates = coordinates.splice(1,3);

  let cartesian_coordinates = [];
  outer_coordinates.map(coordinate => {
    let x = coordinate[0] - origin[0];
    let y = coordinate[1] - origin[1];
    cartesian_coordinates.push([x, y])
  });

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

  if (!is_within_boundary(rotated_coordinates)) {
    return string_coordinates
  };

  return rotated_coordinates.map(stringify_pair);
}

export default rotate;
