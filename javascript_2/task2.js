data = [{Principal:2500, Time:1.8}, {Principal:1000, Time:5}, {Principal:3000, Time:1}, {Principal:2000, Time:3}];

function interestCalculator(arr) {

    let interestList;
    let interestData = [];
    let n = arr.length;
    var R = 0; var I = 0; var T = 0; var P = 0;

    // Iterating over array to access values of Principal & Time 
    for (let i = 0; i < n; i++){
        T = (arr[i].Time);
        P = (arr[i].Principal);
    
    
        // Using conditionals to define 'Rate'
        if(P >= 2500 && (T > 1 && T < 3)) {
            R = 3;
        }
        else if(P >= 2500 && T >= 3) {
            R = 4;
        }
        else if(P < 2500 && T <= 1) {
            R = 2;
        }
        else {
            R = 1;
        }
        // Calculate interest
        I = (P*R*T)/100;
    
        // Creating list of 4 key:value for each iteration
        interestList = {'Pricipal' : P};
        console.log(P);
        interestList.Time = T;
        console.log(T);
        interestList.Rate = R;
        console.log(R);
        interestList.Interest = I;      
        console.log(I);
        console.log(interestList);
        interestData.push(interestList);
    }
    console.log(interestData);
    return;
}

//Calling the function
interestCalculator(data);
