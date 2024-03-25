                                            //   JAVA SCRIPT
    // Java script faylini html-e qosmaq ucun html-e daxil olub body bolmesinin en alt hissesinde script:src yazilir ve ./ duymelerini basmaqla js fayli 
    // secilir.

                                // 1.JAVA SCRIPT :VALUES(DEYERLERI)
    // Javascript 2 cur deyer qebul edir:
    // 1.Fixed values(Sabit deyerler)
    // 2.Variable values(Deyisen deyerler)
    //     Fixed values literals(herfi) deyerler adlanir.Bu deyerlerin iki vacib sintaksisi vardir:
    // 1.Numbers(nomreler):10,5 ve ya 1001
    // 2.Strings(metnler):"anar"ve ya 'anar'
    //     Variables values let const var acar sozleri ile yazilan deyerlerdir.
    // 1.var a=5 burada var acar sozu istifade olunub,lakin bu acar sozden gunumuzde cox istifade olunmur.var birbasa windowsa teyin olunur.
    // 2.let a=5 burada let acar sozunden istifade olunub.Bu kod oz blok skopunun ({}) icerisinde isleyir.a ni deyisdire bilerik.
    // 3.const a=5 burada const acar szounden istifade olunub.Bu kod oz blok skopunun ({}) icerisinde isleyir.a ni deyisdire bilmerik.


                                // 2.JAVA SCRIPT :OPERATORS
    // Operatorlar 2 cur olur:
    // 1.arithmetic operators ( + - * / ) 
    // 2.assignment operator ( = )
    // Meselene bir kod yazaq ve operatorlari izah edek:

    // let a=5
    // let b=6
    // let c="7"
    // let d="hello"

    // console.log(a+b);  bu kodun icerisine ne yazilarsa ekranin consoluna cixar. 
    // a ve b her ikisi reqem oldugu ucun riyazi emeliyyat heyata kececek.

    // console.log(a+c);
    // a reqem,c metn oldugu ucun bunlar birlesecek ve 57 cixacaq consola.

    // console.log(b+d);
    // b reqem,d metn oldugu ucun,consola 6hello cixar.

    // console.log(c-a);
    // + den basqa diger operatorlarda reqem metnin icinde bele olsa riyazi emeliyyat gedir.

    // console.log(a-d);
    // consolda NAN cixacaq cunki d-nin icerisi metndir riyazi emeliyyat aparila bilmir.

    // console.log(a*b);
    // + den basqa diger operatorlarda reqem metnin icinde bele olsa riyazi emeliyyat gedir.

    // console.log(a*c);
    // + den basqa diger operatorlarda reqem metnin icinde bele olsa riyazi emeliyyat gedir.

    // console.log(a*d);
    // consolda NAN cixacaq cunki d-nin icerisi metndir riyazi emeliyyat aparila bilmir.

    // console.log(a**b);
    // b a-nin ustu olacaq.

    // console.log(a/b);
    // + den basqa diger operatorlarda reqem metnin icinde bele olsa riyazi emeliyyat gedir.

    // console.log(a%b);
    // riyazi emeliyyat gedir kesr hisse consola cixir.

    // console.log(++a);
    // a+1 yazilisinin eynisidir.

    // console.log(a++);
    // a nin ozu consola cixir,a deyismir.

    // console.log(--a);
    // a-1 yazisinin eynisidir.

    // console.log(a--);
    // a nin ozu consola cixir,a deyismir.

    // console.log(a+=b);
    // a+b yazisinin eynisidir.

    // console.log(a-=b);
    // a-b yazisinin eynisidir.

    // console.log(a*=b);
    // a*b yazisinin eynisidir.

    // console.log(a/=b);
    // a/b yazisinin eynisidir.

    // console.log(a%=b);
    // a%b yazisinin eynisidir.

    // console.log(a**=b);
    // a**b yazisini eynisidir.
                        
                                //   JavaScript Comparison Operators(Muqayise operatolari)

    // console.log(a==b);
    // burada a b-ye beraberdirmi? sualini veririk,eyer beraberdirse true deyilse false consola yazilar.

    // console.log(a===b);
    // burada a b-ye beraber olmagindan elave onun eyni tipde olmagini bele yoxlayir,cavabi consola cixardir.

    // console.log(a!=b);
    // burada a b-ye beraber deyilmi? sualini veririk.

    // console.log(a!==b);
    // burada a b-ye beraber olmagini hemde tipinin eyni olmagini yoxlayiriq.

    // console.log(a>b);
    // a boyukdurmu b-den?

    // console.log(a<b);
    // b boyukdurmu a-dan.

    // console.log(a>=b);
    // a boyuk beraberdirmi b-den?

    // console.log(a<=b);
    // b boyuk beraberdirmi a-dan?

    // let result=a===b ?"a beraberdir b" :"a b-ye beraber deyl"
    // console.log(result);
    //  burada a=b duzdurse consola beraber olmasini eks halda ise beraber olmamasini yazdirma emri vermisem.

                            //  Javascript logical operators
    // let result= a==b && b==c?"berberdir" :"beraber deyl"
    // console.log(result);
    // &&- bu operator ve demekdir,yeni her iki sert odendikde consola cavabi cixir.

    //  let result= a==b || b==c?"berberdir" :"beraber deyl"
    // console.log(result);
    // ||- bu operator ve ya demekdir,yeni  iki sertden 1 -i odendikde consola cavabi cixir.

    // !- bu isare hansi elementin qarsisina qoyulsa javascript o elementi esas goturur.

                        //    Javascript Type operators
    // console.log(typeof(a));
    // burada typeof(element) yazildiqda bu elementin tipini teyin ede bilirik

    

                                //    JAVA SCRIPT DATA TYPES(DATA TIPLER)
    // 1.String(metn)
    // 2.Number(reqemler)
    // 3.Bigint(boyuk nomrler)
    // 4.Boolean(true,false)
    // 5.Undefinded(umumiyyetle olmayan)
    // 6.Null(var olub bos olan)
    // 7.Symbol
    // 8.Object


                                //  Java Scriot operator misallar:

                                // misal 1:
    // let a=6
    // let b=7
    // a=(b-a+a);
    // b=(a-1)
    // console.log(a,b)

    //   Bu kodda (6,7) ardicilligi verilib.Bu kodu yazmaqla biz onlarin yerini (7,6) olaraq deyisdire bilerik.















                            //    Javascript Function
    // Funksiyalar iki cur olur.
    // 1.Decleration
    //   Decleration funksiyalar qurulus strukturu asagidaki kimidir:

    //   function element(a,b){
    //   let result=a+b    
    //   console.log(result);
    //   }
    //   element(1,2)

    //     Decleration Funksiya yazmaq isteyirikse ilk once function acar sozu yazilir sonra ona ad yazilir.Adin qarsisinda
    // () acilir ve icerisine parametrler elave olunur.bundean sonra {} acilir ve onun icerisinde muxtelif emeliyyatlar 
    // apararaq bu emeliyyatin ozunu ve ya deyisenin icerisinde aparib console-a cixardiriq.Funksiyanin ozunu ise {}-den
    // kenarda istenilen yerde cagiririq.
    
    //    Decleration funksiyalara aid misallar:
       
    //    Misal 1: 
    //    let a=prompt("reqem daxil edin")
    //    let b=prompt("reqem daxil edin")
    //    function sunNums(a,b){
    //     alert(a+b)
    //    }
    //    sunNums(a,b)

    //   Bu funksiyada a ve b deysienleri teyin edib onlari ayri ayriliqda promptlara beraber edirik.Prompt icerisine her hansi bir
    // deyisen elave etmek ucun bolmedir.Sonra funksiya yaziriq ve funksiyaya iki parametr elave edirik funksiyanin emeliiyat hissesinde
    // ise alert yeni xeberdarliq cixmasini yaziriq.Xeberdarliqin icinde ise a+b yeni icra olunacaq emeliyyati yaziriq.Sonra ise funksiyani
    // colde cagirib icersine promtla teyin etdiyimiz iki deyiseni elave edirik. 
    
        //  Misal 2:
        //  function sunNums(a,b){
        //     return a+b
        //  }
        //  console.log(sunNums(3,5));

        //  Bu funksiyanin cavabi 8 olacaqdir.Burada return istifade etdiymize gore emeliyyat riyazi aparilacaq.

        // Misal 3:
        // function checkFullName(name,surname){
        // return name + " "+ surname
        // }
        // function sendFulData(dataNow,dataBirth){
        // let result= dataNow-dataBirth
        // console.log(checkFullName("Anar","Babazade"),result);
        // }
        // sendFulData(2024,1997)
          
        //   Burada iki funksiya yazilb.Birinci funksiyada name ve surname parametleri elave olunub, emeliyyat hissesinde ise name
        // ve surnamein yazilis formasi return formada yazilib ve funksiyanin ozune qaytarilib.returnnen sonra hecne yazmaq olmur,
        // cunki o funksiyanin ozune qayidir ve ozune beraber olur.Bundan sonra ikinci funksiya yazilib,bu funksiyada dataNow ve 
        // dataBirth parametr kimi goturulub,iceride dataNow-dataBirth emeliyyati aparilib.Consola ise 1 ci funksiya ve ikinci
        // funksiya cagirilib.Ikinci funksiyanin da ise dusmeyi ucun colde cagirilib ve icerisine arqumentleri elave olunub.

        // Misal 4:
        // function checkCircleSquare(radius){
        // const pi=3.14
        // let result=pi*radius**2
        // return result
        // }
        // console.log(checkCircleSquare(4));

        //   Bu funksiyada cevrenin radiusu parametr olaraq goturulub.Emeliyyat hissede pi standarti yazilib cevrenin sahe dustur 
        // yazilib.Return-e dusturdan cixan cavab yazilib ve funksiyanin ozune beraber olub.sonra asagida consola funksiyani cagirib 
        // icerisine arqument yaziriq.

        // Misal 5
        // function getPiNumber(){
        //     const Pi=3.14
        //     return Pi
        // }
        // function checkCircleSquare(radius){
        //     let result =getPiNumber()*radius**2
        //     console.log(result);
        // }
        // checkCircleSquare(5)

        //   Burada getPiNumber funksiyasini yaziriq,icerisinde Pi-ye qiymet verib sonra Pi ni return edirik yeni funksiyaya beraber edirik.ikinci
        // checkCircleSquare funksiyasini yaziriq,parametr olaraq radius otururuk, icerisine let result = dustur yaziriq,consola resultu cixaririq.
        // Funksiyani ise colde cagirarken arqument kimi reqem otururuk ki oda radiusa beraber olur.

        
        // Misal 6
    //     function getPiNumber(){
    //         const Pi=3.14
    //         checkCircleSquare(pi,7)
    //     }
    //     function checkCircleSquare(pi,radius){
    //         let result=pi*radius**2
    //         console.log(result);
    //     }
    //     getPiNumber();

    //     Burada getPiNumber funksiyasi yazilib ve icerisinde pi-nin qiymeti teyin edilib ve diger checkCircleSquare funksiyasi cagrilib hemde 
    //   arqumentleri yazilib.Sonra ise diger funksiya yazilib,parametrleri teyin edilib.Icerisinde ise dustur yazilib ve cavabi console-a ci-
    //   xarilib.Colde ise getPiNumber funksiyasi cagirilib.Bu o demekdir ki, funksiyalar bir birinin icinde, colde, istenilen yerde cagrila biler. 


    // misel 7
    // function A(){
    // console.log("A");
    // B()
    // function B(){
    // console.log("B");
    //  C()
    // function C(){
    // console.log("C");  
    // }
    // }
    // }
    // A();

    //  Burada A funksiyasinin icinde B funksiyasi,B funksiyasinin da icinde C funksiyasi cagrilib.A funksiyasi ise qaydalar uzre colde 
    // cagrilib.Buna gorede bu kodda hec bir qirilma bas vermeyecek ve consola ardicilliqla cixacaqlar.


    // misal 8
    // let name = "Anar"
    // let surname="Babazade"
    // let company="Anar MMC"
    // let result=  `Mudir adi:${name} Soyadi:${surname} Sirket:${company}`
    // console.log(result);

    //   Bu kodda name,surname ve company adi teyin olunur.Bu adlari dinamik olaraq deyisenin icine oturmek ucun `` eyri dirnaqlar
    // ve icerisinde dinamik data cagirmaq ucun ${} bu isarelerden istifade olunur.


    // misal 9
    // function printFulname(name,surname,age){
    //     return `${name}-${surname}-${age}`
    // }
    // let result1=printFulname("Anar","Babazade",27)
    // let result2=printFulname("Celil","Besirov",27)
    // console.log(result1);
    // console.log(result2);

    //   Bu kodda funksiya yaziriq ve 3 parametr elave edirik.Sonra return hissede funksiyanin quulusunu yaziriq ve bu qurulus funksiyaya 
    // beraber olur.Bundan sonra iki ayri deysien teyin edib,her birinin icerisinde funksiyani cagirib ve icerisine arqumentler elave
    // edirik. Bu deyisinleri consola cixardiqda funksiyanin qurulusuna uygun olaraq arqumentleri ile consola cixir.


    // misal 10
    // let userName =prompt("Adiniz daxil edin")
    // let userSurname=prompt("Soyadinizi daxil edin")
    // let userAge=prompt("Yasinizi dail edin")
    // function printFulname(name,surname,age){
    //  return `Istifadeci adi:${name}-Istifadeci soyadi:${surname}-Istifadeci yasi:${age}`       
    // }
    // let result=printFulname(userName,userSurname,userAge)
    // console.log(result);

    //    Bu kod ile 3 prompt yaziriq ki,icerisine datalar yaza bilek.Sonra bir funksiya yaziriq ve 3 parametrini elave edirik.Icersinde return-
    // un qarsisinda funksiyanin skiletini qururuq.Colde ise bu funksiyani deyisenin icinde cagirib,icersine promptlari arqument olaraq atiriq.
    // Consolda deyiseni cagirdiqda,promta gelen datalar funksiyanin skiletine kocerek consola cixacaq.


        

        
    // 2.Expression funksiyalar
        //  Expression funksiyalar qurulus strukturu asagidaki kimidir:

        //  let element=(a,b)=>{
        //     let result=a+b
        //     console.log(result);
        //  }
        //  element(1,2)

    //      Expression funskiya yazmaq isteyirikse ilk once bir deyisen teyin edirik: let element kimi.Sonra bu deyiseni onun 
    //   parametrlerine beraber edirik.Bu paramerlerden sonra =>{} bu isareleri qoyaraq {}-lerin icerisine emeliyyatlarimizi yaziriq.
    //   Funksiyani ise {}-lerden colde cagiririq.Bu funksiyalar anonim funksiyalar adlanir ve deyisenin icine yazilir.Ozunden qabaq cagrilmir.

    // misal 1
    // const calculateNumbers=function(x,y){
    // return x+y
    // }
    // let result=calculateNumbers(4,5)
    // console.log(result);

    //   Bu funksiyani bir deyisene teyin etdikde sanki ona ad veririk.Onu bu verdiyimiz adla cagirib icine arqument oture bilirik.


    // misal 2
    // const A= function(){
    // console.log("A");
    // B()
    // const B=function(){
    // console.log("B");
    // C()
    // const C=function(){
    // console.log("C");
    // }
    // }
    // }
    // A()

    //   Bu kodda consola yazlniz A cixacaq.Cunki expression funksiyalar ozunden qabaq cagrila bilmir.


    // 3.Arrow function
    // Arrow function expression function tipindedir.Yazilis formasi asagidaki kimidir:

    // const name=()=>{
    // console.log("Arrow function");
    // }
    // name()

    // misal 1:
    // let element=(a,b)=>{
    // let result=a+b
    // return result
    // }
    // console.log(element(2,3));

    //   Bu kodda deyisene teyin edilen arrow function funksiyasina parametrler otururuk,icersine a+b emeliyyatini yazib return
    // ile funksiyaya otururuk.Colde consolda funksiyani yazib arqumentlerini elave etsek cavabi consolda gore bilerik.


    // misal 2:
    // const getPi=()=>{
    //     return 3.14
    // }
    // const circle=(r)=>{
    //     return getPi()*r**2
    // }
    // console.log(circle(1));

    //   Bu kodda getPi funksiyasi yazilib ve 3.14 deyeri funksiyaya beraberlesdirilib.Novbeti circle funksiyasinda ise dustur
    // circle funksiyasina beraberlesdirilib ve icinde getPi funksiyasi cagrilib.Consolda circle funksiyasini cagirmagimiz ve 
    // arqument elave ederek,r-e qiymet vermeyimiz Consolda cavabi gormeyimize getirib cixarar.

    
        //   FUNCTION BOLMESI UMUMI PRAKTIKI MISALLAR:

        // misal 1:
        // let name="Anar"
        // let surname="Babazade"
        // let student=true
        // let result=`adi:${name} soyadi:${surname} telebedir:${student==true ? "beli" :"xeyr"}`
        // console.log(result);

        //   Bu kodda 3 deyisen teyin edirik.Student boolen typeda olan deyisendir. 4-cu deyiseni elave edib icinde dinamik skilet 
        // qururuq ve student deyisenini sert ile yaziriq.Sonda 4 cu elave olunan deyiseni consola cixarmagi unutmuruq.

        
        // misal 2:
        // let name=prompt("Adinizi daxil edin")
        // let password=prompt("Parolunuzu daxil edin")
        // function register(name,password){
        //     let userName="anar"
        //     let userPassword="1997"
        //     name==userName&&password==userPassword ? alert("succes") :alert("wrong")
        // }
        // console.log(name,password);
        // register(name,password)

        //   Bu kodda 2 prompt yazilir ki,bura ixtiyari ad ve parol yazilsin.Sonra funksiya yaziriq ve onun name ve password deye 2 para-
        // metri olur.Funksiyaya 2 standart deyisen elave edirem sonra sert yaziram ki, bu deyisenler funksiyanin parametrlerine beraber
        // olarsa ve ya olmasa alert cixart.Colde ise consol yazmagi ve funksiyani cagirib,promptlari arqument kimi oturmeyi unutmuruq.


        // misal 3:
        // let a =prompt("reqem yaz") 
        // let b=prompt("reqem yaz")
        // let result=a*b
        // isNaN(result)? alert("reqem yaz") :console.log(result)

        //   Iki prompt gotururuk.Sonra bir deyisen teyin edib promptlari bir birine vururuq.Asagidan sert yaziriq ki,eger cavab
        // reqemdirse ekrana cixart deyilse xeberdarliq et.


















                                              // JAVASCRIPT OBJECTS
    // Obyektler 2-cur teyin olunur:
    // 1.Constructor
    // let userInfo=new Object();

    // 2.Literal object
    // let userInfo={};

    // Asagida obyekt ucun numuneler izahli gosterilmisdir:

    // misal 1:
    // let person={
    // name:"Anar",
    // surname:"Babazade"
    // }
    // console.log(person);

    //   Bu kodda obyekt yaradilib ve icerisin name ve surname datalari yazilib.Sonra ise colde consola cixarilib.Lakin unutmaq olmaz
    // ki datalarin deyerleri : qoyulub yazilir ve datalar arasinda vergul qoyulur.


    // misal 2:
    // let person={
    //     name:"Anar",
    //     surname:"Babazade",
    //     isStuden:false,
    //     age:28,
    //     "Liked Javascript":true
    // }
    // console.log(person.name+""+person.surname);
    // console.log(person.age);
    // console.log(person["Liked Javascript"]);

    //   Bu kodda biz obyektin datalerini consola cagirmagi oyrenirik.Bu kodda ilk consola baxsaq goruruk ki,obyektik datasina "."ile gedib
    // cata bilirik.Ikinci consolda datani [] icinde cagirmisiq,bu cur cagirisdan da istifade ede bilerik.Ucuncu consolda ise data string 
    // tipinde ve iki sozden ibaretdir buna gorede biz onu yalniz [] bele cagira bilirik.Belelikle eger data birden artiq sozden ibaretdirse
    // ve ya reqemdirse ona yalniz [] bu cur gedib catmaq olar.


    // misal 3:
    // let userName="Anar123"
    // let userInfo={
    // name:"Anar",
    // surname:"Babazade"
    // }
    // console.log(userInfo);
    // userInfo.surname="Babayev"
    // console.log(userInfo);
    // userInfo.userName=userName
    // console.log(userInfo);

    //   Bu kodda ilk once bir deyisen teyin edirik sonra ise icinde name ve surname datalari olan obyekt teyin edirik.Birici consola obyekti 
    // cixaranda obyektde olan datalari goruruk.Sonra obyektin icinden datani cagirib icerisini deyisirik.Ikinci consolda datanin deyismish 
    // halini goruruk.Sonra ise obyekte yeni bir data elave edib onu yuxardaki deyisene beraber edirik.Belelikle yeni yaranan data deyisenin 
    // deyerini goturerek consola cixir.

    // qeyd:Obyetin let,const olmasindan asili olmayaraq datalarini deyise bilerik.Lakin obyekt const olarsa onu hecne ile evezlemek olmaz.

    // misal 4:
    // let userInfo={
    // name:"Anar",
    // surname:"Babazade"
    // };
    // console.log(userInfo);
    // userInfo.name=""
    // console.log(userInfo);
    // delete userInfo.name
    // console.log(userInfo);

    //   Bu kodda obyekt yazilib,consola cixarilib.Sonra ise obyektin datasinin icine yerine bos string yazlib cconsola cixarilib.
    // Lakin bele etsekde data oradan silinmir.Silmek ucun delete yazib obyektin datasini cagirmaliyiq.Sonuncu consolda gorduyumuz 
    // kimi.


    // misl 5:
    // let firstField="liked"
    // const userInfo={
    // name:"Anar",
    // surname:"Babazade",
    // isStudent:false,
    // age:27,
    // adress:{
    // city:"Baku",
    // street:"Memmedov"
    // },
    // [firstField+""+"Javascript"]:true
    // }
    // console.log(userInfo);
    // console.log(userInfo["adress"]);
    // console.log(userInfo["adress"]["city"]);

    //   Bu kodda bir deyisen teyin edirik.Sonra obyek yaziriq.Obyektin icerisine normal datalar,data kimi obyekt,icerisinde teyin
    // etdiyimiz deyisen + string yazilmis data yazib sonra ise obyekti colde consola cixara bilerik.Ikinci consolda ise obyektin
    // icindeki obyekti cixartmisiq.Ucuncu consolda ise obyektin icindeki obyektin datasini consola cixartmisiq.


    // misal 6:
    // let firstName=prompt("Adinizi daxil edin")
    // let lastName=prompt("Soyadinizi daxil edin")
    // const person={}
    // person["name"]=firstName
    // person["surname"]=lastName
    // console.log(person);
    // person.name="Celil"
    // person.surname="Besirov"
    // console.log(person);

    //   Bu kodda iki prompt yazmisiq. Sonra bos obyekt teyin etmisik.Bu obyekte yeni datalar elave edib,onlari aidiyyati uzre
    // promptlara beraber edirik.Sonra consola cixaririq.Sonra ise bu obyekte yeniden yeni datalar elave edib consola cixarda bilerik.

    // misal 7:
    // let key="surname"
    // let person={
    // name:"Anar"
    // }
    // person.key="Babazade"
    // console.log(person);

    //   Bu kodda bir deyisen teyin edirik.Sonra bir obyekt teyin edirik,icerisinde "name" data olan.Obykektin datasi kimi bu
    // deyisenin adini elave edersek,obyekti consola cixardiqda deyisenin deyeri obyektin datasi kimi consola cixar.Hemin
    // datanin deyeri ise obyekte elave etdiyimiz deyisenin deyerine beraber olar.

    // misal 8:
    // const userInfo={
    //     0:"ingress",
    //     1:"Academy"
    // }
    // console.log(userInfo);
    // console.log(userInfo[0]);
    // console.log(userInfo[1]);

    //   Bu kodda obyekt teyin olunur ve datalati reqemlerle yazilir.Reqemli datalar [] yalniz bele cagrilir.


    // misal 9:
    // let firstName=prompt("Adinizi daxil edin")
    // let lastName=prompt("Soyadinizi daxil edin")
    // function printUserInfo(name,surname){
    //  return{
    //  name,
    //  surname
    // }
    // }
    // console.log(printUserInfo(firstName,lastName));

    //   Bu kodda 2 prompt yazilir.Sonra funksiya yazilir iki parametr ile,icinde return obyekt elave olunur ve funksiyanin parametri ile
    // obyektin datalari eyni adda yazilir.Consolda funksiya cagrilib icine arqument olaraq promptlari elave etsek,prompta yazilan yazilar
    // obyektin icerisine dusecek.


    // misal 10:
    // let firstName=prompt("Adinizi daxil edin")
    // let lastName=prompt("Soyadiniz daxil edin")
    // function printUserInfo(name,surname){
    // let fullName=name+""+surname
    // return{
    // name,
    // surname,
    // fullName
    // }
    // }
    // console.log(printUserInfo(firstName,lastName)); 

    //   Bu kodda iki prompt teyin edirik.Sonra bir funksiya yazib,icerisine bir deyisen elave edirik.Bu deyiseni funksiyanin parametr-
    // lerinin birlesmesine beraber edirik.Bundan sonra funkiyada return obyekti yazib icine funksiyanin parametrlerini ve funksiyanin
    // icine yazdigimiz deyisni elave edirik.Return yazdigimiza gore obyekt funksiyaya beraber olur.Consola funksiyani yazdigimiz zaman 
    // arqument olaraq colde olan promptlari elave etdikde,consolda obyektin icinde yazilan datalarin deyerlerini goreceyik.

    // misal 11:
    // let firstName=prompt("Adinizi daxil edin")
    // let lastName=prompt("Soyadiniz daxil edin")
    // let person={
    // name:firstName,
    // surname:lastName,
    // fullName:function(){
    // console.log(this.name+""+this.surname);
    // console.log(this);
    // }
    // }
    // person.fullName()

    //   Bu kodda iki eded prompt teyin edirik.Sonra obyekt yazib icinde name,surname datalari yazib onlara promptdan deyer gelsin 
    // deye bu datalara prompt deyerleri yaziriq.Bundan sonra fullName datasi obyektin icine alve olunaraq ona funksiya deyeri verilir.
    // Bu bunkiysanin icinde ise consollar yaziriq burda consolda yazdigimiz this obyektin adini evez edir.Colde funksiyani cagirmagi
    // unutmuruq.This arrow functionlarda islemir.

    // qeyd:Obyektler hec vaxt bir birine beraber olmur.

                                                
                                        //    Objects methods

    // 1.create metod 
    // const person={
    // isHuman:false,
    // printIntroduction:function(){
    // console.log(`My name is ${this.name} Am i Human?${this.isHuman}`);
    // }
    // }
    // const me=Object.create(person)
    // me.name="Anar"
    // me.isHuman=true
    // me.printIntroduction()

    //   Bize burada obyekt verilib ve icersinde key-leri var.Keylerden biri funksiyadir.Biz bu obyektin adini deyismek 
    // ucun create metodundan istifade etmisik.Yeni obyektde ise keyleri deyismisik.

    // 2.freeze metod 
    // const obj={
    // prop:42
    // }
    // delete obj.prop
    // Object.freeze(obj)
    // obj.prop=55
    // obj.text="salam"
    // console.log(obj);

    // Bu metod yazildigi yerden sonra hec bir emeliyyat islemir.

    // 3.Seal metod 
    // const obj={
    //     prop:42
    //     }
    //     Object.seal(obj)
    //     delete obj.prop
    //     obj.prop=55
    //     obj.text="salam"
    //     console.log(obj);

    // Bu metod yazildiqdan sonra data elave etmek ve ya data silmek olmaz.Yalniz datanin deyerini deyisdire bilerik.

    // 4.isFrozen metod 
    // const obj={
    //     prop:42
    //     }
    //     delete obj.prop
    //     Object.freeze(obj)
    //     obj.prop=55
    //     obj.text="salam"
    //     console.log(Object.isFrozen(obj));

    //    Bu metod kodda freeze ve ya seal metodu varsa true yoxdursa false cavabini qaytarir.

    // 5.isSealed metod 
    // const obj={
    //     prop:42
    //     }
    //     delete obj.prop
    //     Object.freeze(obj)
    //     obj.prop=55
    //     obj.text="salam"
    //     console.log(Object.isSealed(obj));

    //   Bu metod kodda freeze ve ya seal metodu varsa true yoxdursa false cavabini qaytarir.

    // 6.keys and values metod 
    // let user={
    // name:"1",
    // surname:"2"
    // }
    // console.log(Object.keys(user));
    // console.log(Object.values(user));

    //   Bu metod ile obyektin acar sozlerini hemde acar sozlerin deyerlerini arrayin icersinde goturmek 
    // olar.


















                                             
                                            //   Java Script if,else,else if

        //   if(){}else if(){}else{} -Bu struktur If,else if,else-nin qurulus strukturudur.() icerisinde sert yazilir,{} icerisinde ise
        //  sert odenilerse ekrana ne cixacagi yazilir.Burda ardicilliq yuxardan asagi gedir.if yoxlanir sert odenmirse sonra else if 
        //  yoxlanir, oda odenmirse ekrana else cixir.

        //  If,else if,else-ye aid misallar:

        // misal 1:
        // let a=5
        // if(a==5){
        // console.log("Beraberdir");
        // }else{
        // console.log("Beraber deyil"); 
        // }

        //  Burada deyisen teyin etdik,bu deyisene if elsede sert yazib yoxladiq.Ifin sertini odediyine gore ifin {}-nin icerisnde olan
        // emeliyyat ishe dusur.


        // misal 2:
        // let userName=prompt("Username")
        // let userPassword=prompt("UserPassword")
        // if(userName=="Anar"&& userPassword=="1234"){
        // alert("Succes")
        // }else if(userName==null&&userPassword==null){
        // alert("Cancel duymesini istifade etmeyin")
        // }else if(userName==""&&userPassword==""){
        //     alert("Xanalari bos saxlamayin")
        // }else{
        // alert("Wrong")
        // }

        //  Bu kodda 2 prompt teyin olunub.Sonra bu promptlar if,else if-in icerisnde yoxlanisa gonderilib,eks halda ise elsenin ekrana 
        // cixmasi emri verilib.if-de userName ve userPassword konkret olaraq teyin olunub.Eger prompta teyin olunmus deyerler yazilarsa
        // if-in emeliyyat sistemi ishe duser ve alert ekrana cixar,yox basqa deyer yazilarsa if else sherti yoxlanar.Bu sertde yazilib
        // ki,eger userName ve userPassworddan gelen cavab null-dirsa yeni cancel imtina duymesi sixilibsa,onun emeliyyat sistemini yeni
        // allertini ekrana cixart.Bu sertde odenmezse,ikinci else if-in serti yoxlanar,yeni userName ve userPassword-un icerisi bosdursa
        // ekrana onun allerti cixar.Bu sertde odenmezse else ozu ekrana cixar.


        // misal 3:
        // let hefte=prompt("heftenin gununu daxil edin")
        // if(hefte==""){
        // alert("xanalari bos saxlamayin")
        // }else if(hefte==null){
        // alert("cancel duymesini sixmayin")
        // }else if(hefte==1||hefte=="bazar ertesi"){
        // alert("bazar ertesi")
        // }else if(hefte==2||hefte=="cersenbe axsami"){
        // alert("cersenbe axsami")
        // }else if(hefte==3||hefte=="cersenbe"){
        // alert("cersenbe")
        // }else if(hefte==4||hefte=="cume axsami"){
        // alert("cume axsami")
        // }else if(hefte==5||hefte=="cume"){
        // alert("cume")
        // }else if(hefte==6||hefte=="senbe"){
        // alert("senbe")
        // }else if(hefte==7||hefte=="bazar"){
        // alert("bazar")
        // }else{
        // alert("heftenin bele gunu yoxdur")
        // }

        //   Bu kodda prompt teyin olunur ki,icersine heftenin gunlerini yaza bilek.Sonra ise prompta yazilan yazi ei,else if
        //ile yoxlanilir.Eger bu sertler odenmirse elsenin emeliyyat sistemi ishe dushur ve allert ekrana cixir.


        // misal 4:
        // let userName=prompt("Username")
        // let userPassword=prompt("Password")
        // let user={}
        // user.name=userName
        // user.password=userPassword
        // function chekAuth(data){
        // let userLogin="babazadeanar94@gmail.com"
        // let userLoginPassword="babazade1997"
        // let result=user.password
        // delete user.password
        // data["userPassword"]=result
        // console.log(data);
        // if(data.name==""&&data.password==""){
        // alert("Xanalari bos axlamayin")
        // }else{
        // if(userLogin==data.name&&userLoginPassword==data.password){
        // alert("succes")
        // }else{
        // alert("wrong")
        // }
        // }
        // }
        // chekAuth(user)

        //   Bu kodda 2 prompt,bir dene ise obyekt teyin edirik.bu promptlari obyektin icine elave etmek ucun,obyekte 2 eded data
        // elave edirik ve ayri ayriliqda bu datalari promptlara beraber edirik.Sonra bir funksiya yaziriq ve funksiyaya data adli
        // parametr gelir.Funksiyanin icinde ise 2 standart deyisen teyin edirik,sonra biz funksiyanin icerisinde obyektin datala-
        // rinin adini deyise bilerik.Bunun ucun obyektin datasini her hansisa bir deyisene beraber edirik,sonra obyektin datasini
        // silirik,sonra yeni data elave edib onu bu deyisene beraber edirik,consola cixardiriq.Bundan sonra sert yazmaga baslayiriq.
        // Sertde ilkin olaraq yaziriq ki,obyektin datalari bosdursa xeberdarliq et.Novbeti yaziriq ki,obyektin datalarin deyisenleri
        // funksiyanin deyisenlerine beraberdirse,alert cixart.Elsede ise yaziriq ki,bunlar hec biri deyilse yene alert cixart.
        // Funksiyanin colunde funksiyani cagirib, icersine obyekti arqument olaraq oturmeyi unutmuruq.


                                                    // misal 5:
        // let a =prompt("ucbucagin birinci terefinin olcusunu yazin")
        // let b =prompt("ucbucagin ikinci terefinin olcusunu yazin")
        // let c =prompt("ucbucagin ucuncu terefinin olcusunu yazin")
        // if(a==b && b==c){
        // console.log("bu ucbucaq berabertereflidir");
        // }else if(a==b || b==c ||a==c){
        // console.log("bu ucbucaqda iki teref bir birine beraberdir");
        // }else{
        // console.log("bu ucbucaqda butun terefler ferqlidir");
        // }

        //  Bu kodda 3 eded prompt qeyd olunmusdur.Bu kodda sertler qoyuruq ki, eger 3 teref bir-birine beraberdise consola "bu ucbucaq beraber-
        // tereflidir" yazdir.Yox 2 terefi birbirine beraberdise consola "bu ucbucaqin iki terefi beraberdir" yazdir.Bu sertler hec biri uygun ol-
        // madigi halda consola "bu ucbucaqda butun terefler ferqlidir" yazdir.
        
        
                 
                                                 // Switch,Case

        //   Switch,case-in yazilis strukturunu asagidaki misalda goreceksiniz.Eynile if,else-ye benzerdir.Sadece yazilis formasi 
        // ferqlidir.

                                                 // misal 1:
        // let hefte=prompt("heftenin gununu daxil edin")
        // switch(hefte){
        // case null :{
        // console.log("cancel duymesini sixmayin");
        // break;
        // }
        // case "":{
        // console.log("xanalari doldurun");
        // break;
        // }
        // case "1":{
        // console.log("1 gun");
        // break;
        // }
        // case "2":{
        // console.log("2 gun");
        // break;
        // }
        // case "3":{
        // console.log("3 gun");
        // break;
        // }
        // case "4":{
        // console.log("4 gun");
        // break;
        // }
        // case "5":{
        // console.log("5 gun");
        // break;
        // }
        // case "6":{
        // console.log("6 gun");
        // break;
        // }
        // case "7":{
        // console.log("7 gun");
        // break;
        // }
        // default:{
        // console.log("heftede bele gun yoxdur");
        // }
        // }
       
        //   Bu kodda prompt teyin edirik.Sonra switch acar sozunu yazib mohterizelerinin icersine promptu elave edirik.Switchin 
        // icersine caseler yaziriq bu caseler eger promptla eynidirse,case-in emeliyyat sistemi ishe dushur,deyilse novbeti caseleri
        // yoxlayir.Unutmaq olmazki,caselerden sonra break sozunu yazmaq lazimdir,cunki hansisa case-in emeliyyat sistemi ishe duserse,
        // ozunden sonraki emeliyyat sitemlerini ishe salir.Break onu dondurur.Eger prompt hec bir case-e beraber olmazsa,bu zaman defa-
        // ult ishe dusur.

                                            // misal 2:
        // let a = Number(prompt("emeliyyat edeceyiniz ilk reqemi daxil edin"))
        // let b =prompt("+ - * /  bu emeliyyatlardan birini secin")
        // let c =Number(prompt("emeliyyat edeceyiniz ikinci reqemi secin"))
        // switch(b){
        // case "*" :{
        // console.log(a*c);
        // break;
        // }
        // case "+":{
        // console.log(a+c);  
        // break;
        // }
        // case "-":{
        // console.log(a-c);
        // break;
        // }
        // case "/":{
        // console.log(a/c);
        // break;
        // }
        // default:{
        // console.log("xahis olunur reqem ve emeliyyatlardan istifade edin");
        // }
        // }
         
        //  Bu kodda promptlar ile kalklyator hazirlamisiq.

                                        // mmisal 3:
        // let a=prompt("Ilin ayini daxil edin")
        // switch(a){
        // case "Yanvar" :{
        // console.log(a,"soyuq aydir")
        // break;
        // }
        // case "Fevral" :{
        // console.log(a,"ilin ikinci ayidir");
        // break;
        // }
        // case "Mart" :{
        // console.log(a,"yazin ilk ayidir");
        // break;
        // }
        // case "Aprel" :{
        // console.log(a,"yazin ikinci ayidir");
        // break;
        // }
        // case "May" :{
        // console.log(a,"yazin sonuncu ayidir");
        // break;
        // }
        // case "Iyun" :{
        // console.log(a,"yayin ilk ayidir");
        // break;
        // }
        // case "Iyul" :{
        // console.log(a,"deniz movsumu acilir");
        // break;
        // }
        // case "Avqust" :{
        // console.log(a,"yayin sonuncu ayidir");
        // break;
        // }
        // case "Sentyabr" :{
        // console.log(a,"-da mektebler acilir");
        // break;
        // }
        // case "Oktyabr" :{
        // console.log(a,"yagislar olan aydir");
        // break;
        // }
        // case "Noyabr" :{
        // console.log(a,"havalar soyumaga baslayir");
        // break;
        // }
        // case "Dekabr" :{
        // console.log(a,"ilin sonuncu ayidir");
        // break;
        // }
        // default : {
        // console.log("Ilin bele ayi yoxdur get aylari oyren gel");
        // }
        // }

        //  Bu kodda biz prompta hansi ayi yazarsaq consolda onun haqqinda melumat ala bilerik.
                                    
















        //                                 Stringlerin metodlari
        //   Srringlerin asagidaki 21 metodu var:

        // 1.Sting length
        // let word="Hello world"
        // console.log(word.length);

        // Bu metod stingin uzunlugunu gosterir.Yeni herfler ve bosluqlarin sayini gostrerir.Saymaga 1-den baslayir.

        // 2.String Slice
        // let word="Hello word"
        // console.log(word.slice(2,6));

        //   Bu metod ile baslangic ve son noqte arasinda qalan elementleri goture bilirik.Baslangic ve son noqte 
        //  daxil olmadan.

        // 3.String substring
        // let word="Hello word"
        // console.log(word.substring(2,6))

        // Bu metod slice metodu ile eyni seydir.

        // 4. String substr
        // let word="Hello word"
        // console.log(word.substr(1,4))

        //   Bu kod ferqli isleyir, metodun birinci parametri emeliyyatin necenci indeksden baslayacagini gosterir,ikinci
        // parametr ise nece dene elementi goturmeyini gosterir. 

        // 5.String replace
        // let word="Please visit Microsoft"
        // let result=word.replace("Microsoft","W3schools")
        // console.log(result);

        //   Bu metodda birinci yazilan parametr deyisilen soz,ikinci yazilan parametr ise deyisenin evezine yazacagimiz sozdur.
        // Beleki sozleri deyismek ucun istifade olunur,lakin eger deyisilecek soz bir nece yerdedirse onlarin yalniz birinci 
        // gorduyunu goturur.Burada  1-ci parametrin qarsisinda /g yazmaliyiqki, deyisilecek soz bir nece yerde olsa bele 
        //   bununla hamisini deyise bilirik.Asagidaki numunedeki kimi:

        // let word="Please visit Microsoft to Microsoft"
        // let result=word.replace("Microsoft/g","W3schools")
        // console.log(result);

        //   Diger bir usul ise budur:
        // let word="Please visit Microsoft to Microsoft"
        // let result=word.replaceAll("Microsoft","W3schools")
        // console.log(result);

        // 6.String toUpperCase
        // let word="Please Microsoft visit"
        // let result=word.toUpperCase()
        // console.log(result);

        //   Bu metod butun herfleri boyutmek ucun istifade olunur.

        // 7.String toLowerCase
        // let word="Please Microsoft visit"
        // let result=word.toLowerCase()
        // console.log(result);

        //   Bu metod butun herfleri kiciltmek ucun istifade olunur.

        // 8.String concat
        // let word1="Hello "
        // let word2="world "
        // let word3="bye"
        // console.log(word1.concat(word2,word3));

        // Bu metod ile bir elemente diger elementleri birlesdirmek olur.

        // 9.String trim
        // let a="     Hello world"
        // console.log(a.trim());

        //   Bu metod stringin sagindan solundan bosluqlari silir.

        // 10.String trimStart ve String trimEnd
        //   trimStart soldan,trimEnd sagdan bosluqlari silir.

        // 11.String padStart ve String padEnd

        // let text="55"
        // let padded=text.padStart(5,"X")
        // console.log(padded);

        // Bu metod ile birinci teyin etdiyimiz parametr,umumi elementin length-ni teyin edir,ikinci parametr yazdigimiz
        // element ise soldan baslayaraq nece element catismirsa olanlarin yerine dolur.Consolda XXX55 bele goruntu alinir.

        // let text="55"
        // let padded=text.padEnd(5,"X")
        // console.log(padded);

         // Bu metod ile birinci teyin etdiyimiz parametr,umumi elementin length-ni teyin edir,ikinci parametr yazdigimiz
        // element ise sagdan baslayaraq nece element catismirsa olanlarin yerine dolur.Consolda 55XXX bele goruntu alinir.

        // 12.String chartAt
        // let text="Hello world"
        // let result=text.charAt(6)
        // console.log(result);

        //   Bu metod ile parametr olaraq stringin indeks nomresini yazarsaq,hemin indeksde olan elementi ala bilerik.

        // 13.String chartCodeAt
        // let text="Hello world"
        // let result=text.charCodeAt(0)
        // console.log(result);

        //   Bu metod ile oturduyumuz parametr, yeni stringin indeksinin klavyaturadaki reqemini tapa bilirik.

        // 14.String split
        // let text="Hel,lo, wor,ld"
        // console.log(text.split(","));

        //   By metoda parametr yazilir.Belelikle stringin icinde parametr gorulen hisselerden srting parcalanir ve
        // arrayin icine ayri ayri stringler olaraq yigillir.

        // 15.String indexOf
        // let text="Please locate where locate occours!"
        // console.log(text.indexOf("locate"));

        //   Bu metod ile stringin icersinde her hansisa bir soz,reqem ve ya  elementin baslanma indexini axtara bilirik.Bunun ucun 
        // metodun parametrine axtardigimiz elementi elave edirik ve onun baslanma indexini consola cixardigimizda goruruk.Eger hemin
        // element stringin icerisinde yoxdursa consola "-1" cixacaqdir.

        // 16.String lastINdexOf
        // let text="Please locate where locate occours!"
        // console.log(text.lastIndexOf("locate"));
        
        //   Bu metod ise indexOfdan ferqli olaraq axtardigim elementin indeksini sagdan sola dogru axtarir.

        // 17.String search
        // let text="Please locate where locate occours!"
        // console.log(text.search("locate"));

        //   Bu metdoun indexOfdan ferqi burur ki, icerisine pattern yazmaq mumkundur.

        // 18.String match
        // let text="The rain in Spain stays mainly in the plain"
        // let result=text.match("ain")
        // console.log(result);

        //   Bu metod axtardigimiz elementin stringde necenci indeksde oldugunu gosterir.

        // let text="The rain in Spain stays mainly in the plain"
        // let result=text.match(/ain/g)
        // console.log(result);

        //   Bele yazdiqda ise stringde harada bu element varsa consola cixacaq.
        
        // 19.String includes
        // let text="The rain in spain stays mainly in the plain"
        // console.log(text.includes("spain"));

        //   Bu metodun parametrine stringin icerisinde axtaracagimiz elementi yaziriq ve consolda eger bu 
        // element stringde varsa true yoxdursa false cixir.

        // 20.String StartsWith
        // let text="The rain in Spain stays mainly in the plain"
        // console.log(text.startsWith("T"));

        //   Bu metodun parametrine element yaziriq,eger string bu elementle baslayirsa consola cixardigimizda
        // consolda true eks halda false cixir.

        // 21.String endsWith
        // let text="The rain in Spain stays mainly in the plain"
        // console.log(text.endsWith("n"));

        //   Bu metodun parametrine element yaziriq,eger string bu elementle bitirse consola cixardigimizda
        // consolda true eks halda false cixir.


                                        //   Stringlere aid misallar:
                                        //   misal 1:
        // let  word = prompt("cevireceyiniz sozu daxil edin")
        // function reversetoString(str) {
        // let result =str.split("")
        // let result2=result.reverse()
        // result3=result2.join("")
        // console.log(result3);
        // }
        // reversetoString(word)

        //   Bu kodda bir prompt teyin edirik.Sonra funksiya yaziriq ve icersine parametr otururuk.
        // Funksiyanin icersinde parametri split metodu ile parcalayib array-e yigib,recerse meto-
        // du ile sagdan sola yazdirib,join metodu ile birlesdiririk.Sonra consola yazdiririq.Funk-
        // siyadan colde ise funksiyani cagirdiqda arqument olaraq icersine promptu otururuk.

                                        // misal 2:
        // let soz=prompt("axtaris edeceyiniz sozu daxil edin")
        // let herf=prompt("axtaris edeceyiniz herfi daxil edin")
        //  result=soz.includes(herf);
        // if(result==true){
        //  console.log("vardir");
        // }else{
        // console.log("yoxdur");
        // }

        //   Bu kodda 2 prompt teyin edirik.Sonra includes metodundan istifade ederek bir promptun icinde diger
        // promptun olmasini yoxlayiriq.Eger varsa "vardir" yoxsa "yoxdur" consola cixir.
















                                          
                                                //  Java Scripts Numbers methods

    //  1.Numbers toString
    //  let x=999999
    //  console.log(x.toString());

    //    Bu metod number-i string-e cevirir.

    // 2.Numbers toExponential
    // let x =9.356
    // console.log(x.toExponential(2));

    //   Bu metod parametr olaraq reqem qebul edir.Bu reqem necedirse bizim kesr deyiseninin kesr hissesi ora qeder 
    // yuvarlaqlasir.

    // 3.Numbers toFixed
    // let x=9.656
    // console.log(x.toFixed(1));

    // Bu metod reqemleri yuvarlaqlasdirmaq ucundur.Metod 0-dan baslayaraq reqem qebul edir.0-dan boyuk reqem yazarsaq 
    // pilleli olaraq ozunden sonraki hisseni yuvarlaqlasdirir.

    // 4.Numbers toPrecision
    // let x=9.656
    // console.log(x.toPrecision(3));

    //   Bu metod eynen toFixed metodu kimidir,lakin ferq odur ki ,0 yox 1-den baslayaraq reqem qebul edir.Qebul
    // etdiyi reqeme uygun olaraq number-i yuvarlaqlasdirir.
    
    // 5.valueOf
    // let x="9.656"
    // console.log(x.valueOf());

    //   Bu metod deyiseni consola reqemdirse reqem,stringidse string kimi cixarir.

    // 6.Number
    // let x="9.656"
    // console.log(Number(x));

    //   Bu metod stringi numbere cevirir.Buna asagidaki misali gostere bilerik:

    // let x=Number(prompt("Reqem daxil edin"))
    // let y=Number(prompt("Reqem daxil edin"))
    // if(!isNaN(x)&& !isNaN(y)){
    // let result=x+y
    // console.log(result);
    // }else{
    // alert("reqem daxil edin")
    // }

    //   Bu kodda 2 prompt yaziriq.Sonra sert qoyuruq ki eger bu prompta daxil edilen reqemler numberdirse 
    // toplama emeliyyati apar eks halda alert yaz.

    // 7.Numbers parseInt
    // console.log(parseInt(" -10.25 years "));

    //   Bu metod parametrinde eger ilk olaraq reqem gorurse onun tam hissesini menfisi ile,musbetile consola
    // cixarir.Gormezse consola Nan cixir.

    // 8.parseFloat
    // console.log(parseFloat(" -10.25 years "));

    //   Bu metod parseInt ile eyni isi gorur.Lakin ferq bundan bir ibaretdir ki,bu metod numberi tam olaraq deyil
    // oldugu kimi consola cixarir.



















                                            // While,for

    // let i=0
    // while(i<10){
    // console.log(i);
    // i++;
    // }

    //   While-in yazilis formasi if-e benzeyir lakin ferqli isleme sistemi var. Bir deyisen teyin edirik.Sonra 
    // while acar sozunden istifade ederek ()-e yeni sert hissesine sert yaziriq.Burada deyiseni 0 goturmusuk
    // sertde ise maksimum 10-a qeder olmasini yazmisiq.Sonra ise {}-lerde yeni emeliyyat sisteminde consola
    // deyiseni cixardiriq bundan sonra i++ yaziriq ki,her defe deyisenin uzerine bir gelinsin.Belelikle 0-dan
    // 10-a qeder consolda siralamani gore bilerik.

    
    // let i=0;
    // do{
    // i++;
    // console.log(i);
    // }while(i<10)

    //   Bu kod while-dan ferqli sintaksisde yazilib.Burda bir deyisen teyin olunub,sonra do emeliyyat sistemi 
    // yazilib,bu emeliyyat sisteminde i++ yazdigimiz ucun deyisenin uzerine 1 gelinir,consola cixarilir,sonra
    // emeliyyat sisteminden colde while yazilir ve serti qoyulur.Bu sert odenene qeder bu dongu davam edir,
    // consola 1-den 10-a qeder reqem ardicilligi cixir. 


    // let a= "Salam";
    // for(let i=0; i<a.length; i++){
    // console.log(a[i]);
    // }

    //   Bu kodda ixtiyari olaraq string teyin edirik.Sonra for yaziriq,()-nin icersinde i deyiseni teyin edib,
    // deyerini 0 qoyuruq.Sonra yaziriq ki,bu deyisen ixtiyari teyin edilen stringin length-inden kicik olsun.
    // Ve elave olaraq i++ yaziriq yeni ki i-deyisenin uzerine dongu olaraq her defe 1 gelsin.for-un neticesinde 
    // a deyiseninin i-leri yeni indeksleri consola cixsin.Bu sert pozluana qeder a-nin indeksleri consola cixir.


    // for(let i=0;i<100;i++){
    // if(i%2==0){
    // console.log(i);
    // }
    // }

    //   Bu kodda for-da i-ni teyin edirik.Sert olaraq i-nin 100-den boyuk olmamasini yaziriq.Sonra i++ yeni
    // i-nin uzerine her defe bir gelmesini yaziriq.for-in emeliyyat sisteminde sert yaziriq ki,eger i 2-ye 
    // bolundukde qaliqda 0 olursa hemin i-leri consola cixart.Belelikle 100-e qaliqsiz bolunen ededleri te-
    // yin edirik.

















                                            // Arrays

    // let fruits=[1,true,{name:"Anar"},"Babazade",[1,2]]
    // for(let i=0;i<fruits.length;i++){
    // console.log(fruits[i]);
    // }

    //   Bu kod ile array teyin edirik.Sonra for ile dongu yaradiriq.forun emeliyyat sistemin ise consola 
    // fruitsun i-lerini cixardiriq.Yeni arrayin icinde ne varsa consola cixir.


    // let users=[
    // {name:"Anar",surname:"Babazade"},
    // {name:"Celil",surname:"Besirov"}
    // ]
    // for(let i=0;i<users.length;i++){
    // console.log(users[i].name+" "+users[i].surname);
    // }

    //   Bu kodda array teyin edirik ve onun icersinde obyektler olur.Bu obyektlerin icersinde name ve surname
    // olur.Sonra for-ile dongu yaradib consolda name ve surname birlesmesini cixardiriq.


                                           //   Arrays methods
    
    //   Arayin 28 metodu var.Bunlar asagidakilardir:

    // 1.Array length
    // let arr=[1,2,3,"salam"];
    // console.log(arr.length);

    //   Bu metod arrayin icersinde nece elementin olmasini gosterir.

    // 2.Array toString 
    // let arr=[1,2,3,"salam"];
    // console.log(arr.toString());

    //   Bu metod arrayi stringe cevirmek ucundur.

    // 3.Array at 
    // let arr=["banana","apple","orange"];
    // let fruits=arr.at(2)
    // console.log(fruits);
    
    //   Bu metod arrayin icersindeki indeksi secmek ucundur.

    // 4.Array join
    // let arr=["banana","apple","orange"];
    // let fruits=arr.join("")
    // console.log(fruits);

    //   Bu metod arrayin indekslerini birlesdirmek ucundur eger ("")icersine neyse yazsaq biz yazdigimizi
    // birlesmelerde gorerik.Hemde bu metod birlesmeden sonra arrayi stringe cevirir.

    // 5.Array pop 
    // let arr=["banana","apple","orange"];
    // let fruits=arr.pop()
    // console.log(fruits);

    //   Bu metod arrayin axrinci datasini goturur.

    // 6.Array push 
    // const fruits=["banana","orange"]
    // const newFruits=fruits.push("salam");
    // console.log(fruits);

    //   Bu metod ile biz arraye yeni bir indeks elave ede bilerik.Ancaq elave etdiyimiz zaman yeni bir array
    // emele gelmez.Kohne arrayin icersinde biz yeni indeksi gore bilerik.

    // 7.Array shift
    // const fruits=["banana","orange","apple"]
    // console.log(fruits.shift());

    //   Bu metod arrayin sonunda olan burun indeksleri silir.Yalniz birinci indeks qalir.Hemde arrayi stringe 
    // cevirir.

    // 8.Array unshift
    // const fruits=["banana","orange"]
    // fruits.unshift("Hello")
    // console.log(fruits);

    // Bu metod arrayin evveline indeks elave edir. 

    // 9.Array concat
    // const myGirls=["Celil","Anar"]
    // const myBoys=["Fuad","Emin"]
    // const myChildren=myGirls.concat(myBoys)
    // console.log(myChildren);

    //   Bu metod iki ayri arrayin indekslerini bir arrayin icersine yigir.

    // 10.Array copyWithin
    // let reqem =["1","2","3","4","5","6"]
    // console.log(reqem.copyWithin(0,2,4));

    //   Bu metoda birinci yadigimiz parametr yeni elave edeceyimiz indekslerin necenci indeksden baslayaraq elave
    // olunmasini gosterir.Ikinci ve ucuncu yazilan parametrler ise kocurulecek indekslerin baslangic ve son noqte-
    // lerini gosterir.Lakin baslangic noqte bu araliga daxil olur,son noqte ise yox.Burada 0-ci indeks "1" oldugun-
    // dan kocurulecek yer "1" den baslayaraq sayilir."2" ve "4" baslanma ve son noqtelerinin arasinda 2-ci ve 3-cu
    // indeks var.Buna gorede 2-ci indeks olan "3" ve 3-cu indeks olan "4","1"-den baslayaraq arrayin icersine koce-
    // cek.Consolda cavab ["3","4","3","4","5","6"] olacaq.

    // 11.Array flat 
    // const oldArray=[
    // [1,2],
    // [3,4]
    // ]
    // const newArray=oldArray.flat()
    // console.log(newArray);

    //   Bu metod bir arrayin icersinde olan iki arrayi yeni bir arraye yigir.

    // 12.Array splice 
    // let reqem=["1","2","3","4","5","6"]
    // reqem.splice(0,3,"bir","iki","uc")
    // console.log(reqem);

    //   Bu metodda 1-ci ve 2-ci yazilan parametrler baslangic ve son noqte goturerek,araliq yaradir.Bu araliqa
    // son noqte daxil olmur ve bu araliqda olan indeksler silinir.Silinen yerden baslayaraq sonra yazdigimiz
    // prametrler arrayin icersine daxil olur.

    // 13.Array slice 
    // let reqem =["1","2","3","4","5","6"]
    // let reqemler=reqem.slice(2,4)
    // console.log(reqemler);

    //   Bu metod iki parametr qebul edir. Bu parametrler araliq yaradir.Son noqte araliq daxil olmur.Bu metodla
    // araliga dusen indeksleri yeni arrayin icersinde goture bilerik.

    // 14.Array sort 
    // const fruits=["apple","orange","banana"]
    // fruits.sort()
    // console.log(fruits);

    //   Bu metod arrayin icersini elifbaya gore duzur.

    // 15.Array reverse 
    // const fruits=["apple","orange","banana"]
    // fruits.reverse()
    // console.log(fruits);

    //   Bu metod arrayin indekslerini sagdan sola duzur.

    // 16.Array indexOf 
    // const fruits=["apple","orange","banana"]
    // console.log(fruits.indexOf("apple")+1);

    //   Bu metodun parametrinde axtardigimiz indeksin icersini yaziriq ve o bize indeks nomresini qaytarir.Axtarilan 
    // indeksin icersinin qarsisinda +1 yazsaq indeks nomresinin uzerine 1 gelecek.

    // 17.Array lastIndexOf 
    // const fruits=["apple","orange","banana","apple"]
    // console.log(fruits.lastIndexOf("apple")+1);

    //   BU metod indexOf ile eynidir tek ferqi index nomresini axirdan evvele dogru axtarir.

    // 18.Array includes 
    // const fruits=["apple","orange","banana","apple"]
    // console.log(fruits.includes("apple"));

    //   Bu metod ile axtarilan index eyer arrayde varsa consola true yoxsa false cixar.

    // 19.Array find 
    // const numbers=[4,9,16,25,29]
    // let first=numbers.find((value)=>value>18)
    // console.log(first);

    // Bu metodun parametri callback qebul edir.Burada 18 den boyuk ilk index consola cixarilir.

    // 20.Array findIndex
    // const numbers=[4,9,16,25,29]
    // let first=numbers.findIndex((value)=>value>18)
    // console.log(first);

    //   Bu metod eynile find metodu kimidir,lakin indexsin ozunu deyil reqemini consola cixarir.

    // 21.Array findLast
    // const temp=[27,28,30,41,42,35,30]
    // let high=temp.findLast((x)=>x>40)
    // console.log(high);

    //   Bu metod eynile find metodu kimidir,tek ferqi axtarisi sagdan sola edir.

    // 22.Array forEach
    // const numbers=[45,4,9,16,25]
    // const num=Number(prompt("reqem yaz"))
    // numbers.forEach((item)=>console.log(item**num));

    //   Bu metod parametr olaraq call back qebul edir.Bu metod for-a benzeyir.Arrayin icersinde gezir.
    // Metoda yazdigimiz call back funksiyasi arrayin butun indekslerini ayri ayriliqda ise salir.

    // 23.Array map 
    // Bu metod foreach metodu ile eyni seydir.Bir ferqi odur ki,foreach eyni arrayin icersinde isleyir,
    // lakin map yeni array yaradir. 

    // 24.Array filter 
    // const numbers=[45,4,9,16,25,100,70]
    // const over=numbers.filter((value)=>value>18)
    // console.log(over);
    
    //   Bu metoda yazdigimiz call back-e uygun olaraq metod ise dusur.Burada sert 18 den boyuk reqemleri 
    // tampaqdir.Metod arrayde 18 den boyuk butun reqemleri consola cixardir.

    // 25.Array reduce
    // const user=[
    // {name:"Anar",salary:1500},
    // {name:"Celil",salary:1000},
    // {name:"Neci",salary:800}
    // ]
    // let totalSalary=user.reduce((total,cash)=>total+cash.salary,0)
    // console.log(totalSalary);

    //   Bu kodda ilk olaraq arrayin icerseinde 3 obyekt goruruk.Bu obyektlerde iscilerin adlari ve maaslari
    // yazilmisdir.Biz reduce metodundan istifade ederek iscilerin maaslarinin cemini oyrene bilerik.reduce
    // metodu 2 parametr qebul edir.Burada 1-ci parametr total yeni bosluq goturulur,ikinci parametr ise 
    // iscilerin maaslarini goturecek.Call back-e yazilir ki,total yeni boslugun uzerine iscilerin maaslarini
    // gel.Vergulden sonra yazilan 0 ise totalin ilkin qiymetinin 0 oldugunu gosterir.

    // 26.Array every 
    // const numbers=[45,4,9,16,25]
    // const allOver18=numbers.every((value)=>value>18)
    // console.log(allOver18);

    //   Bu metod call back qebul edir. Eger arrayin icersindeki butun indeksler call back-in sertini
    // odeyirse cavab true eks halda false cixir.

    // 27.Array spread 
    // const q1=["1","2","3"]
    // const q2=["4","5","6"]
    // const q3=["7","8","9"]
    // const q4=["10","11","12"]
    // const year=[...q1,...q2,...q3,...q4]
    // console.log(year);
   
    //   Bu metod bir nece arrayi yeni bir arraye yigmaq ucun istifade olunur.
    
       
                                    //  Array bolmesi uzre parktika:
    // misal 1.
    // let arr=[1,2,3,4,11,3,7,3,4,6,7,8,9,11]
    // let duplicate=[]
    // arr.forEach((value,index,array)=>{
    // if(
    // array.indexOf(value,index+1)!=-1&&duplicate.indexOf(value)===-1
    // ){
    // duplicate.push(value)
    // }
    // })
    // console.log(duplicate);

    //   Bu kodda bize icersinde ededler olan array verilmisidr.Burada biz tekrarlanan ededleri tapmaliyiq.
    // Bunun ucun tekrarlanan ededleri yigmaq ucun bos array teyin edirik.Sonra  icersi dolu olan  arrayimizde 
    // forEach metodu ile dongu yaradiriq.Bu donguye 3 parametr elave edirik.Bu parametrler deyerin ozu,indexi
    // ve arrayin ozu olur.Bundan sonra dongude sert yaziriq ki,eger arrayin icersinde olan deyer arrayin 
    // icersinde varsa yeni indexOF metodunun cavabi "-1" cixmirsa ve bu deyer duplicate-in icersinde yoxdursa 
    // hemin deyeri duplicate-e elave et.Sonra consolda duplicate-i cixardiriq.

    
    










                                            //    Math 

    // let num =Math.PI
    // console.log(num);

    //  Bu math ucun numunedir.Pi-nin evezine hansi riyazi sabiti yazsaq,onun qiymeti consola cixar.
    
                                            // Math methods

    // 1. Math round 
    // let num =Math.round(4.5)
    // console.log(num);

    //   Bu metod parametr olaraq kesr ededler qebul edir.Qebul etdiyi ededi yuvarlaqlasdirir.Eger kesr hisse 
    // 0.4 den boyukdurse consola "5" eks halda 4 cixar.

    // 2.Math ceil 
    // let num =Math.ceil(4.1)
    // console.log(num);

    //   Bu metod reqemi ancag yuxariya dogru yuvarlaqlasdirir.Yeni burada cavab "5" cixir.

    // 3.Math floor
    // let num =Math.floor(4.9)
    // console.log(num);

    //   Bu metod edeleri ancag asagiya dogru yuvarlaqlasdirir.

    // 4.Math sign 
    // let num =Math.sign(-4.1)
    // console.log(num);

    //   Bu metod cavab olaraq yalniz "+1","-1" ve "0" qaytarir.Eger parametr olaraq daxil etdiyimiz eded menfidirse
    // "-1",musbetirse "1","0"-dirse "0" cavabini bize qaytarir.

    // 5.Math pow 
    // let num=Math.pow(8,2)
    // console.log(num);

    //   Bu metodun parametrinde 1-ci yazilan ededin ozu, ikinci yazilan ise onun ustudur.Beleki cavab 64 cixar.

    // 6.Math sqrt 
    // let num =Math.sqrt(64)
    // console.log(num);

    //   Bu metod parametre yazilan ededi kok altina salir.

    // 7.Math abs 
    // let num =Math.abs(-4.1)
    // console.log(num);

    //   Bu metod parametrine qebul etdiyi "-" ededi "+" olaraq qaytarir.

    // 8.Math sin 
    // let num =Math.sin((90*Math.PI)/100)
    // console.log(num);

    //   Bu metod icersinde riyazi emeliyyatlar aparmaq ucundur.

    // 9.Math min and max 
    // let num =Math.min(1,2,-5,-7,4,17)
    // console.log(num);

    // let number =Math.max(1,2,-5,-7,4,17)
    // console.log(number);

    //   Bu metod ile min ve max qiymetleri tapmaq mumkundur

    // 10.Math random 
    // let num =Math.random()
    // console.log(num);

    // Bu metod random olaraq reqem atmaq ucundur. 

    //   misal 1:
    // class Person{
    // constructor(id,name,surname){
    // this.id=id
    // this.name=name
    // this.surname=surname
    // }
    // } 
    // const user= new Person()
    // const user2=new Person()
    // user.id=Math.random()
    // user.name="Anar"
    // user.surname="Babazade"
    // user2.id=Math.random()
    // user2.name="Celil"
    // user2.surname="Besirov"
    // console.log(user);
    // console.log(user2);

    //   Bu kodda ilkin olaraq obyekt teyin etmisik.Bundan sonra bu obyktin icersine constructor funksiya yazmisiq.
    // Bu funkiyada obyektin key name-lerini funksiyanin parametrlerine beraber etmisik.Bu obyektden colde ise 2 
    // yeni obyekt yaradib sonra ise ayri ayriliqda onlara key nameler elave edirik.Her birinin id-sini Math.random()
    // ile teyin edirik.Sonra bu yeni obyektleri ayri ayri consola cixaririq.Her defe ekrani yeniledikde id nomrele-
    // rinin deysidiyini musahide edirik.















                                                //   Java Script Date

    // const day=new Date()
    // console.log(day);

    //   Bu kod ile biz hal hazirdaki tarixi tam deqiqliyi ile consolda goruruk.

    // Java Script date formats:

    // 1.ISO dates. 
    // const day=new Date("2015-03-25")
    // console.log(day);

    //   Bu ISO formatinda date-dir.

    // 2.Short Dates.
    // const day=new Date("03/25/2015")
    // console.log(day);

    //   BU short formatda date-dir.

    // 3.Long dates 
    // const day=new Date("february 25 2015")
    // console.log(day);

    //   BU long formatinda Date-dir.


    // Java Script date parse:
    // const day=Date.parse("March 21,2012")
    // console.log(day);

    //  Bu kodda biz yazdigimiz tarixi parse ederek onu milli saniyeye cevire bilerik.


                                        // Date methods

    // 1.getFullYear
    // const d=new Date("2021-03-25")
    // console.log(d.getFullYear());

    //   Bu metod ile yazdigimiz tarixde iii goture bilirik.

    // 2.getMonth 
    // const d=new Date("2021-03-25")
    // console.log(d.getMonth());

    //   Bu metod yazdigimiz tarixin ayini qaytarir.Lakin cavabi aylarin indeks nomresine gore qaytarir
    // yeni aylari 0 dan saymaga baslayir.

    // 3.getDate
    // const d=new Date("2021-03-25")
    // console.log(d.getDate());

    // Bu metod yazilan tarixde ayin necesi oldugunu gosterir.Burada sayim indekse gore goturulmur.
    
    // 4.getDay
    // const d=new Date("2024-02-19")
    // console.log(d.getDay());

    //   Bu metod ile yazilan tarixin heftenin necenci gunune dusduyunu oyrene bilerik.Burada sayim indekse gore
    // goturulmur.

    // 5.getHours
    // const d=new Date("2024-02-19")
    // console.log(d.getHours());

    //   Bu metod saati gosterir,saat olmadiginda saat qursagini gosterir.

    // 6.getMinutes
    // const d=new Date("2024-02-19")
    // console.log(d.getMinutes());

    // Bu metod yazilan tarixin deqiqesini gosterir.

    // 7.getSeconds
    // const d=new Date("2024-02-19")
    // console.log(d.getSeconds());

    //  Bu metod yazilan tarixin saniyesini gosterir.

    // 8.getMilliseconds
    // const d=new Date("2024-02-19")
    // console.log(d.getMilliseconds());

    //  Bu metod yazilan tarixin milliSaniyesini gosterir.

    // 9.getTime
    // let d=new Date()
    // console.log(d.getTime());

    //   Bu metod Jacascript yarandigi gunden bu gune kimi olan millsaniyeni bize qaytarir.


    // misal 1:
    // const date="2023-01-25"
    // const changeDateFormat=(date)=>{
    // let result=date.split("-").reverse().join("/")
    // console.log(result);
    // }
    // changeDateFormat(date)

    //   Bu kodda bize ixtiyari bir deyisenle tarix verilib.Bu tarixin formatini deyismek ucun
    // biz onu funksiyaya parametr olaraq otururuk,sonra funksiyada yeni ber deyisen teyin edib
    // bu deyisende parametri split metodu ile "-" yazlan yerlerden ayirib arrayin icersine ayri-
    // ayri yazdiririq.Sonra reverse metodu ile sagdan sola duzdururuk.Bundan sonra ise bu indeksle-
    // ri birlesdirib aralarina "/" isaresi atiriq.Consola funksiyada teyin etdiyimiz deyiseni yazi-
    // riq.Funksiyada colde funksiyani cagirmagi unutmuruq.

    // msial 2.
    // let date="2024.01.27"
    // const formatDate=(date,format)=>{
    // switch(format){
    // case "-":
    // let result=date.split(".").reverse().join(format)
    // console.log(result);
    // case "/":
    // let result2=date.split(".").reverse().join(format)
    // console.log(result2);
    // }
    // }
    // formatDate(date,"/")

    //  Bu kodda bize tarix verilir.Tapsiriq ise onun formatini deyismekdir.Formati deyismek ucun 
    // ilk once funksiya yaziriq.Funksiyaya 2 parametr teyin edirik.Bu parametrler date ve format 
    // olur.Sonra funksiyada switch/case isletmeye baslayiriq.Case-in birincisinde qeyd edirik ki,
    // eger format "-" olarsa date-i parcala arraye yig,sagdan sola yig,format ile birlesdir stringe
    // cevir,consolda goster.Ikinci case-de de eyer format "/" olarsa eyni emeliyyati yerine yetir.
    // Sonda funksiyadan colde funksiyani cagirarken onun arqumentleri elave olunur.Birinci arqument
    // date-in ozu ikincide ise formati neye beraber etmek isteyirikse onu yaziriq.




    












    

                                    //    Java Script Doms 

    //   Domlar HTML-de olan her hansi bir elemente Java Scriptde catmaq ucundur.Bu elementlere 2 usulla cata
    // bilerik:

    //  1-ci usul.Bu usula misal olaraq asagida HTML kodu yaziriq:

    // <button id="login" class="btn-login"></button>
    //    Bu koda Java Scriptde id-ne,class-na ve tag adina gore cata bilerik:

    // 1.Id-e gore:
    // const btnLogin=document.getElementById("login")

    // 2.class-na gore:
    // const btnLogin=document.getElementsByClassName("btn-login")

    // 3.tag name-ne gore:
    // const btnLogin=document.getElementsByTagName("button")

    // Qeyd:Class-a ve Tag name-e gore elementler consola cagirsaq arrayin icersinde gorunecek.


    // 2-ci usul.Bu usula misal olaraq eyni 1-ci usulda HTML-de yazdigimiz kodu HTML-e yazaq:

    // <button id="login" class="btn-login"></button>
    //    Bu koda Java Scriptde id-ne,class-na  gore cata bilerik:

    // 1.Id-e gore:
    // const btnLogin=document.querySelector("#login")

    // const btnLogin=document.querySelectorAll("#login")

    // 2.class-na gore:
    // const btnLogin=document.querySelector(".btn-login")

    // const btnLogin=document.querySelectorAll(".btn-login")


    // Java Script Dom misallar:


    
                             // misal 1:
    // <button id="login" class="btn-lg">Login</button>
    //  Bu kodu HTML-e yaziriq

    // const btnLogin=document.querySelector("#login")
    // btnLogin.addEventListener("click",()=>{
    // console.log("Hello world");
    // });

    //   Bu kodda ilk olaraq HTML-e yazgigimiz button-u id-ne gore cagiririq.Sonra bu kodun addEventListener 
    // metodunu yaziriq.Bu metodda 2 parametr olur.Birinci parametr yerine yetirilecek emeliyyat ikinci pa-
    // rametr ise emeliyyat yerine yetirilerken ise dusecek funksiya olur.Yeni burada click olunduqda funk-
    // siya ise dusur consolda "Hello world" yazilir.



                              // misal 2:
    // <button id="increment">+</button>
    // <h1 id="counter"></h1>
    // <button id="decrement">-</button>
    //   Bu kodu HTML-e yaziriq.

    // const increment=document.querySelector("#increment")
    // const decrement=document.querySelector("#decrement")
    // const counter=document.querySelector("#counter")
    // let count=0;
    // counter.innerHTML=count;
    // increment.addEventListener("click",()=>{
    // count++;
    // counter.innerHTML=count;
    // });
    // decrement.addEventListener("click",()=>{
    // count--;
    // if(count==0){
    // alert("menfi olmaz")
    // }else{
    // counter.innerHTML=count
    // }
    // })

    //  Bu kodda ilk olaraq HTML-de olan elementleri Java Script-e cagiririq.Sonra yeni bir deyisende "0" 
    // reqem teyin edirik.Sonra ise countere yeni h1-e ne ise yazib ekranda gormek isteyirikse innerHTML me-
    // todundan istifade edirik.Bu metod ile counterin icerisine "count" yeni ki 0 yaziriq.Sonra increment-e 
    // addEventListener metodunu yaziriq ve click olunduqda yaziriq ki,count-un uzerine 1 gelsin ve count
    // counterin icersinde yazilsin.Sonra decremente addEventListener metodunu yaziriq ve click olunduqda 
    // yaziriq ki,countdan 1 cixilsin sonra sert yaziriq.Sertde yaziriq ki,eger count 0 olarsa alert cixart,
    // eks halda countere count yazdir.

                                      // misal 3:
    // <button id="alert">Show alert</button>
    //   Bu kod HTML-e yazilir.

    // const alertBtn=document.querySelector("#alert")
    // alertBtn.addEventListener("mouseover",()=>{
    // alert("mouseover")
    // })

    //   Bu kodda button Java Scriptde cagrilib ve ona addEventListenerin metodunun mouseover funksiyasi
    // yazilib.Funksiya ise dusdukde alert cixmasi emri verilib.Bu funksiya miska ile elementin uzerine 
    // geldikde ise dusur.

                                // misal 4:
    // <button onclick="showText(this)">Click me</button>
    //   Bu kod HTML-e yazilir.

    // const showText=(elemment)=>{
    // elemment.innerText="i m clicked"
    // }

    //   Bu kodda HTML-e yazdigimiz onclick metodunun showText funksiyasini Java Scriptde yaziriq.Funksiyaya
    // parametr otururuk ve parametre innerText metodu ile yazi yaziriq.Bu funksiya HTML-de cagrildigina gore
    // onun arqumentine this yaziriq ki,o parametre uygun olaraq islesin.



                                 // misal 5:
    // <input type="text" id="username">
    // <span id="error"></span>
    // <input type="password" id="password">
    // <span id="error"></span>
    // <button id="register"></button>
    //   Bu kod HTML-e yazilir.

    // const userName=document.querySelector("#username")
    // const error=document.querySelectorAll("#error")
    // const password=document.querySelector("#password")
    // const resgisterButton=document.querySelector("#register")
    // class users{
    // constructor(name,password){
    // this.name=name
    // this.password=password
    // }
    // }
    // resgisterButton.addEventListener("click",()=>{
    // if(userName.value.trim()!==""&&password.value.trim()!==""){
    // const user=new users(username.value,password.value)
    // console.log(user);
    // }else{
    // error.forEach((item)=>{
    // item.innerText="Xanalari bos saxlamayin"
    // })
    // }
    // })

    //   Bu kodda ilk once HTML elementleri Java Scripte cagrilir.Sonra bir obyekt yaradib icerisinde funksiya yaziriq
    // ve obyekte yeni key sozler elave edib onlari funksiyanin parametrleri ile beraber edirik.registerButton-a 
    // addEventListener metodu yazilir ki,click olunduqda eyer inputlarin icerisi bos deyilse yazilan datalar obyektin 
    // icine yazilsin,sonra consola cixsin.Eks halda yeni inputlar bosdursa ekrana error yazilsin.erroru forEach dongu
    // metodu ile yaziriq ki, her iki error ise dussun.


                                 // misal 6:
    // <button id="login">Click me</button>
    // <ul id="user-list"></ul>
    //   Bu kod HTML-e yazilir.

    // const loginBtn=document.querySelector("#login")
    // const userList=document.querySelector("#user-list")
    // let count=0;
    // loginBtn.addEventListener("click",()=>{
    // count++;
    // userList.innerHTML+=`
    // <li>${count}</li>
    // `;
    // });

    //   Burada ilk once HTML elementlerini Java Scripte cagiririq.Sonra deyeri 0 olan bir deyisen yaziriq.loginBtn-e
    // addEventListener metodu yaziriq,click olunduqda funksiya ise dussun ve count-un uzerine 1 gelib ekrana yazdirsin.
    // Ekrana yazdirdiq ul-in icine yeni bir li elave olunmasi ucun biz li-ni ${}-in icersinde dinamik yazmisiq.Her click 
    // olunduqda yeni bir li yaranmasi ucun innerHTML metounun qarsisinda = yox += qoymusuq. 


                               // misal 7:
     //   Backendden gelen datalar ile cedvel qurmaq ucun kod numunesi:
   
    // <button id="show-info">Show Info</button>
    // <div class="data">
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th>NO</th>
    //                 <th>id</th>
    //                 <th>name</th>
    //                 <th>mail</th>
    //                 <th>phone</th>
    //                 <th>Action</th>
    //             </tr>         
    //         </thead>
    //         <tbody id="table-body">    
    //         </tbody>          
    //        </table>
    // </div>

    //   BU kod HTML hissede bodynin icerisine yazilir.Burada bir button yaradiriq hansiki bu buttona click olunduqda bize cedveli 
    // gostermek ucun.Sonra datalarin geleceyi bir div yaradiriq ve yaratdigimiz div-e class veririk.Bu divin icerisine table tag-i
    // yaziriq,bu tagin icerisine ise thead ve tbody taglari yaziriq.Thead-in icerisinde tr tagi yeni setir yaziriq,bu setire ise 
    // th-lara yeni hisseler bolub icerisine metnlerini yaziriq.tbody-e ise id teyin edib onu javascript hissede cagiririq.

    // .data{
    //     margin-left: 100px;
    //     font-size: 20px;
           
    // }
    // .selected{
    //     color: red;
    // }     
    //   .data {
    //     table {
    //       width: 100%;
    //       border-collapse: collapse;
    //       margin-top: 20px;
      
    //       th, td {
    //         border: 1px solid #ddd;
    //         padding: 8px;
    //         text-align: left;
    //       }
      
    //       th {
    //         background-color: #f2f2f2;
    //       }
      
    //       tbody {
    //         tr {
    //           &:hover {
    //             background-color: #f5f5f5;
    //           }
    //         }
    //       }
    //     }
    //   }

