import randomItem from '../dialogs/chest-loot/random-item';

export default function openChest() {
  return (dispatch, getState) => {

    const { level } = getState().stats;
    // give the player a 25% chance to get a random item
    let itemDrop = false;
    const chance = Math.floor(Math.random() * 100) + 1;
    if(chance <= 25) {
      itemDrop = randomItem(level);
    }
    // get a random amount of gold between 1 and 8 PLUS player level x3
    const gold = (Math.floor(Math.random() * 8) + 1) + (level * 3);
    // get some level based exp
    const exp = (level * 5) + 5;

    dispatch({
      type: 'GET_GOLD',
      payload: { value: gold }
    });
    dispatch({
      type: 'GET_EXP',
      payload: { value: exp }
    });
    dispatch({
      type: 'SET_CHEST_DATA',
      payload: {
        exp,
        gold,
        item: itemDrop
      }
    });
  }
}