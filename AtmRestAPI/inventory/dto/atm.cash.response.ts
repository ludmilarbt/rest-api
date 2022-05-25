export class AtmCashResponse {
    bills: Map<string,number> = new Map();
    coins: Map<string,number> = new Map();
    maxAvailableAmount?: number;

    formatAtmCashResponse() {

        // ✅ When Keys are STRINGS
const map1 = new Map([
    ['10', 'three'],
    ['100', 'one'],
    ['1000', 'two'],
  ]);
  
  // 👇️ {'z' => 'three', 'a' => 'one', 'b' => 'two'}
  console.log(map1);
  
  // ✅ Sort Ascending (low to high)
  const sortedAsc = new Map([...map1].sort());
  
  // 👇️ {'a' => 'one', 'b' => 'two', 'z' => 'three'}
  console.log(sortedAsc);
  
  // ✅ Sort Descending (high to low)
  const sortedDesc = new Map([...map1].sort().reverse());
  
  console.log(sortedDesc); // 👉️ {'z' => 'three', 'b' => 'two', 'a' => 'one'}
  
        
        const map2 = new Map([
            [3, 'three'],
            [1, 'one'],
            [2, 'two'],
          ]);

        const sortedNumDesc = new Map([...map2].sort((a, b) => b[0] - a[0]));
        console.log(`this.bills ${this.bills}`);
        let mapAsc = new Map([...this.bills].sort().reverse());
        console.log(`mapAsc ${mapAsc}`);
        let billsJson=Object.fromEntries(mapAsc);
        console.log(`billsJson ${JSON.stringify (billsJson)}`);
        let coinsJson= (Object.fromEntries(this.coins));

        let result= {
            result : {
                "bills": [billsJson],
                "coins": [coinsJson] 
            },
            
        };

        return result;
    }
}
