export const CREATE_NEW_BLOCK = "CREATE_NEW_BLOCK";

export const createNewBlock = (block) => ({
  type: CREATE_NEW_BLOCK,
  block
});

export const ROTATE_BLOCK = "ROTATE_BLOCK";

export const rotateBlock = () => ({
  type: ROTATE_BLOCK
})
