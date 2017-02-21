// =======================
//      # PRACTICE
// =======================
// Use the ...rest operator
var someArray = ['A', 'B', 'C', 'D', 'E'];

var fn7 = ([a, b, ...arr]) => {
  console.log(a);
  console.log(b);
  console.log(arr)
}

fn7(someArray)

//Output
// "A"
// "B"
// ["C", "D", "E"]



// =======================
// ## object destructuring
// =======================
// let node = {
//     type: "Identifier",
//     name: "foo"
// };

// let {type, name} = node
// console.log(type)
// console.log(name)

// let node = {
//     type: "Identifier",
//     name: "foo",
//     loc: {
//         start: {
//             line: 1,
//             column: 1
//         },
//         end: {
//             line: 1,
//             column: 4
//             }
//     }
// };

// ARE WE SUPPOSED TO RENAME THE KEYS SO THAT WE DON'T GET THE "ALREADY DECLARED" ERROR?

// let {
//   type,
//   name,
//   loc
//   // IS THERE NO WAY TO DECONSTRUCT NESTED KEY-VALUES WIHOUT LOSING ITS KEY?
//   // FOR EXAMPLE, LINE 54 ACCESSES THE WHOLE OBJECT VALUE OF LOC
//   // BUT TO TARGET INNER KEYS/VALUES OF LOC, I'D STILL HAVE TO DO
//   // LOC.START OR LOC.END.LINE. I CAN'T SEEM TO BE ABLE TO JUST
//   // DECONSTRUCT EVERY NESTED OBJ
// } = node;

// console.log(type, name, loc)


// =======================
// ## array destructuring
// =======================
let colors = [ "red", [ "green", "lightgreen" ], "blue" ];

let [r, [g, lg], b] = colors;

console.log(r, g, lg, b);


// =======================
// # Challenge
// =======================

// =======================
// ## Mixed Destructuring
// =======================
let node = {
    type: "Identifier",
    name: "foo",
    loc: {
        start: {
            line: 1,
            column: 1
        },
        end: {
            line: 1,
            column: 4
        }
    },
    range: [0, 3]
};


let {
  type,
  name,
  loc:{
    start,
    end
  },
  range: [
    first,
    second
  ]
} = node;


console.log(type, name, start, end, first, second)