//     BU kod scss hissede yazilir.Data class-ni scss-e cagrib ona css veririk.Selected atributu cagrilir ve ona css verilir.Sonra ise datanin
//   icerisinde olan taglara css yazilir.

    // const data = [
    //     {
    //         id: 1,
    //         name: "Anar",
    //         mail: "babazadeanar@gmail.com",
    //         phone: "+994552310712",
    //         password: "babazade1997",
    //     },
    //     {
    //         id: 2,
    //         name: "celil",
    //         mail: "celil@gmail.com",
    //         phone: "+994552310713",
    //         password: "celil1997",
    //     },
    //     {
    //         id: 3,
    //         name: "celil",
    //         mail: "celil@gmailhuhuhuwhddhuhweuhuchuwehudhuhhqwue.com",
    //         phone: "+994552310713",
    //         password: "celil1997",
    //     }  
    // ];
    // const showInfo = document.querySelector("#show-info");
    // const tableBody=document.querySelector("#table-body")
    // showInfo.addEventListener("click", () => {
    // data.map((item,index)=>{
    //     tableBody.innerHTML += `
    //     <tr class="table-row">
    //            <td>${index+1}</td>
    //            <td>${item.id}</td>
    //            <td>${item.name}</td>
    //            <td>${item.mail.length>20 ? item.mail.slice(0,20).concat("...") :item.mail} </td>
    //            <td>${item.phone}</td>
    //            <td>
    //            <button onclick="selectedElement(${item.id})">Select Row</button>
    //            </td>
    //        </tr>
    //     `
    // })
    // });
    // const selectedElement=(id)=>{
    // const tableRow=document.querySelectorAll(".table-row");
    // tableRow.forEach((item)=> {
    //     if(item.innerText.slice(2,3)==id){
    //     item.setAttribute("class","selected")
    //     console.log(id);
    //     }
    // });
    // };

