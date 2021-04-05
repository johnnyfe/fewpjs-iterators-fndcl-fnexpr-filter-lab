const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name='Bobby'){
    return drivers.filter((e) => e.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch (drivers, name){
    return drivers.filter((e)=>e.charAt(0)===name.charAt(0));
}
function matchName (drivers,names){
    return drivers.filter((result)=> result.name===names);
}