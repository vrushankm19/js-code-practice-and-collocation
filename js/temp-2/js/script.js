function mainTotal(mark, gradMain) {
    let mainTotlemark = mark.reduce(function(sum1, sum2) {
        return sum1 + sum2;
    });
    let wTotle = mainTotlemark / mark.length;
    gradMain(wTotle);
    console.log(wTotle);
}

function gradMain(gradStu) {;
    let maingradStu = gradStu;
    console.log(maingradStu);
    if (90 < maingradStu) {
        let ww = `Your Mark is: ${maingradStu} And Grad is A`;
        document.getElementById("head").innerText = ww;
    } else if (60 < maingradStu) {
        let ww = `Your Mark is: ${maingradStu} And Grad is B`;
        document.getElementById("head").innerText = ww;
    } else {
        let ww = `Your Mark is: ${maingradStu} And Grad is C`;
        document.getElementById("head").innerText = ww;
    }
}

let a = [90, 10, 90, 99, 87];

mainTotal(a, gradMain);