//      Bu kod javascript hissede yazilir.Yuxaride bize gelen datalar arrayin icerisinde yazilrir. Sonra HTML-de click edeceyimiz button ve dinamik
//    olaraq gelen cedvelin datalari yeni table-body javascriptde cagrilir.Bunda sonra button-a click yazilir,sonra clickin icerisinde datalarda 
//    gezmek ucun data.map metodu yazilir ve parametr olaraq item,index elave olunur.Bu metodun icerisinde ise tableBody-nin innerHTML metodu yeni
//    icerisine yazi yazmaq ucun olan metod istifade olunur.Burda yazilan yazilar ardicil elave olunsun deye += beraerlik qoyulur, sonra dirnaqlarda
//    tr-in table-row class-i icerisinde td-ler yazilir lakin td-ler string kimi basa dusulmesin deye ${}ile yazilir.Bu ${}-lerin icerisinde sert de 
//    yazmaq olur.Sonra ise elementi secerken deyisiklik olsund deye Selectedelement funksiyasi yazilir,parametr olaraq id oturulur.Yuxarida Select 
//    Row buttonuna onclick yazilir ve onclick-e deysiklik funksiyasinin adi ve click olunan elementin id-si yazilir.Clcik olunarken butun datanin
//    datalari gorunsun deye yeniden table-row funksiyanin icerisine cagrilir.Yeniden datalarda dongu yaradilir,dongunun icerisinde sert yazilir ki,
//    datanin yazilarinin 2 ci indeksi yeni id-si parametre gelen id ile beraber olarsa atribut ise dussun.(bir seyi qeyd etmek lazimdir ki, eger
//    datanin indeksi iki reqemlidirse datanin 2 ci indeksi onun id-si ile beraber olmadigindan sonuncu funksiya islemeyecek)



                                //    misal 8:
    // Bu kod ile HTML e yazdigimiz data consolda obyekte kocurulur.
    // <div class="register">
    // <div class="form">
    // <input type="text" id="username" placeholder="Adinzi...">
    // <input type="mail" id="usermail" placeholder="mailiniz....">
    // <input type="text" id="userphone" placeholder="nomre....">
    // <input type="password" id="userPassword" placeholder="parolunuzu....">
    // <button id="register">register</button>
    // </div>
    // </div> 
    
    //   Bu kod HTML hisseye yazilir.

   // const userName=document.querySelector("#username")
   // const userMail=document.querySelector("#usermail")
   // const userPhone=document.querySelector("#userphone")
   // const userPassword=document.querySelector("#userPassword")
   // const register=document.querySelector("#register")
   // const data={}
   // register.addEventListener("click",()=>{
   // data.id=Date.now()
   // data.name=userName.value
   // data.mail=userMail.value
   // data.phone=userPhone.value
   // data.password=userPassword.value
   // console.log(data);
   // })

   //   Bu kodda ilk olaraq HTML elementleri JavaScripte cagrilir.Bundan sonra bos bir obyekt teyin olunur.
   // Sonra ise register-e yeni buttona addEventListener metodunun click funksiyasi yazilir.Bu funksiyanin 
   // icersinde obyekte key-ler teyin olunur ve onlar HTML elementlerinin deyerlerine ayri ayriliqda beraber
   // olunur.Sonda ise obyekt consola cixarilir.Belelikle HTML den gelen data consolda obyekte kocurulur. 
   

                                            //   misal 9:
  //    Bu kod ile qeydiyyat formu yaradilir ve bura daxil olan datalara obyektin icinde consola cixir.
  //     <div class="register-form">
  //     <div class="form">
  //     <h2>Register</h2>
  //     <input id="username" type="text" placeholder="Name..." />
  //     <input id="usersurname" type="text" placeholder="Surname..." />
  //     <input id="password" type="password" placeholder="Password..." />
  //     <span id="error-password"></span>
  //     <input
  //     id="confirm-password"
  //     type="password"
  //     placeholder="Confirm Password..."
  //     />
  //     <span id="confirm-password-error"></span>
  //     <button id="register" disabled>Register</button>
  //   </div>
  // </div>

  //    Bu kod HTML hisseye yazilir.Burada formun icinde olan her bir element ardicilliqla yazilir.


  // * {
  //     margin: 0;
  //     padding: 0;
  //     box-sizing: border-box;
  //   }
  //   
  //   .register-form {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     height: 100vh;
  //     .form {
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //       flex-direction: column;
  //       width: 500px;
  //       height: 600px;
  //       border-radius: 10px;
  //       border: 1px solid black;
  //       h2 {
  //         margin-bottom: 45px;
  //       }
  //       input {
  //         width: 80%;
  //         height: 33px;
  //         margin: 15px auto;
  //         padding: 7px;
  //         border-radius: 5px;
  //         outline: none;
  //       }
  //       .error-style {
  //         border: 1px solid red;
  //       }
  //       .success-style {
  //         border: 1px solid green;
  //       }
  //       #error-password {
  //         color: red;
  //         font-size: 20px;
  //         font-weight: 600;
  //       }
  //       #confirm-password-error {
  //         color: red;
  //         font-size: 20px;
  //         font-weight: 600;
  //       }
  //       button {
  //         padding: 13px 59px;
  //         border: none;
  //         background-color: blue;
  //         color: #fff;
  //         font-size: 20px;
  //         border-radius: 10px;
  //         cursor: pointer;
  //         &:hover {
  //           background-color: rgb(40, 40, 204);
  //         }
  //       }
  //       button[disabled] {
  //         background-color: rgb(164, 164, 185);
  //         color: #fff;
  //       }
  //     }
  //   }

  //  Bu kod scss hisseye yazilir.* ile umumi scss yazilir.Sonra formun ozune scss verilir, icerisnde olan h2-ye,inputlara,buttona ve diger elementlere
  // scss verilir.


