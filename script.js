let arr = ['0','1','2','3','4','5','6','7','8']

let end = 0;

const objarr = [document.querySelector('#btn-0'),
document.querySelector('#btn-1'),
document.querySelector('#btn-2'),
document.querySelector('#btn-3'),
document.querySelector('#btn-4'),
document.querySelector('#btn-5'),
document.querySelector('#btn-6'),
document.querySelector('#btn-7'),
document.querySelector('#btn-8')]

objarr[0].addEventListener("click",function(event){
    if (end === 0)
        event.target.style.backgroundColor = '#f5e990';
    ticTacToe(objarr[0]);
});
objarr[1].addEventListener("click",function(event){
    if (end === 0)
        event.target.style.backgroundColor = '#f5e990';
    ticTacToe(objarr[1]);
});
objarr[2].addEventListener("click",function(event){
    if (end === 0)
        event.target.style.backgroundColor = '#f5e990';
    ticTacToe(objarr[2]);
});
objarr[3].addEventListener("click",function(event){
    if (end === 0)
        event.target.style.backgroundColor = '#f5e990';
    ticTacToe(objarr[3]);
});
objarr[4].addEventListener("click",function(event){
    if (end === 0)
        event.target.style.backgroundColor = '#f5e990';
    ticTacToe(objarr[4]);
});
objarr[5].addEventListener("click",function(event){
    if (end === 0)
        event.target.style.backgroundColor = '#f5e990';
    ticTacToe(objarr[5]);
});
objarr[6].addEventListener("click",function(event){
    if (end === 0)
        event.target.style.backgroundColor = '#f5e990';
    ticTacToe(objarr[6]);
});
objarr[7].addEventListener("click",function(event){
    if (end === 0)
        event.target.style.backgroundColor = '#f5e990';
    ticTacToe(objarr[7]);
});
objarr[8].addEventListener("click",function(event){
    if (end === 0)
        event.target.style.backgroundColor = '#f5e990';
    ticTacToe(objarr[8]);
});

let turn = 0;
const t = document.querySelector('#turn');
t.textContent = "Turn for X";

function check ()
{
    if ((arr[0]===arr[1] && arr[0]===arr[2]) 
    || (arr[3]===arr[4] && arr[3]===arr[5]) 
    || (arr[6]===arr[7] && arr[6]===arr[8]) 
    || (arr[0]===arr[3] && arr[0]===arr[6])
    || (arr[1]===arr[4] && arr[1]===arr[7])
    || (arr[2]===arr[5] && arr[2]===arr[8])
    || (arr[0]===arr[4] && arr[0]===arr[8])
    || (arr[2]===arr[4] && arr[2]===arr[6]))
        return true;
    else
        return false;
}
function ticTacToe (currobj)
{
    let objindex;
    for (let i=0;i<objarr.length;i++)
    {
        if (Object.is(currobj,objarr[i]))
            objindex = i;
    }
    if (arr[objindex]==objindex && end===0)
    {
        let btId = "#btn-";
        btId += objindex;
        if (turn === 0)
        {
            arr[objindex] = 'X';
            const bt = document.querySelector(btId);
            bt.textContent = 'X';
            bt.style.color ='#cf3e4c';
            turn = 1;
            t.textContent = "Turn for O";
        }
        else
        {
            arr[objindex] = 'O';
            const bt = document.querySelector(btId);
            bt.textContent = 'O';
            bt.style.color = '#63c951';
            turn = 0;
            t.textContent = "Turn for X";
        }
        if (check())
        {
            end = 1;
            if (turn == 0)
                t.textContent = "O Wins! , Press Restart to play again";
            else
                t.textContent = "X Wins! , Press Restart to play again";
        }
        else if (arr[0]!=='0' && arr[1]!=='1' && arr[2]!=='2' && arr[3]!=='3' && arr[4]!=='4'
        && arr[5]!=='5' && arr[6]!=='6' && arr[7]!=='7' && arr[8]!=='8')
        {
            end = 1;
            t.textContent = "Draw! , Press Restart to play again"
        }
    }
}

document.querySelector('#Reset').addEventListener("click",function(){
    location.reload();
});