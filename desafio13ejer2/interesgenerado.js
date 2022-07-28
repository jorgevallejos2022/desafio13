let planes=[["Plan 001", 150000, 30 , 15],
            ["Plan 002", 300000, 180, 10],
            ["Plan 003", 485000, 60 , 23]
];
let planesint=[[],[],[]];

for (let i = 0; i < planes.length; i++) {
    let int= (planes[i][1]*planes[i][2]*planes[i][3])/100;
    planesint[i][0] = planes[i][0]
    planesint[i][1] = planes[i][1]
    planesint[i][2] = planes[i][2]
    planesint[i][3] = planes[i][3] 
    planesint[i][4]=int     
}
console.log(planes)
console.log(planesint)