// const register = document.querySelector("#register");
// const userName = document.querySelector("#username");
// const userSurname = document.querySelector("#usersurname");
// const password = document.querySelector("#password");
// const confirmPassword = document.querySelector("#confirm-password");
// const errorPassword = document.querySelector("#error-password");
// const confirmPasswordError = document.querySelector("#confirm-password-error");


// register.addEventListener("click", () => {
//   const data = {
//     name: userName.value,
//     surname: userSurname.value,
//     password: password.value,
//     confirmPassword: confirmPassword.value,
//   };
//   console.log(data);
// });

// const handleEvent = () => {
//   const nameValue = userName.value.trim();
//   const surnameValue = userSurname.value.trim();
//   const passwordValue = password.value.trim();
//   const confirmPasswordValue = confirmPassword.value.trim();

//   if (nameValue !== "" && surnameValue !== "" && passwordValue.length >= 8 && passwordValue.includes("!") && 
//   passwordValue.includes("@") && passwordValue === confirmPasswordValue) {
//     register.removeAttribute("disabled");
//   } else {
//     register.setAttribute("disabled", true);
//   }
// };

// userName.addEventListener("keyup", () => {
//   handleEvent();
// });

// userSurname.addEventListener("keyup", () => {
//   handleEvent();
// });

// password.addEventListener("keyup", (e) => {
//   if (e.target.value.length < 8) {
//     document.querySelector("#password").setAttribute("class", "error-style");
//     errorPassword.innerText = "Minimum 8 Simvol olmalidir";
//   } else {
//     if (!e.target.value.includes("!") || !e.target.value.includes("@")) {
//       errorPassword.innerText = "Sifrede ! ve @ olmalidir !";
//     } else {
//       errorPassword.innerText = "";
//       document.querySelector("#password").setAttribute("class", "success-style");
//     }
//   }
// });

