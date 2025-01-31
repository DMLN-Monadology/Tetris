# Tetris

## Background

Alexey Pajitnov's Tetris is a timelessly classic game that perfectly exemplifies and encapsulates the ingenuities of object-oriented programming. Originally written in 1984 in the former Soviet Union, Tetris quickly became an international sensation amongst gamers all around the world by way of Soviet reforms Perestroika and Glasnost. In 1993, Tetris became the first video game played in outer space by Russian cosmonaut Aleksandr Serebrov, who took this exceedingly simple and addictive game on its way to galactic fame.

Tetris' core game mechanic has changed little since its inception in 1984 (a testament to the incredible simplicity, and thus robustness, of the game's idea). The game is played on an grid (resembling a shaft with a visible floor) where randomly generated geometric shapes of four square blocks each rain down from the top. The player can manipulate these falling blocks by moving them sideways (thus changing the trajectory of their fall) as well as rotate them. The goal is to form unbroken rows (a goal, that if achieved, will trigger an event where all unbroken rows disappear and the blocks above will fall down to take their place). The player loses and the game ends when a block reaches the ceiling. The two primary metrics of scoring in Tetris are: 1) record survival time and 2) number of unbroken rows made before losing.

## Functionality & MVP

The player will be able to:

- [ ] See randomly generated geometric blocks fall down the board.
- [ ] Manipulate falling blocks by rotating and changing the trajectory of their falls.
- [ ] make unbroken rows using the geometric blocks by deploying them in place.   
- [ ] See blocks of unbroken rows disappear and upper blocks fall.
- [ ] Accumulate scores by making unbroken rows
- [ ] Trigger a game over event by allowing blocks to over-populate the shaft and reach the ceiling.

## Architecture and Technologies

- Vanilla Javascript
- React
- Redux

## Implementation Timeline

**Day 1**: Research other projects, compile a list of all necessary components and packages. Setup react/redux, webpack, write a basic entry file. Review this timeline and update to final copy.

**Day 2**: Complete the board and prepare all logics

**Day 3**: Complete and implement the falling/manipulation of at least 1 piece.

**Day 4**: Implement for all pieces

**Day 5**: Backup day

## Implementation Details

Since all blocks are just rendered coordinates, rotation was handled using linear algebra (a rotational matrix). Each geometric shape has an anchor block, about which other blocks rotate. This anchor block is used as the origin, and the other blocks are first translated to cartesian coordinates relative to the anchor, processed through the rotational matrix, and re-converted back to its absolute coordinate in the grid.

Coordinates are stored as strings where the first 2 strings represent the Column and the latter 2 represents row. This allows for quicker processing by allowing for the index of all blocks to be stored as a one-dimensional array instead of two. 
