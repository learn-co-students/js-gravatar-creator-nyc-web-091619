function updateDOM(identicon) {
    clear()
    for(let row = 0; row < 5; row++){
        for(let column = 0; column < 3; column++){
            let sq_index = row * 3 + column
            let current_sq = identicon.numbers[sq_index] 
            let sq = document.getElementById(`${row}-${column}`)
            if(current_sq % 2 === 0){
                sq.style.background = identicon.rgb
                if(column === 0){
                    document.getElementById(`${row}-4`).style.background = identicon.rgb
                } else if(column === 1) {
                    document.getElementById(`${row}-3`).style.background = identicon.rgb
                }
            }else {
                sq.style.background = 'rgb(240, 240, 240)'
            }
        }
    }
}

function clear() {
    for(let row = 0; row < 5; row++){
        for(let column = 0; column<5; column++){
            document.getElementById(`${row}-${column}`).style.background = 'rgb(240, 240, 240)'
        }
    }
}
// row_index-column_index