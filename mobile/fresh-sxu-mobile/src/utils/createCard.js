let createCard = function (nickname,value,cards) {
  var card = new Obj()
  // card.nickname = this.nickname
  // card.value = this.value
  card.nickname = 'hh'
  card.value = 'this.value'
  card.addCard = function () {
    this.cards.push(card)
  }
};
export {
  createCard
};
