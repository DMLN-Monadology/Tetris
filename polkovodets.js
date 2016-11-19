
resize block to 26x26
add min-height and width to modal
moving blocks left will merge blocks
  > adda  check to left and right shifts 


z-shape = [[12,04], [12,05], [13,05], [13,06]];
z-shape border_left = [[11,01], [11,02], [12,02], [12,03]];

blocks = ["0102","0104","0106","0107","0202"];
coordinates = ["0202","0303","0304","0404"];

const check_against_blocks = (coordinates, blocks) => {
  let allowed = true;
  coordinates.every(coordinate => {
    if (blocks.includes(coordinate)) {
      allowed = false;
    };
  })

  return allowed;
}

let blocks = ["0102","0104","0106","0107","0202"];
let bad_coordinates = ["0202","0303","0304","0404"];
let good_coordinates = ["0402","0403","0404","0405"];
check_against_blocks(bad_coordinates, blocks);
check_against_blocks(good_coordinates, blocks);


export const hits_a_block = (coordinates, blocks) => {
  let struck = false;
  coordinates.every(coordinate => {
    if (blocks.includes(coordinate)) {
      struck = true;
    };
  })

  return struck;
}


a = ["0304","0305","0204","0205"]
b = ["0404","0405","0406","0506"]
