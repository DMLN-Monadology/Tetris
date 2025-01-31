export const CREATE_NEW_BLOCK = "CREATE_NEW_BLOCK";

export const createNewBlock = () => ({
  type: CREATE_NEW_BLOCK
});

export const ROTATE_BLOCK = "ROTATE_BLOCK";

export const rotateBlock = () => ({
  type: ROTATE_BLOCK
});

export const SHIFT_BLOCK_LEFT = "SHIFT_BLOCK_LEFT";

export const shiftBlockLeft = () => ({
  type: SHIFT_BLOCK_LEFT
});

export const SHIFT_BLOCK_RIGHT = "SHIFT_BLOCK_RIGHT";

export const shiftBlockRight = () => ({
  type: SHIFT_BLOCK_RIGHT
});

export const SHIFT_BLOCK_DOWN = "SHIFT_BLOCK_DOWN";

export const shiftBlockDown = () => ({
  type: SHIFT_BLOCK_DOWN
});

export const RECORD_FALLEN_BLOCK = "RECORD_FALLEN_BLOCK";

export const recordFallenBlock = () => ({
  type: RECORD_FALLEN_BLOCK
});

export const REMOVE_ROW = "REMOVE_ROW";

export const removeRow = (row_num) => ({
  type: REMOVE_ROW,
  row_num
})