// confirmPassword.addEventListener("keyup", (e) => {
//   if (e.target.value !== password.value) {
//     confirmPasswordError.innerText = "Sifreler eyni deyil";
//     document.querySelector("#confirm-password").setAttribute("class", "error-style");
//     handleEvent(false)
//   } else {
//     confirmPasswordError.innerText = "";
//     document.querySelector("#confirm-password").setAttribute("class", "success-style"); 
//     handleEvent(true)
//   }
// });

//  Bu kod javascript hisseye yazilir.Hemise oldugu kimi html elementleri javascripta cagrilir.Novbeti ise button elementine addEventListener 
// click elave olunur ve onun emeliyyat hissesinde obyekt yaradilir ve icerisine inputa yazilan datalar elave olunur.Sonra ise handleEvent adli
// funksiya yazilir ve bu funksiyada yeni deyisenler elave olur, bu deyisenler inputa yazilan yazilarin bosluqsuz baslamagina beraber olunur.
// Sonra sert yazilir ki eger name ve surname inputlarinin icerisi bos deyilse,paswordun icinde olan elementlerin sayi 8 den az deyilse,paswordun
// icerisinde  @ ve ! varsa ,confirmPassword pasworda beraberdirse button disabledden cixsin eks halda disabled olsun.Sonra ise usreName ve user-
// Surname ucun ayri ayriliqda addEventListener(keyup) yeni inputun icerisine nese yazildiqda olan hereket yazaq ve icerisine handleEvent funksi-
// yasini ataq.Sonra password ucun addEventListener(keyup) yazaq ve icerisinde sert yazaq ki eger elementler 8 den azdirsa password inputuna ar-
// ribut elave ele altdan xeberdarlaq yazdir.Eks halinda yeni birr sert yaziriq ki bu inputda eger ! ve @ yoxdursa xeberdarliq yaz eks halda xe-
// berdarliqda hecne yazma,inputa ise yeni atribut elave et.Conidirm passworda addEventListener(keyup) yaz ve icerisine sert qoy ki eger confirm 
// pasword passworda beraber deyilse inputa setAtribut elave et ve xeberdarliq yaz eks halda xeberdarliqi sil yeni atribut elave et.




                                    //  setInterval and setTimeout 
