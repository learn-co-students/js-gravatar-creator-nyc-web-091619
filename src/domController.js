function updateDOM(avatar) {

    clearScreen()
    
    
    //loop rows
    for(let row = 0; row < 5; row++){

        // loop through first 3 columns
        for(let col=0; col<3; col++ ){
            //Find element with id row-col
            let square = document.getElementById(`${row}-${col}`)
            console.log("working on ", row, "-", col)
            
            //set equal to nums (3 * row % 5) + 1 + (col % 5)
            let index = 3 * (row % 5) + 1 + (col % 5 )
            let flag = avatar.nums[index]
            console.log("FLAG: ", flag)

            if (flag % 2 === 0){
                square.style.background = `rgb(${avatar.red}, ${avatar.green}, ${avatar.blue})`
            }
        }
    }

    // COMPLETE THE MIRROR

    // Loop rows
    for(let row = 0; row < 5; row++){
        // loop through last 2 columns
        for(let col=3; col<5; col++ ){

            let square = document.getElementById(`${row}-${col}`)
            let matchSqr = document.getElementById(`${row}-${col%2}`)

            square.style.background = matchSqr.style.background
        }
    }

    console.log("done!")

}

function clearScreen(){
    //loop rows
    for(let row = 0; row < 5; row++){
        // loop through first 3 columns
        for(let col=0; col<5; col++ ){
            
            let square = document.getElementById(`${row}-${col}`)
            square.style.background = 'rgb(240, 240, 240)';
        }
    }
}