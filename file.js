class Token {
    constructor(name, symbol, totalSupply) {
      this.name = name;
      this.symbol = symbol;
      this.totalSupply = totalSupply;
      this.balances = {}; // Mapping of addresses to balances
    }
    mint(address, value) {
      if (!this.balances[address]) {
        this.balances[address] = 0;
      }
      this.balances[address] += value;
      this.totalSupply += value;
    }
    burn(address, value) {
      if (this.balances[address] < value) {
        throw new Error("Insufficient balance");
      }
      this.balances[address] -= value;
      this.totalSupply -= value;
    }
    getBalance(address) {
      return this.balances[address] || 0;
    }
  }
  const myToken = new Token("MyCoin", "MYC", 10000);
  myToken.mint("address1", 100);
  console.log(myToken.getBalance("address1")); 
  try {
    myToken.burn("address1", 150);
  } catch (error) {
    console.error(error.message); 
  }
  myToken.burn("address1", 50);
  console.log(myToken.getBalance("address1"));