//  setInterval(function() {                                          
//  console.log("Bu funksiya 1 saniyə aralıqlarla çağırılacaq.");
//   }, 1000);
//    SetInterval 2 parametr qebul edir, birinci cagrilacaq funksiya ikinci ise cagrilma tezliyi.bu funksiya 1 saniyeden bir yenilenecek.

// setTimeout(function() {
//     console.log("Bu funksiya 5 saniyə sonra çağırılacaq.");
//   }, 5000);
//   setTimeout 2 parametr qebul edir,birinci cagrilacaq funksiya,ikinci nece saniyeden sonra gelmeyi.Bu funksiya yalniz bir defe gelir yeni
//     dovr elemir.




                                 //  Hazir alert cagirmaq 
    // Bunun ucun google hazir alertlerin html-i tapilir,copy olunur ve html css e kocrulur.Lakin bunu html de her hansi bir div class-in icine kocurmek
  // lazimdir ki, javascriptde rahat oturmek olsun.
  



                               //setAttribute elave etmek
    // element.setAttribute(attributeName, attributeValue);
    //  Bu kod setAttribue-un skiletidir. "element" htmlden gelen adi.Parametrlerde ise 1-ci hansi nov atribut olmasi 2-ci deyerini gosterir.
    // Meselen :
    //   const myDiv = document.querySelector("#myDiv");
    //   myDiv.setAttribute("class", "highlighted");
    // Burada sanki bele bir sey yazmis oluruq:
    // <div id="myDiv" class="highlighted">Hello, World!</div>
    //  qeyd: Bu atributa scss de catmaq ucun div[highlighted] kimi cagrilir.


                                        //  misal 10:
    // Bu kod ile yartdigimiz inputa ne elave etsek her buttonun clickinde elave olunur ve x buttonu-na click etdiyimizde 
    // ise hemin elave olunan div silinir.Lakin silinerken nomrelerin siralamasi pozulmur.
    
    // <div id="divar">
    // <div id="box">
    // <div id="elave-eden">
    // <input type="text" id="add-input" placeholder="Add task...">
    // <button id="add">add </button>
    // </div>
    // <span class="error-message"></span>
    // </div>
    // </div> 

    //   Bu kod HTML hisseye yazilir.
    
    // *{
    // margin: 0;
    // padding: 0;
    // box-sizing: border-box;
    // }  
    // #divar{
    // height: 100vh;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // #box{
    // width: 300px;
    // height: 400px;
    // border: 2px solid black;
    // .error-message{
    // margin-left: 10px;
    // color: red;
    // }
    // #elave-eden{
    // display: flex;
    // justify-content: space-around;
    // input{
    // width: 200px;
    // height: 30px;
    // margin-top: 10px;
    // border: none;
    // }
    // .error-color{
    // border: none;
    // outline: 2px solid red;
    // }
    // .succes-color{
    //  border: none;
    //  outline: 2px solid green;
    //  }
    //  .standart-color{
    //  border: none;
    //  outline: 2px solid blue;
    //  }
    //  button{
    //  width: 50px;
    //  height: 30px;
    //  margin-top: 10px;   
    // }
    // }
    // .list{
    // display: flex;
    // margin-left: 10px;
    // margin-top: 40px;
    // width: 250px;
    // height: 30px;
    // border: 1px solid black;
    // justify-content: space-between;
    // button{
    // background-color: red;
    // }
    // }
    // }    
    // }
    
    //   BU kod scss hisseye yazilir.

    // const addButton=document.querySelector("#add")
    // const addList=document.querySelector("#add-input")
    // const box=document.querySelector("#box")
    // addButton.addEventListener("click",()=>{
    // if(addList.value.trim()!==""&&addList.value.length>8){
    // const lists=document.querySelectorAll(".list")
    // if(lists.length>3){
    // box.style.overflow="scroll"
    // }
    // const count=++lists.length
    // const newItem=document.createElement('div')
    // newItem.innerHTML+=`
    // <div class="list">
    // <span> ${count}</span>
    // <span> ${addList.value}</span>
    // <button class="delete-btn">X</button>
    // </div>
    // `
    // box.appendChild(newItem)
    // const deleteButton=newItem.querySelector(".delete-btn")
    // deleteButton.addEventListener("click",() => {
    // newItem.remove()
    // const remainingItems = document.querySelectorAll(".list");
    // if (remainingItems.length <= 3) {
    //     box.style.overflow = "visible";
    // }
    // remainingItems.forEach((item, index) => {
    //     item.querySelector("span:first-child").textContent = index + 1;
    // });
    // })
    // }
    // addList.value=""
    // })
    // addList.addEventListener("keyup",()=>{
    // if(addList.value.length<8){
    // document.querySelector(".error-message").innerText="simvollar 8 den yuxari olmalidir"
    // addList.setAttribute("class","error-color")
    // if(addList.value.length==0){
    // document.querySelector(".error-message").innerText="xanalari bos saxlamayin"
    // addList.setAttribute("class","standart-color")
    // }
    // }else{
    // document.querySelector(".error-message").innerText=""
    // addList.setAttribute("class","succes-color")
    // }
    // })

    //   bu kod Java Scripte yazilir.




















                                    // Local storage and sesion storage

    //  Local storage ile sesion storagenin ferqi odur ki,X ile sehifeden cixildiginda sesion storagede saxladigimiz 
    // data itir,local storagede ise itmir.Bu storagelerde boyuk yaddasli datalar saxlamaq olmaz.Yerlesme yerleri
    // sehifenin inspectinde application bolmesindedir.

                          //     Local storage-e aid misal:
    // <div class="class">
    // <button id="increment">+</button>
    // <h2 id="count">0</h2>
    // <button id="decrement">-</button>
    // <button id="delete-all">delete</button>
    // </div>
    
    // Bu kod Html-e yazilir: 

    // let increment=document.querySelector("#increment")
    // let count=document.querySelector("#count")
    // let decrement=document.querySelector("#decrement")
    // let deleteAll=document.querySelector("#delete-all")
    // let counter=localStorage.getItem("count")==null ? 0 :Number(localStorage.getItem("count"))
    // count.innerHTML=counter
    // increment.addEventListener("click",()=>{
    // counter++
    // count.innerHTML=counter
    // localStorage.setItem("count",counter)
    // })
    // decrement.addEventListener("click",()=>{
    // counter--
    // count.innerHTML=counter
    // localStorage.setItem("count",counter)
    // })
    // deleteAll.addEventListener("click",()=>{
    // counter=0
    // count.innerHTML=0
    // localStorage.removeItem("count")
    // })

    //   Bu kod Java Scripte yazilir.Bu kodda biz HTML de teyin etdiyimiz "+","-","delete" buttonlari ve 0
    // yazisi ile emeliyyatlar apaririq.+ basdiqda say artir - basdiqda say azalir delete basdiqda ise datalar
    // sifirlanir.Hemde HTML seyfesinde bas veren emeliyyat localStorage ve ya Sesionstoragede saxlanilir.Biz 
    //  yeni olaraq : localStorage.setItem("count",counter),localStorage.getItem("count"),localStorage.removeItem("count")
    // kodlarini goruruk.setItem 2 parametr qebul edir,yeni bir localstorage yaratmaq ucundur.Birinci parametr localstora-
    // genin adi ikici parametr ise qebul etdiyi deyisendir.getItem adi yazilan localstorageni goturmek ucundur.
    // removeItem ise hemin localstorageni silmek ucundur.









                                         //    JSON 
    
  //   JSON Front end ve  backend arasinda olan data mubadilesinin formatidir.Bizde numune olaraq fakestore sayti ve birde
  // JSON formatter adlanan sayt var.Biz fakestore saytindan goturduyumuz fake datani JSON formatter saytinda temiz dataya 
  // cevire bilerik.
  //   JSON-a aid misallar.
              
                                        //   misal 1:
  //  <table class="custom-table">
  // <thead>
  // <tr>
  // <th>ID</th>
  // <th>Title</th>
  // <th>price</th>
  // <th>Description</th>
  // <th>Category</th>
  // <th>Image</th>             
  // </tr>
  // </thead>
  // <tbody id="datalar">
  // </tbody>
  // </table>
  
  //  Bu kod HTML hisseye yazilir.
  
  //   *{
  // margin: 0;
  // padding: 0;
  // box-sizing: border-box;
  // }
  // $table-background: #f2f2f2;
  // $table-header-background: #4CAF50;
  // $table-header-color: white;
  // $table-row-hover: #ddd;
  // .custom-table {
  //   width: 100%;
  //   border-collapse: collapse;
  //   border: 1px solid #ddd;
  //   background-color: $table-background;
  //   th, td {
  //     border: 1px solid #ddd;
  //     padding: 8px;
  //     text-align: left;
  //   }
  //   th {
  //     background-color: $table-header-background;
  //     color: $table-header-color;
  //   }
  //   tr:hover {
  //     background-color: $table-row-hover;
  //   }
  //   #datalar{
  //   img{
  //   width: 40px;
  //   height: 40px;
  //   border-radius: 50%;
  //   }
  //   }
  // }

  // Bu kod scss hisseye yazilir.


  //     const data=[
  //         {
  //            "id":1,
  //            "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //            "price":109.95,
  //            "description":"Your perfect pack for everyday use and walks in the forest.",
  //            "category":"men's clothing",
  //            "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  //         },
  //         {
  //            "id":2,
  //            "title":"Mens Casual Premium Slim Fit T-Shirts ",
  //            "price":22.3,
  //            "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket",
  //            "category":"men's clothing",
  //            "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  //         },
  //         {
  //            "id":3,
  //            "title":"Mens Cotton Jacket",
  //            "price":55.99,
  //            "description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions",
  //            "category":"men's clothing",
  //            "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //         },
  //         {
  //            "id":4,
  //            "title":"Mens Casual Slim Fit",
  //            "price":15.99,
  //            "description":"The color could be slightly different between on the screen and in practice.",
  //            "category":"men's clothing",
  //            "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //         },
  //         {
  //            "id":5,
  //            "title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  //            "price":695,
  //            "description":"From our Legends Collection, the Naga was inspired by the mythical water ",
  //            "category":"jewelery",
  //            "image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  //         },
  //         {
  //            "id":6,
  //            "title":"Solid Gold Petite Micropave ",
  //            "price":168,
  //            "description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  //            "category":"jewelery",
  //            "image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  //         },
  //         {
  //            "id":7,
  //            "title":"White Gold Plated Princess",
  //            "price":9.99,
  //            "description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
  //            "category":"jewelery",
  //            "image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  //         },
  //         {
  //            "id":8,
  //            "title":"Pierced Owl Rose Gold Plated Stainless Steel Double",
  //            "price":10.99,
  //            "description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  //            "category":"jewelery",
  //            "image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  //         },
  //         {
  //            "id":9,
  //            "title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  //            "price":64,
  //            "description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity;",
  //            "category":"electronics",
  //            "image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  //         },
  //         {
  //            "id":10,
  //            "title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
  //            "price":109,
  //            "description":"Easy upgrade for faster boot up, shutdown, application load and response",
  //            "category":"electronics",
  //            "image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  //         },
  //         {
  //            "id":11,
  //            "title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  //            "price":109,
  //            "description":"3D NAND flash are applied to deliver high transfer speeds Remarkable ",
  //            "category":"electronics",
  //            "image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  //         },
  //         {
  //            "id":12,
  //            "title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
  //            "price":114,
  //            "description":"Expand your PS4 gaming experience, Play anywhere Fast and easy. ",
  //            "category":"electronics",
  //            "image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  //         },
  //         {
  //            "id":13,
  //            "title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
  //            "price":599,
  //            "description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology.",
  //            "category":"electronics",
  //            "image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  //         },
  //         {
  //            "id":14,
  //            "title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
  //            "price":999.99,
  //            "description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 ",
  //            "category":"electronics",
  //            "image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  //         },
  //         {
  //            "id":15,
  //            "title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  //            "price":56.99,
  //            "description":"Note:The Jackets is US standard size, Please choose size as your usual wear Material", 
  //            "category":"women's clothing",
  //            "image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",        
  //         },
  //         {
  //            "id":16,
  //            "title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
  //            "price":29.95,
  //            "description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER).", 
  //            "category":"women's clothing",
  //            "image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  //         },
  //         {
  //            "id":17,
  //            "title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
  //            "price":39.99,
  //            "description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded.", 
  //            "category":"women's clothing",
  //            "image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  //         },
  //         {
  //            "id":18,
  //            "title":"MBJ Women's Solid Short Sleeve Boat Neck V ",
  //            "price":9.85,
  //            "description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach.", 
  //            "category":"women's clothing",
  //            "image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  //         },
  //         {
  //            "id":19,
  //            "title":"Opna Women's Short Sleeve Moisture",
  //            "price":7.95,
  //            "description":"100% Polyester, Machine wash, 100% cationic polyester interlock.", 
  //            "category":"women's clothing",
  //            "image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  //         },
  //         {
  //            "id":20,
  //            "title":"DANVOUY Womens T Shirt Casual Cotton Short",
  //            "price":12.99,
  //            "description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve." 
  //            "category":"women's clothing",
  //            "image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  //         }
  //      ]    
  //      data.map(item=>{
  //      document.querySelector("#datalar").innerHTML+=`
  //      <tr>
  //      <td>${item.id}</td>
  //      <td>${item.title}</td>
  //      <td>${item.price==22.3 ? item.price+""+"Azn" :item.price+""+"$"} </td>
  //      <td>>${item.description.slice(0,20)}</td>
  //      <td>>${item.category}</td>
  //      <td>><image src="${item.image}"</td>
  //  </tr>
  //      `
  //      })

  //   Bu kod JAVASCRIPTE yazilir.Burada fakestore saytindan fake olaraq bir kod goturuk.Bu kod JSON formatinda oldugu ucun
  // onu JSON formatter saytinda temiz koda ceviririk. temiz koda cevirdikden sonra onu Java Scripte deyisenin icersine yazi-
  // riq.BU deyisende map metodu ile dongu yaradib,icersine HTML-de yazdigimiz divi elave edirik.Hemin divin icersinde olan
  // elementlere ${} ile dinamik olaraq arrayin icersinde olan obyektin datalarini elave edirik. 
  
                                       
                                            // JSON Api system
  //  Api sistemleri back end-ile front end arasinda olan sistemdir.Bu sitemin 4 esas metodu var.Bunlar asagidakilardir:
  // 1.GET method.Bu metod back end-den datani goturmek ucundur.
  // 2.POST method.Bu metod back end-e data gondermek ucundur.
  // 3.PUT method.Datalari yenilemek ucun istifade olunur.
  // 4.DELETE method.Datalari silmek ucun istifade olunur.

                                          // Status codes
  // Status codlar biz back end-e data gondererken,bize back end-den gelir.Asagida esas status codlar gosterilmisdir:
  // 1. 200 OK.Bu status code her qaydasinda olduqda gelir,bu zaman biz esasen "ugurlu emeliyyat" alertini cixarda bi-
  // lerik.
  // 2. 201 Created.Bu status code istifadeci qeydiyatdan kecdikde gelir,bu zaman biz esasen "istifadeci ugurla qeydiyyat-
  // dan kecdi" alertini cixarda bilerik.
  // 3. 400 Bad Request.Bu status bizim kodumuzda hansisa yanlisliq olduqda gelir.
  // 4. 401 Unauthorized. Eger istifadeci login olmayibsa ve hansisa emeliyyat etmek isteyirse bize bu status code gelir,
  // bu zaman biz alert cixara bilerik ki "zehmet olmasa login olun".
  // 5. 403 Forbidden.Eger istifadecinin bu emeliyyati yerine yetirmeye icazesi yoxdursa bu status gelir ve alert cixarda
  // bilerik ki, "bu emeliyyati yerine yetirmeye icaze yoxdur".
  // 6. 404 Not Found.Eger url ve ya sehife tapilmirsa bu status code gelir.
  // 7. 405 Method Not Allowed.Bu status code metod sehv yazildiqda,tapilmadiqda gelir.
  // 8. 500 Internal Server Error.Bu status code serverin cokmeyini gosterir.Burada bzim edeceyimiz sadece back end-e melumat
  // vermekdir. 

                                        //   misal 1 
  //  <button id="button">Show products</button>
  //  <div id="products" class="product-list">
  //  </div>
  //  Bu kod HTML-e yazilir.

  //   *{
  //     margin: 0;
  //     padding: 0;
  //     box-sizing: border-box;
  //     }
  //     .product-list{
  //     padding: 50px;
  //     display: flex;
  //     justify-content: space-between;
  //     flex-wrap: wrap;
  //     }
  //     .card{
  //     width: 18%;
  //     height: 200px;
  //     border: 1px solid black;
  //     img{
  //     width: 100%;
  //     height: 60px;
  //     }
  //     h4{
  //     text-align: center;
  //     margin-top: 5px;
  //     }
  //     p{
  //     text-align: center;
  //     }
  //     }
  //   Bu kod SCSS-e yazilir.  
                                        
  //   fetch("https://fakestoreapi.com/products")
  //   .then((response)=>response.json())
  //   .then((data)=>{
  //   data.map(item=>{
  //   document.querySelector("#button")
  //   button.addEventListener("click",()=>{
  //     document.querySelector("#products").innerHTML+=`
  //     <div class="card">
  //     <img src="${item.image}">
  //     <h4>${item.title.slice(0,30)}</h4>
  //     <p>${item.description.slice(0,15)}</p>
  //     <p>${item.price}$</p>
  //     </div>
  //     `
  //   })
  //   })
  //   })
  //  Bu kodda biz fetch-in GET metodu ile back end-in url-ine muraciet etmisik.Sonra birinci then-de call back ile cavabi json 
  // formatina kecirmisik.Novbeti then-de ise data-ni call back ile donguye salmisiq.Sonra bu dongunun icersine HTML button 
  // cagirmisiq ve onun icersine click metodu yazmisiq.Bu clickde ise yazmisiq ki HTML div elementi yazilsin ve icersinde 
  // elementler back end-den gelen datalar olsun.
  
  
                                            // misal 2
  // <input id="name" type="text">
  // <input id="password" type="password">
  // <button id="login">Login</button>
  //  Bu kod HTML-e yazilir. 

  //   const name=document.querySelector("#name")
  //   const password=document.querySelector("#password")
  //   const login=document.querySelector("#login")
  //   login.addEventListener("click",()=>{
  //   let data={
  //   name:name,
  //   password:password
  //   }
  //   fetch("https://fakestoreapi.com/products",{
  //   method:"Post",
  //   body:JSON.stringify(data)
  //   })
  //   .then((response)=>{
  //   if(response.status==200){
  //   Swal.fire({
  //   title: "Good job!",
  //   text: "You clicked the button!",
  //   icon: "success"
  //   });
  //   }
  //   })
  //   })
  //     Bu kod Java Script kodudur.Bu kodda ilk olaraq HTML elementleri Java Script-e cagrilir.Sonra buttona
  //   click metodu yazilir.Clickde yazilir ki,data obyekti yaransin ve icersine inputun deyerleri elave 
  //   olunsun.Sonra fetch ile back end-in url-ine muraciet olunur.Bu defe fetch 2 parametr qebul edir.Birinci
  //   muraciet olunan url,ikinci ise obyekt.Ikinci qebul edilen parametrde metodun novu yeni burada Post metodu 
  //   ve datanin JSON formati olur.Sonra then yazilir,icersinde respons call back olaraq yazilir ve sert qoyulur.   
  //    Eger respons obyektinin  status datasi 200 durse "swall fire" alertini ekrana cixart. Swall fire alerti
  //   sweetalert saytindan gotrulub,hemin saytin scriptini html-de qosmagida unutmamaliyiq.
  
  

                                            // misal 3
  // <table>
  // <thead>
  // <tr>
  // <th>NO</th>
  // <th>ID</th>
  // <th>ad</th>
  // <th>soyad</th>
  // <th>mail</th>
  // <th>Tenzimlemeler</th>
  // </tr>
  // </thead>
  // <tbody id="table-body">
  // </tbody>
  // </table>
  //  Bu kod HTML-e yazilir.
  
