let minusButtons = document.getElementsByClassName("minus");
let plusButtons = document.getElementsByClassName("plus");
let currCost = document.getElementById("currCost");
let costForm = document.getElementById('cost')
let addForm = document.getElementById('add')


let handleMinusClick = event => {
    const tgt = event.currentTarget
    let counter = document.getElementById(`count-${tgt.name}`);
    console.log(counter)
    if (counter.textContent !== '0') {
        counter.textContent = String(Number(counter.textContent) - 1);
        currCost.textContent = String(Number(currCost.textContent) - Number(tgt.getAttribute('cost')));
        costForm.value = currCost.textContent
        addForm.value = addForm.value.replace(`${tgt.name} `, '')
    }
}

let handlePlusClick = event => {
    const tgt = event.currentTarget
    let counter = document.getElementById(`count-${tgt.name}`);
    counter.textContent = String(Number(counter.textContent) + 1);
    currCost.textContent = String(Number(currCost.textContent) + Number(tgt.getAttribute('cost')));
    costForm.value = currCost.textContent
    addForm.value = addForm.value + `${tgt.name} `
}


for (let elem of minusButtons) {
    let counter = document.getElementById(`count-${elem.name}`);
    counter.textContent = '0';
    elem.onclick = handleMinusClick;
}

for (let elem of plusButtons) {
    elem.onclick = handlePlusClick;
}
