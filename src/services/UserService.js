const user = [
  {
    name: "Ochoa Hyde", coins: 100,
    moves: []
    }
];

function getUser() {
  // return new Promise((resolve,reject) => {
  //   var usertoreturn = user;
  //   resolve(usertoreturn);
  // })
  return user
}

export default {
  getUser
}