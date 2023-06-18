let arr1=[];
let arr2=[];
let rand;
let number=0;
for(let i=0;i<16;i++){
    arr1[i]=i+1;
}
for(let j=0;j<16;j++){
    rand=Math.floor(Math.random()*arr1.length);
    arr2[j]=arr1[rand];
    arr1.splice(rand,1);
}

function table(){
    let data="";
    let tbl=document.getElementById("tbl");
    for(let i=0;i<4;i++){
        data+=`<tr>`;
        for(let j=0;j<4;j++){
            data+=`<td> ${arr2[number]}</td>`;
            number++;
        }
        data+=`</tr>`;
    }
    tbl.innerHTML=data;
}
table();