//     body {
//     font-family: Arial, sans-serif;
//     }  
//     table {
//     width: 100%;
//     border-collapse: collapse;
//     margin-bottom: 20px;
//     th, td {
//     padding: 8px;
//     text-align: left;
//     border-bottom: 1px solid #ddd;
//     }  
//     th {
//     background-color: #f2f2f2;
//     font-weight: bold;
//    }
//    tr:nth-child(even) {
//    background-color: #f2f2f2;
//   }
//   }
//  Bu kod SCSS-e yazilir.
                                                                                  
//   const name = document.querySelector("#name")
//   const surname = document.querySelector("#surname")
//   const mail = document.querySelector("#mail")
//   const button = document.querySelector("#button")
//   button.addEventListener("click",()=>{
//   let data={
//   id:Date.now(),
//   name:name.value,
//   surname:surname.value,
//   mail:mail.value
//   }
//   fetch("http://localhost:3000/create-data",{
//   method:"POST",
//   body:JSON.stringify(data),
//   headers:{
//   "Content-Type":"application/json"
//   },
//   })
//   .then((response)=>response.json())
//   .then((data)=>{
//   location.reload()
//   })
//   })
//   fetch("http://localhost:3000/get-data")
//   .then((response)=>response.json())
//   .then((item)=>{
//   item.data.map((item,index)=>{
//   document.querySelector("#table-body").innerHTML+=`
//   <tr>
//   <td>${index+1}</td>
//   <td>${item.id}</td>
//   <td>${item.name}</td>
//   <td>${item.surname}</td>
//   <td>${item.mail}</td>
//   <td><span class="delete" onclick="deleteItem(${item.id})"><i class="fa-solid fa-delete-left"></i></span></td>
//   </tr>
//   `
//   })
//   })
//   const deleteItem=(id)=>{
//   fetch("http://localhost:3000/delete-data/${id}",{
//   method:"DELETE",    
//   headers:{
//   "Content-Type":"application/json"
//   },
//   })
//   .then((response)=>response.json())
//   .then((data)=>{
//   location.reload()
//   })
//   }
//  Bu kod Javascripte yazilir.Ilk olaraq HTML elementleri Javascripte cagrilir.Sonra Buttona click funksiyasi yazilir.
// Klikin icersinde obyekt yaradilir ve onun deyerleri inputa gelen deyerler olaraq teyin olunur.Sonra fetchin Post 
// metodu yazilir.Fetch metodunda istifade etdiyimiz location.reload() kodu her klikde ekranin yenilenmesini temin edir.
// Sonra ise Fetch-in Get metodu yazilir ve icersinde HTML de olan div cagrilib onunda icersine cedvel elave olunur.En sonda 
// ise Fetch-in delete metodu yazilir,lakin bu metod funksiyanin icersinde yazilir,sonra ise bu funksiya cedvelde olan delete 
// iconuna onclick olaraq oturulur ve funksiyanin arqumenti obyektin id nomresi goturulur.
//   Bu kodda url-in hardan goturulmeyinin izahi:Biz burada url-i Node js-den elde etmisik.Bunun ucun Node Js programi 
// kompyutere yuklenir.Sonra Node Js filenda cmd ile hemin file-in terminali acilir. Terminala "nmp i" kodu yazilir belelikle
// document file-a install olur.Sonra "node (faylin adi)" yazilir ve biz url-i elde edirik node ise url cagirdigimiz visual 
// studio code uzre isleyir.Bu fayli visual studio code programina atdiqda serverin icersinde olan backend codlarini orada gore 
// bilerik.Metodlarin yazilis qaydasi da serverde eks olunur.


                                        //   misal 4
