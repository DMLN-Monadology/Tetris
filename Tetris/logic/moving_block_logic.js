import {stringify,
        stringify_pair,
        numberize,
        is_within_boundary
} from './block_utilities_logic';

export const moveBlockLeft = (string_coordinates) => {
  let coordinates = string_coordinates.map(numberize)

  let shifted_coordinates = [];
  coordinates.map( coordinate => {
    shifted_coordinates.push([coordinate[0], coordinate[1]-1])
  });

  if (!is_within_boundary(shifted_coordinates)) {
    return string_coordinates
  };

  return shifted_coordinates.map(stringify_pair);
};

export const moveBlockRight = (string_coordinates) => {
  let coordinates = string_coordinates.map(numberize)

  let shifted_coordinates = [];

  coordinates.map( coordinate => {
    shifted_coordinates.push([coordinate[0], coordinate[1]+1])
  });

  if (!is_within_boundary(shifted_coordinates)) {
    return string_coordinates
  };

  return shifted_coordinates.map(stringify_pair);
};

export const moveBlockDown = (string_coordinates) => {
  let coordinates = string_coordinates.map(numberize)

  let shifted_coordinates = [];

  coordinates.map( coordinate => {
    shifted_coordinates.push([coordinate[0]-1, coordinate[1]])
  });

  if (!is_within_boundary(shifted_coordinates)) {
    return string_coordinates
  };

  return shifted_coordinates.map(stringify_pair);
};
