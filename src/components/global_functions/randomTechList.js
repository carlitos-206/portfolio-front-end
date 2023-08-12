// This is a shuffle of any array
export default function shuffle(arr){
  let array = arr.sort(() => Math.random() - 0.5);
  return array
}