// const p= new Promise(function(resolve,reject){
// setTimeout(()=>{
// console.log("Preapearing data");
// const backendData={
// server:"aws",
// port:3000,
// status:"working"
// }
// resolve(backendData)
// },2000)
// })
// p.then((data)=>{
// const p2=new Promise(function(resolve,reject){
// setTimeout(()=>{
// resolve(data)
// },2000)
// })
// p2.then((data)=>{
// data.modified=true
// console.log(data);
// })
// })
//  Bu kodda biz Promise ile tanis olaciyiq.bir deyisen teyin olunur ve icersine new Promise acar sozu yaziir,bu acar soz funksiya 
// qebul edir ve bu funksiyada ozluyunde resolve ve reject adlanan 2 parametr qebul edir.Burada funkisyada setTimeout metodu ile
//  consol ve bir obyekt yazilib.Biz bu obyekti resolve ile novbeti then-e oture bilerik.Colde hemin bu p deyiseninin then-i cagrilir.
// then-e data call backi yazilir ve bu call backde yeni bir Promise yazilir.Bu promisdin funksiyasinda setTimeout metodu ile data 
// resolve olunur novbeti then-e.Bu then yeni teyin olunan Promisin then-i sayilir ve diger thende oldugu kimi yazilir.
//   Promise funksiyalarin sinxron yeni eyni vaxtda bir birini gozleyerek islemesini temin edir.


                                 
                                        // misal 5
// try {
// fetch("https://fakestoreapi.com/products")
// .then(res=>res.json())
// .then(json=>console.log(json))
// } catch (error) {
// console.log(error.message);
// }
//  Burada try/catch-den istifade etmisik.Kodumuzu try-in icersine yaziriq.Eger problem yoxdursa kod isleyir.Problem olarsa
// catch-in emeliyyat sistemi ise dusur.



                                        // misal 6
//  const changeDatatoJson= async()=>{
//  const result= await fetch("https://fakestoreapi.com/products")
//  .then(res=>res.json())
//  .then(data=>data)
//  printData(result) 
//  }
//  changeDatatoJson()
//  function printData(data){
//  console.log(data);
//  }
//   Bu kodda biz asyns/await oyreneceyik.Ilk olaraq funksiya yazilir ve bu funksiyaya async emri verilir,bu funksiyanin icinde 
// fetch Get metodu yazilir ve fetch-e await yeni gozle emri verilir.asyns/awaitin meqsedi odur ki,Funksiya sinxron islesin yeni
// butun funksiyalar,emeliyyatlar bir birini gozleyib islesin.Sonra colde consol emelyatini heyata keciren funksiya yazib, bu 
// funksiyani brinci funksiyamizin icine cagirsaq ve parametr olaraq fetch-in yazildigi deyiseni atsaq,hemin deyisen consola cixar.
// Burada fetch-i deyisenin icine teyin etdiyimiz ucun async/await den istifade edirik.



                                        // misal 7
//  <input id="inputFile" type="file">
// <div id="profile"></div>
//   Bu kod HTML e yazilir.

// const input =document.querySelector("#inputFile")
// input.addEventListener("change",(e)=>{
// uploadImage(e)
// })
// async function uploadImage(e){
// const file=e.target.files[0]
// const Base64=await convertBase64(file)
// document.querySelector("#profile").innerHTML=`
// <img src="${Base64}">
// `
// }
// function convertBase64 (file){
// return new Promise(function(resolve,reject){
// const fileReader=new FileReader()
// fileReader.readAsDataURL(file)
// fileReader.onload =()=>{
// resolve(fileReader.result)
// }
// fileReader.onerror=(error)=>{
// reject(error)
// }
// })
// }
//  Bu kodun oxuduqda ilk olaraq type-i file olan inputu javascripte cagirmisiq.Sonra hemin inputda addEvenListener
// change metodunu yazmisiq.Bu metodun icersine funksiya yazmsiq ki,bu funkisiya file-dan image-i  goturur.Sonra 
// ise deyisen teyin edib onun icersine de,Base64 funksiyasini yazmisiq.Bundan sonra ise HTML div elementini cagirib 
// onun icersine Base 64 funksiyasinin deyisenini elave etmisik.Bu funksiyada sonra Base 64 funksiyasini yazmaliyiq.
// Base 64 funksiyasi parametr olaraq file qebul edir.Funksiyanin icersinde ise funksiyaya new Promise return olunur.
// new Promisin funksiyasinda qayda olaraq,resolve ve reject paramaetrleri olur.Sonra fileReader adli deyisen teyin
// edib,onun icersine new fileReader() cagririq sonra fileReaderin readAsDataUrl(file) metodunu yaziriq.Sonra ise 
// fileReader-e onload funksiyasini yaziriq ki, eger her sey yaxsi isleyerse resolve olsun ve filReader-in resultu
// qebul olunsun.Eks halda fileREader onerror funkisyasini yaziriq ve funksiyaya reject (error) otururuk.Bu kod 
// image-i base 64 formatina salmaq ucun koddur.






// const name = document.querySelector("#name");
// const surname = document.querySelector("#surname");
// const mail = document.querySelector("#e-mail");
// const password = document.querySelector("#password");
// const confirmPassword = document.querySelector("#coniform-password");
// const fileInput = document.querySelector("#file");
// const button = document.querySelector("#register");
// let Base64
// const data={}
// fileInput.addEventListener("change",(e)=>{
// uploadImage(e)
// })
// function convertBase64(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// }
// async function uploadImage(e){
// const file=e.target.files[0]
//  Base64=await convertBase64(file)
// document.querySelector("#profile").innerHTML=`
// <img src="${Base64}">
// `
// }
// button.addEventListener("click", async () => {
//   if (
//     name.value.trim() == "" ||
//     surname.value.trim() == "" ||
//     mail.value.trim() == "" ||
//     password.value.trim() == "" ||
//     confirmPassword.value.trim() == ""
//   ) {
//     alert("xanalari bos saxlamayin");
//   } else if (password.value.length < 8 || confirmPassword.value.length < 8) {
//     alert("password 8 reqemden cox olmalidir");
//   } else if (password.value !== confirmPassword.value) {
//     alert("parollar eyni olmalidir");
//   } else {
//   data.name=name.value
//   data.surname=surname.value
//   data.mail=mail.value
//   data.password=password.value
//   data.confirmPassword=confirmPassword.value
//   data.image=Base64
//   await fetch("http://localhost:3000/create-data", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       window.location.href = "profile.html";
//   }
// });











    
   
    
    
   




    









   
    





        
        








        



    









   


















    











   

 
 

                                      
    


















       

    