// Bai 1
    document.getElementById('changeTemp').addEventListener('click',changeTemp);
    function changeTemp(){
        let temp = parseFloat(document.getElementById('celcius').value);
        let result = temp*9/5+32;
        document.getElementById('result_temp').innerHTML = 'Gia tri do F la: ' + result;
    }

// Bai 2
    document.getElementById('changeMeter').addEventListener('click',changeMet);
    function changeMet(){
    let met = parseFloat(document.getElementById('meters').value);
    let result = met*3.2808;
    document.getElementById('result_feet').innerHTML = 'Gia tri feet la: ' + result;
}
// Bai 3
    document.getElementById('squareSq').addEventListener('click',Square);
    function Square(){
    let met = parseFloat(document.getElementById('canh').value);
    let result = met*met;
    document.getElementById('result_square').innerHTML = 'Dien tich hinh vuong la: ' + result;
}
    //Bai 4
    document.getElementById('squareS').addEventListener('click',function (){
        let lengh = parseFloat(document.getElementById('lengh').value);
        let width = parseFloat(document.getElementById('width').value);
        result = lengh*width;
        document.getElementById('result_sq').innerHTML = 'Dien tich hinh chu nhat la: ' + result;
    })
//Bai 5
    document.getElementById('square_tri').addEventListener('click',function (){
        let canh1 = parseFloat(document.getElementById('canh1').value);
        let canh2 = parseFloat(document.getElementById('canh2').value);
        result = canh1*canh2/2;
        document.getElementById('result_triangel').innerHTML = 'Dien tich hinh tam giac la: ' + result;
    })
// Bai 6
    document.getElementById('find1').addEventListener('click', function (){
        let a = parseFloat(document.getElementById('a1').value);
        let b = parseFloat(document.getElementById('b1').value);
        if(a==0){
            if(b==0){
                document.getElementById('result_find').innerHTML = 'Phuong trinh vo so nghiem';
            }
            else{document.getElementById('result_find').innerHTML = 'Phuong trinh vo nghiem';}
        }
        else {
            let nghiem = -b/a;
            document.getElementById('result_find').innerHTML = 'Phuong trinh co nghiem x = ' + nghiem;
        }
    })
// Bai 7
    document.getElementById('find2').addEventListener('click', function (){
        let a = parseFloat(document.getElementById('a2').value);
        let b = parseFloat(document.getElementById('b2').value);
        let c = parseFloat(document.getElementById('c2').value);
        if(a==0){
            if(b==0){
                if(c==0){
                    document.getElementById('result_find2').innerHTML = 'Phuong trinh vo so nghiem';
                }
                else{document.getElementById('result_find2').innerHTML = 'Phuong trinh vo nghiem';}
            }
            else {
                let nghiem = -c/a;
                document.getElementById('result_find2').innerHTML = 'Phuong trinh co nghiem x = ' + nghiem;
            }
        }
        else {
            let delta = b*b - 4*a*c;
            if (delta>=0){
            let x1 = (-b+Math.sqrt(delta))/(2*a);
            let x2 = (-b-Math.sqrt(delta))/(2*a);
            document.getElementById('result_find2').innerHTML = 'Phuong trinh co 2 nghiem x1 = ' + x1 + 'va x2 = ' +' ' + x2;}
            else {document.getElementById('result_find2').innerHTML = 'Phuong trinh vo nghiem';}
        }
    })
// Bai 8
    document.getElementById('checkAge').addEventListener('click',function (){
        let age = Number(document.getElementById('numAge').value);
        if(Number.isInteger(age) == true){
            if(age>0&&age<120){
                document.getElementById('resultAge').innerHTML = 'Day la tuoi cua mot nguoi'
            }
            else{document.getElementById('resultAge').innerHTML = 'Day la tuoi cua mot nguoi'}
        }
        else {document.getElementById('resultAge').innerHTML = 'So tuoi ban nhap khong phai la so nguyen'}
    })
// Bai 9
    document.getElementById('checkNumber').addEventListener('click',function (){
        let num1 = parseFloat(document.getElementById('number1').value)
        let num2 = parseFloat(document.getElementById('number2').value)
        let num3 = parseFloat(document.getElementById('number3').value)
        if(num1>0&&num2>0&&num3>0){
            if(((num1+num2)>num3)&&((num1+num3)>num2)&&((num3+num2)>num1)){
                document.getElementById('result3number').innerHTML = 'So ban nhap la ba canh cua tam giac';
            }
            else {document.getElementById('result3number').innerHTML = 'So ban nhap khong la ba canh cua tam giac';}
        }
        else {document.getElementById('result3number').innerHTML = 'So ban nhap khong la ba canh cua tam giac';}
    })
// Bai 10
    document.getElementById('tinhCs').addEventListener('click',function (){
        let cs = parseFloat(document.getElementById('kwH').value);
        if(cs<=50){
            let result = cs*1678*1.1;
            document.getElementById('resultCs').innerHTML = 'Gia dien la: ' + result;
        }
        else{
            let result = ((cs-50)*1734 + 50*1678)*1.1;
            document.getElementById('resultCs').innerHTML = 'Gia dien la: ' + result;
        }
    })
// bai 11
function clickedb11() {
    var a = parseFloat(document.getElementById("b11_a").value);
    if(a<5)    alert("Thue phai tra la"+(a*5/100))
    else if(a>5 && a<10) alert("Thue phai tra la"+(0.25+a*10/100))
    else if(a>10 && a<18) alert("Thue phai tra la"+(0.75+a*15/100))
    else if(a>18 && a<32) alert("Thue phai tra la"+(1.95+a*20/100))
    else if(a>32 && a<52) alert("Thue phai tra la"+(4.75+a*25/100))
    else if(a>52 && a<80) alert("Thue phai tra la"+(9.75+a*30/100))
    else alert("Thue phai tra la"+(18.15+a*35/100))
}
// bai 12
function clickedb12() {
    var a = parseFloat(document.getElementById("b12_a").value);
    var b = parseFloat(document.getElementById("b12_b").value);
    var c = parseFloat(document.getElementById("b12_c").value);
    if(a>0 &&  b>0 && c>0){
        var sum=  Math.pow(a*(1+c/100),b);
        alert(sum);
    }
    else
        alert("So tien khong co gia tri am");
}