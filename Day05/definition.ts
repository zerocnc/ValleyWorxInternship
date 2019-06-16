class Card{
    cardValue: number = 0;
    suitName: string;

    constructor(){

    }
  }
  
  class Deck{
    Card: Array[50];
    cardSize: number;
    
    constructor()
    {
      this.Generate()
    }
    
    Generate(){
      let suits: string[];
      let base: number;
      let x: number;
      
      suits = ["Club", "Diamond", "Spade", "Heart"];
    
      base = 0;
      
      for(let c = 0; c < 4; c++){
        for (x = 2; x < 11; x++ ){
          this.Card[x+base].cardValue = x;
          this.Card[x+base].suitName = suits[c];
        }
        base = x + base - 1;
      }    
    }
    PrintCardDec(){
        for( let x= 0; x < 50; x++ ){
            console.log(this.Card[x].cardValue);
        }
    }
  }
  
  let myObj = new Deck();
  
  myObj.PrintCardDec();