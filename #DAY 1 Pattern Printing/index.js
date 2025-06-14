// Printing Stars with spaces in decreasing order
// Means we need to track empty spaces to print


// Approach 1 using if and else condtions
// for(let i=0; i<=5; i++){
//     let row = ""
//     for(let j=0; j<=5; j++){
//         if(j<5-i+1){
//             row+=" "
//         }else{
//             row+="*"
//         }
//     }
//     console.log(row)
// }

// Approach 2 using 2 loops
// let n = 5
// for(let i=0; i<=n; i++){
//     let row = ""

//     // first we track adn add spaces in first loop
//     // wee need n-i+1 spaces on each row
//     for(let j=0; j< n-i+1; j++){
//         row += " "
//     }

//     // now we need to add stars
//     // we need i+1 stars in each row (given that our row now has stars filled)
//     for(let j= 0; j< i+1; j++){
//         row+="*"
//     }

//     console.log(row)

// }


// Printing 1 and 0 in each row upto n where each row containt elements in increasing order

// Approach : I'll track even and odd places and print 1 and 0 based on that.
// let n3 = 4

// using if else with odd and even
// for(let i=0; i<=5; i++){
//     let row = ""
//     for(let j=0; j<=i; j++){
//         if(j%2==0){
//             row+="1"
//         }else{
//             row+="0"
//         }
//     }
//     console.log(row)
// }



// using switch (not switch case)
// for(let i=0;  i<n3; i++){
//     let row = ""
//     let Switch = true

//     for(let j=0; j<=i; j++){
//         if(Switch)
//             row+="1"
//         else
//             row+="0"
//         Switch = ! Switch
//     }
//     console.log(row)
    
// }



// Prinign the entire with toggle means 1 and 0
// let n4 = 4
// let toggle = true
// for(let i=0; i<=n4; i++){
    //     let row = ""
    //     for(let j =0; j<=i; j++){
        //         if(toggle)
        //             row+="1"
        //         else    
        //             row+="0"
        //         toggle = !toggle
        //     }
        //     console.log(row)
        // }
        // note:
        // took help to solve this problem 