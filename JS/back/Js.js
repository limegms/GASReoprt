// body
const BodyElement = document.body;

// Security
const paSecurity = document.getElementById('paSecurity');
// user name input
const userName = document.getElementById('UserName');

// pass input
const pass = document.getElementById('Pass');

// code
const code = document.getElementById('code');

// send mail
const sendMail = document.querySelector('.SMail');

// btn send 
const btn_fireWar = document.getElementById('fire_war');

// btn send mail 

// back
const back_send = document.getElementById('back_send');

//forms

// form user
const formUser = document.getElementById('formUser');

// form pass
const formPass = document.getElementById('formPass');

// form code
const formCode = document.getElementById('formCode');

// show Password
const showPass = document.getElementById('showPass');

// type show
let show_pass = false;

// table print 6 month
const ContainerPrinter = document.querySelector('.PrintT');

// data
let security_what = false;
if(sessionStorage.getItem('security') && sessionStorage.security !== null) {
    security_what = sessionStorage.security;
}

// type btn
let type_btn = 'pass';

// catch code
let code_s = '';
if(sessionStorage.getItem('code_i') && sessionStorage.code_i !==  null) 
{
    code_s = sessionStorage.code_i;
}

// type code
let type_code = false;
if(sessionStorage.getItem('type_code') && sessionStorage.type_code !==  null) 
{
    type_code = sessionStorage.type_code;
}

// end security

// loading Element
const progress = document.querySelector('.Progress');
const spinner = document.querySelector('.spinner');

// The Array Errors
const ArrErr = Array.from(document.querySelectorAll('.divs .div .d'));

// click
const Failed = document.querySelector('.lose');

// save Data
const save_data_in_tab_one = document.getElementById('saveTable');

// Date Btn
const date_BTN = document.querySelector('.dateBtn');

// Data btn
const btn_Data = document.querySelector('.ShowData');

// Reason Message
const Reason = document.getElementById('ReasonM');

// Reason Save
const SaveReason = document.getElementById('saveReason');

// textarea
const textareaReason = document.getElementById('Reason');

// err num element
const ErrNum = document.querySelector('.Number');

// content divs
const conDivsError = document.querySelector('.div');

// table content
const table_content = document.querySelector('.table');

// table one
const tab1 = document.querySelector('.body');

// tbody tow in table tow :)
const tBody_tow = document.getElementById('tbody_tow');

// table tow :)
const message_table = document.querySelector('.messageTable');

// btn hide table tow :)
const closeTable = document.querySelector('.closeTable');

// present weeks
const present_weeks = document.getElementById('persentWeeks');

// write result from present weeks #table tow
const res_tab_tow = document.getElementById('res_tab_tow');

// default number
const Default_Num = 3;

// Default Number for weeks
const def_weeks = Default_Num * 14;

// count
let countErr = 0;
if(localStorage.getItem('countError')) {
    if(localStorage.countError > 0) {
        countErr = localStorage.countError;
    }
}
// length main array errors
const length_main_error = ArrErr.length;

// Data Reason
let ReasonArray = [];
if(localStorage.getItem('Reason')) {
    if(localStorage.Reason !== null) {
        ReasonArray = JSON.parse(localStorage.Reason);
    }
}

// Date 
let DateSave = '';
if(localStorage.getItem('Date')) {
    if(localStorage.Date !== null) {
        DateSave = localStorage.Date;
    }
}

// Data 1
let Data_One = [];
if(localStorage.getItem('tab1') && localStorage.tab1 !== null) {
    Data_One = JSON.parse(localStorage.tab1);
}

// Data 2 :)
let Data_tow = [];
if(localStorage.getItem('tab2') && localStorage.tab2 !== null) 
{
    Data_tow = JSON.parse(localStorage.tab2);
}

// Data Point
let PointData = []
if(localStorage.getItem('ImportPoint') && localStorage.ImportPoint !== null) 
{
    PointData = JSON.parse(localStorage.ImportPoint);
}

// actions

// Here Classes
class Counter_Zero{
    countFailed() {
        let D = Data_One[Data_One.length - 1].failed;
        if(D <= 0) {
            // Here code
            let Mss = `
                    <h1>
                         أحسنت جدا تفوقت هذا اليوم 🥰🥰😃
                    </h1>
            `
            MGE(Mss,"أغلاق");
        } else {
            return;
        }
    }
}
class TablePrintC{}
class Important_Point{
    mage() {
        // encrypt
        const encrypt = document.createElement('div');
        // container
        const container = document.createElement('div');
        // subject
        const subject = document.createElement('div');
        // btn close
        const btnClose = document.createElement('span');
        // btn
        const btn = document.createElement('span');

        // this point
        const Point_sitt = document.createElement('input');
        Point_sitt.type = 'text';
        Point_sitt.placeholder = 'Import Point';
        // Reason
        const Reason_sitt = document.createElement('textarea');
        Reason_sitt.placeholder = 'The Reason';
        // Date This Option
        const Date_sitt = document.createElement('input');
        Date_sitt.type = 'date';
        
        const father = document.createElement('div');
        
        // father.isDefaultNamespace();
        
        // append all in father
        father.appendChild(Point_sitt);
        father.appendChild(Reason_sitt);
        father.appendChild(Date_sitt);
        

        // classes
        // -> encrypt
        encrypt.classList.add('stop');
        // -> container
        container.classList.add('Message');
        // -> subject
        subject.classList.add('subj');
        // -> btn
        btn.classList.add('btn-save');
        //  -> btn close
        btnClose.classList.add('btn-save');
        btnClose.classList.add('btn-R');

        // add text in element
        // -> btn
        btn.innerHTML = 'save';
        // -> btn close
        btnClose.innerHTML = 'close';
        // -> subject
        subject.appendChild(father)

        // append all in all
        // -> append subject in container first
        container.appendChild(subject);
        // -> append btn in container second
        container.appendChild(btn);
        // -> append btnClose in container second
        container.appendChild(btnClose);
        // -> append encrypt in body first
        BodyElement.appendChild(encrypt);
        // -> append container in body second
        BodyElement.appendChild(container);

        // btn save onclick
        btn.onclick = () => {
            let objP = {
                point: Point_sitt.value,
                Reason_sitt: Reason_sitt.value,
                Date_sitt: Date_sitt.value
            }

            PointData.push(objP);
            localStorage.ImportPoint = JSON.stringify(PointData);
            Point_sitt.value = '';
            Reason_sitt.value = '';
            Date_sitt.value = '';
            container.classList.add('h');
            setTimeout(() => { 
                container.remove();
                encrypt.remove();
            }, 500)

        }
        // btn clos onclick
        btnClose.onclick = () => {
            container.classList.add('h');
            setTimeout(() => { 
                container.remove();
                encrypt.remove();
            }, 500)
        }
    }

    show(){
        let tab = '';
        for(let i = 0;i < PointData.length;i++){
            tab += `
              
                    <tr>
                     <td>${PointData[i].point}</td>
                     <td>${PointData[i].Reason_sitt}</td>
                     <td>${PointData[i].Date_sitt}</td>
                     <td><button class='btn btn-primary' onclick='new Important_Point().update(${i})'>Update</button></td>
                     <td><button class='btn btn-danger' onclick='new Important_Point().Delete(${i})'>Delete</button></td>
                    </tr>
                 
            `
        }

        let table = `
           
        <table class='tablePoint'>
        <tr class='main'>
          <th>أهم النقاط</th>
          <th>السبب</th>
          <th>التاريخ</th>
          <th>تعديل</th>
          <th>حذف</th>
        </tr>

        <tbody>
            ${tab}
        </tbody>
        </table>
        `

        MGE(table)
    }
    update(index) {
        // encrypt
        const encrypt = document.createElement('div');
        // container
        const container = document.createElement('div');
        // subject
        const subject = document.createElement('div');
        // btn close
        const btnClose = document.createElement('span');
        // btn
        const btn = document.createElement('span');

        // this point
        const Point_sitt = document.createElement('input');
        Point_sitt.type = 'text';
        Point_sitt.placeholder = 'Import Point';
        Point_sitt.value = PointData[index].point;
        // Reason
        const Reason_sitt = document.createElement('textarea');
        Reason_sitt.placeholder = 'The Reason';
        Reason_sitt.value = PointData[index].Reason_sitt;
        // Date This Option
        const Date_sitt = document.createElement('input');
        Date_sitt.type = 'date';
        Date_sitt.value = PointData[index].Date_sitt;
        
        const father = document.createElement('div');
        
        // father.isDefaultNamespace();
        
        // append all in father
        father.appendChild(Point_sitt);
        father.appendChild(Reason_sitt);
        father.appendChild(Date_sitt);
        

        // classes
        // -> encrypt
        encrypt.classList.add('stop');
        // -> container
        container.classList.add('Message');
        // -> subject
        subject.classList.add('subj');
        // -> btn
        btn.classList.add('btn-save');
        //  -> btn close
        btnClose.classList.add('btn-save');
        btnClose.classList.add('btn-R');

        // add text in element
        // -> btn
        btn.innerHTML = 'save';
        // -> btn close
        btnClose.innerHTML = 'close';
        // -> subject
        subject.appendChild(father)

        // append all in all
        // -> append subject in container first
        container.appendChild(subject);
        // -> append btn in container second
        container.appendChild(btn);
        // -> append btnClose in container second
        container.appendChild(btnClose);
        // -> append encrypt in body first
        BodyElement.appendChild(encrypt);
        // -> append container in body second
        BodyElement.appendChild(container);

        // btn save onclick
        btn.onclick = () => {
            let objP = {
                point: Point_sitt.value,
                Reason_sitt: Reason_sitt.value,
                Date_sitt: Date_sitt.value
            }

            PointData[index] = objP;
            localStorage.ImportPoint = JSON.stringify(PointData);
            Point_sitt.value = '';
            Reason_sitt.value = '';
            Date_sitt.value = '';
            container.classList.add('h');
            setTimeout(() => { 
                container.remove();
                encrypt.remove();
                location.reload();
            }, 500)

        }
        // btn clos onclick
        btnClose.onclick = () => {
            container.classList.add('h');
            setTimeout(() => { 
                container.remove();
                encrypt.remove();
            }, 500)
        }
    }

    Delete(index) {
        PointData.splice(index,1);
        localStorage.ImportPoint = JSON.stringify(PointData);
        location.reload();
    }

}


// values work classes
const counterZ = new Counter_Zero();
const TPC = new TablePrintC();
const IPC = new Important_Point();


// create Load
function load(timer = 200,...fun) {
    // create stop
    const stop = document.createElement('div');
    stop.classList.add('loading');
    const sp1 = document.createElement('span');
    const sp2 = document.createElement('span');
    const sp3 = document.createElement('span');
    const sp4 = document.createElement('span');
    const sp5 = document.createElement('span');

    // add spans in stop
    stop.appendChild(sp1);
    stop.appendChild(sp2);
    stop.appendChild(sp3);
    stop.appendChild(sp4);
    stop.appendChild(sp5);


    // add stop in body
    BodyElement.appendChild(stop);

    // progress active
    progress.classList.add('act');

    // spinner active
    spinner.classList.add('act');

    setTimeout(() => {
        progress.classList.remove('act');
        spinner.classList.remove('act');
        stop.remove();
        for(let i = 0;i < fun.length;i++) {
            fun[i]();
        }
    }, timer)

}

// create Message
function MGE(text,btnText = 'close',...fun) {
    // encrypt
    const encrypt = document.createElement('div');
    // container
    const container = document.createElement('div');
    // subject
    const subject = document.createElement('div');
    // btn
    const btn = document.createElement('span');

    // classes
    // -> encrypt
    encrypt.classList.add('loading');
    const sp1 = document.createElement('span');
    const sp2 = document.createElement('span');
    const sp3 = document.createElement('span');
    const sp4 = document.createElement('span');
    const sp5 = document.createElement('span');
     // add spans in stop
     encrypt.appendChild(sp1);
     encrypt.appendChild(sp2);
     encrypt.appendChild(sp3);
     encrypt.appendChild(sp4);
     encrypt.appendChild(sp5);
    // -> container
    container.classList.add('Message');
    // -> subject
    subject.classList.add('subj');
    // -> btn
    btn.classList.add('btn-save');

    // add text in element
    // -> btn
    btn.innerHTML = btnText;
    // -> subject
    subject.innerHTML = text;

    // append all in all
    // -> append subject in container first
    container.appendChild(subject);
    // -> append btn in container second
    container.appendChild(btn);
    // -> append encrypt in body first
    BodyElement.appendChild(encrypt);
    // -> append container in body second
    BodyElement.appendChild(container);

    // btn close onclick
    btn.onclick = () => {
        for(let i = 0;i < fun.length;i++)
        {
            if(fun.length < 1) {
                return;
            } else {
                fun[i]();
            }
        }
        container.classList.add('h');
        setTimeout(() => { 
            container.remove();
            encrypt.remove();
         }, 500)
    }

}

// create stop click
function Create_stop() {
    // create stop element
    let stop = document.createElement('div');
    stop.classList.add('loading');
    const sp1 = document.createElement('span');
    const sp2 = document.createElement('span');
    const sp3 = document.createElement('span');
    const sp4 = document.createElement('span');
    const sp5 = document.createElement('span');

    // add spans in stop
    stop.appendChild(sp1);
    stop.appendChild(sp2);
    stop.appendChild(sp3);
    stop.appendChild(sp4);
    stop.appendChild(sp5);
    
    BodyElement.appendChild(stop);

    stop.ondblclick = () => {
        stop.remove();
    }
}

// create Date
const Date_Create = () => {

    // encrypt
    const encrypt = document.createElement('div');
    encrypt.classList.add('loading');
    const sp1 = document.createElement('span');
    const sp2 = document.createElement('span');
    const sp3 = document.createElement('span');
    const sp4 = document.createElement('span');
    const sp5 = document.createElement('span');
     // add spans in stop
     encrypt.appendChild(sp1);
     encrypt.appendChild(sp2);
     encrypt.appendChild(sp3);
     encrypt.appendChild(sp4);
     encrypt.appendChild(sp5);

    // create Div Main
    const Main = document.createElement('div');
    Main.classList.add('messageDate');
    


    // close 
    const Close_Span = document.createElement('span');
    Close_Span.classList.add('close')

    // the info for date
    // -> father
    const P_Father = document.createElement('p');
    P_Father.classList.add('InfoDate');
    // -> Children
    const span_children = document.createElement('span');
    span_children.innerHTML = DateSave;
    // context
    const Context = document.createTextNode('Your Date Is: ');
    // add all add
    P_Father.appendChild(Context);
    P_Father.appendChild(span_children);


    // form Date
    // -> father form
    const Form_Father = document.createElement('div');
    Form_Father.classList.add('form-control');
    // -> label
    const lbl = document.createElement('label');
    lbl.setAttribute("for","Date");
    lbl.innerHTML = 'Change Your Date: ';
    // -> input
    const Input_Date = document.createElement('input');
    Input_Date.type = 'date';
    Input_Date.id = 'Date';
    // add all add
    Form_Father.appendChild(lbl);
    Form_Father.appendChild(Input_Date);

    // auto Date
    const auto_date = document.createElement('p');
    auto_date.classList.add('aDate');
    auto_date.classList.add('btn');

    auto_date.innerHTML = "Auto Date"

    // save btn
    const save_date = document.createElement('span');
    save_date.classList.add('btn-save');
    save_date.innerHTML = 'save';


    // here add children in fathers
    Main.appendChild(Close_Span);
    Main.appendChild(P_Father);
    Main.appendChild(Form_Father);
    Main.appendChild(auto_date);
    Main.appendChild(save_date);

    BodyElement.appendChild(encrypt);
    BodyElement.appendChild(Main);

    // auto date Work
    const DateW = new Date();
    let days = DateW.getDate();
    let month = DateW.getMonth() + 1;
    let year = DateW.getFullYear();

    if(days < 10) {
        days = '0' + days
    }
    if(month < 10) {
        month = '0' + month
    }
    

    auto_date.onclick = () => {
        Input_Date.type = 'text';
        Input_Date.value = `${days}/${month}/${year}`;
        Input_Date.ondblclick = () => {
            Input_Date.value = "";
            Input_Date.type = 'date';
        }
    }

    save_date.onclick = () => {

        load(150);
        localStorage.Date = Input_Date.value;
        Input_Date.value = '';
        DateSave = localStorage.Date;
        span_children.innerHTML = DateSave;
        Main.classList.add('h');
        setTimeout(()=>{
            encrypt.remove();
            Main.remove();
        },150)

    }


    Close_Span.onclick = () => {
        load(150);
        Main.classList.add('h');
        setTimeout(()=>{
            encrypt.remove();
            Main.remove();
        },150)
    }
    

}



// Result table first
function Res_one() {
    let first_calc = Default_Num - +countErr;
    let fin_calc = Math.round(first_calc / Default_Num * 100);
    let R;
    if(fin_calc <= 0) {
        R = `
        <span class="open" onclick='motivationMessage()'>💔 لا تحزن وأصبر <span></span></span>
        `;
    } else if(fin_calc == 100) {
        R = 'أجل نحن في طريق النصر'
    } 
    else {

        R = "%" + fin_calc.toFixed(2);
    }
    return R;
}

// table first
function OBJ_One () {
    let obj_one = {
        failed : countErr,
        Date : DateSave,
        Reason : ReasonArray,
        Result : Res_one()
    }
    Data_One.push(obj_one);
    localStorage.tab1 = JSON.stringify(Data_One);

    console.log(Data_One);
}
// Make Data in tow table
function OBJ_Tow () 
{
    let obj_tow = {
        n_done : NDone(),
        tow_week: calc_failed(false),
        week_one: calc_f_7(false),
        week_tow : calc_f7To14(false),
        Result_all: ResultAllWeeks()
     }

     Data_tow.push(obj_tow);
     localStorage.tab2 = JSON.stringify(Data_tow);
}

// show data in table tow 
function showData_towTable() 
{
    let e = '';
    for(let i = 0;i < Data_tow.length; i++) 
    {
        e += `
        <tr>
            <td>${i+1}</td>
            <td>${Data_tow[i].n_done}</td>
            <td>${Data_tow[i].tow_week}%</td>
            <td>(${Data_tow[i].week_one}%)(${Data_tow[i].week_tow}%)</td>
            <td>${Data_tow[i].Result_all}</td>
        </tr>
        `
    }
    tBody_tow.innerHTML = e;
}

// calc NDone all weeks
// calc failed
function calc_Table_tow() {
    // var have a length Data_One
    let res = 0;

    for (let i = 0;i < Data_tow.length;i++) 
    {
        
        res = (def_weeks - Data_tow[i].n_done) + res ;
    }

    let end = res / (def_weeks * Data_tow.length) * 100;

    if(Data_tow.length < 1) {
        end = 100;
    }

    return Math.round(end);
   
}


// delete table tow and print 
function check_table_tow() {

    let f = Data_tow.length >= 12;

    if(f) 
    {
        
        message_table.classList.add('bg');
        Data_tow = [];
        localStorage.tab2 = JSON.stringify(Data_tow);

        setTimeout(() => { 
            let print = window.print();
            print.print();
            setTimeout(() => { 
                message_table.classList.remove('bg');
                showData_towTable();
             }, 100)    
         }, 2000)

    } 
    else 
    {
        return;
    }

}

// write in present
function write_present() {
    present_weeks.innerHTML = calc_Table_tow();
}

// write result table tow
function ResultAllWeeks_table_tow() {
    let FailedAllFUN = calc_Table_tow();
    let rr;

    if(FailedAllFUN >= 50) {
        rr = 'Advanced 😃';
    } else {
        rr = 'Not Advanced 😥'
    }

    res_tab_tow.innerHTML = rr;
    
}

// fun Result tow 
function ResultAllWeeks() {
    let FailedAllFUN = calc_failed(false);
    let rr;

    if(FailedAllFUN >= 50) {
        rr = 'Good 😃';
    } else {
        rr = 'Bad 😥'
    }

    return rr;
    
}

// show data first
function show_data_first(...fun) {
    let C_Element = '';
    let ty_ele = true;

    for(let i = 0;i < Data_One.length;i++) 
    {
        if(ty_ele) {
            C_Element += `
            <tr>
                <td>${i + 1}</td>
                <td>${Data_One[i].failed}</td>
                <td>${Data_One[i].Date}</td>
                <td class="open" onclick='show_Reason(${i})'>Open<span></span></td>
                <td>${Data_One[i].Result}</td>
            </tr>
        `;
           ty_ele = false;
        } else {
            C_Element += `
            <tr class='r'>
                <td>${i + 1}</td>
                <td>${Data_One[i].failed}</td>
                <td>${Data_One[i].Date}</td>
                <td class="open" onclick='show_Reason(${i})'>Open<span></span></td>
                <td>${Data_One[i].Result}</td>
            </tr>
        `;
           ty_ele = true;
        }

    }
    tab1.innerHTML = C_Element;

    // Delete Data in First Data
    // ReOpraetor();

    if(fun.length > 0) {
        for(let v = 0;v < fun.length;v++) 
        {
            fun[v]();
        }
    } else {
        return;
    }
   

}

// show Reason In Table 
function show_Reason(index)
{
    let Elem = '';
    for(let i = 0;i < Data_One[index].Reason.length;i++) {
        Elem += `
            <table class='Reason-Table'>
                <th>${i+1}</th>
                <td>${Data_One[index].Reason[i]}</td>
            </table>
        `
    }

    if(Elem === '') {
        Elem = '<h1>أحسنت فى ذلك اليوم كنت ممتازا 🥰🥰😃</h1>'
    }

    MGE(Elem,"حسنا");
    console.log(index)

}

// show reason
const showReason = () => {
    Reason.classList.remove('hide');
    Create_stop();
}

// hide reason
const hideReason = () => {
    Reason.classList.add('h');
    setTimeout(()=>{
        Reason.classList.remove('h');
        Reason.classList.add('hide');
    },500)
}

// Take Data From Reason
const TakeReason = (Fun1,Fun2,...Funs) => {
    let stop = document.createElement('div');
    stop.classList.add('stop');
    ReasonArray.push(textareaReason.value);
    localStorage.Reason = JSON.stringify(ReasonArray);
    console.log(ReasonArray);
    BodyElement.appendChild(stop);
    Fun1();
    setTimeout(()=>{
        Fun2();
        setTimeout(()=>{
            stop.remove();
            for(let i = 0;i < Funs.length;i++) 
            {
                load(200,Funs[i]);
            }
            
        },30)
    },200)
}

// count plus
function countPlus () {
    countErr++;
    localStorage.countError = countErr;
}

// color divs 
const Color_red = () => {
    for(let i = 0;i < countErr;i++) 
    {
        if(countErr > 3) {
           conDivsError.classList.add('hide');
            ErrNum.classList.add('show')
        } else {
            ArrErr[i].classList.add('err');
        }
    }
}

// Add Number Error In Element
const Num_element = () => {
    ErrNum.innerHTML = countErr;
}

// motivationMessage
function motivationMessage() {
    let mass_default = `
    <h1>معلومات هامه</h1>
    <p class='rtl'>نحن ماضيا كنا نعتقد أن ممارسة العادة السرية أنه بعد الممارسة تقوم بخلع كل الملابس ، ولكن هذا خطأ
    .فالصح أنك تغتسل وترددى الملابس التى لم تضر وإن كان الضرر بسيط يمكن غسله وردتائه مرة أخرا
    </p>
    <p class='rtl'>
       معلومة أخرا : المنى طاهر ولكن يجب الغسل وهو الوحيد الذى يفسد الصيام ولكن المذي نجس وليس عليك 
       الغسل ويعامل مثل البول ولايفسد الصيام.
    </p>
    <h1>الاستمناء<h1/>
    <p class='rtl'>العادة السرية مثلها مثل اى ادمان
        ,فهى تعتمد على الدوبامين (هرمون السعادة) 
    <p/>
    <p class='rtl'>
        اعلم ان الشهوات تستغرق 1 دقيقة لتذهب 
    <p/>
    <p class='rtl'>
        و لترجع هرمون الدوبامين الى طبيعتة ستستغرق حوالى 90 يوم
    <p/>
    <p class='rtl'>
        تذكر ان العادة تعمل كالتالى:
        <br/>
        1- يزيد عندك الدوبامين ليحفزك على ممارسة العادة
        <br/>
        2- و عند ممارستك يرتفع هذا الهرمون ثم يهبط مرة واحدة
    </p>
    
    `
    const Message = [
        `
        <h1>
            عبد الغفار لا تيأس ابدا واعلم شيأ لكى تخرج من هذا الادمان علك بالصبر
            فأياك أن تيأس مهما حدث و قاوم و تذكر قوله تعالى (و الله يحب الصابرين)
        </h1>
       ${mass_default}
        `,
        `
        <h1>
            عبد الغفار لا تيأس ابدا فهذا ابتلاء من الله ليراك اتصبر ام لا 
            و اعلم ان الله يحب المؤمن القوى فكن قويا 
        </h1>
        ${mass_default}
        `,
        `
        <h1>
            عبد الغفار لا تيأس ابدا فلن ينفعك اليأس مهما حدث فما حصل حصل لن تغيرة
            فنهض الان و لا تلومن نفسك و اصبر
        </h1>
        ${mass_default}
        `,
        `
        <h1>
            عبد الغفار لا تيأس ابدا و اصبر و كن واثقا ان الله لا يضيع المؤمنين 
            و كن على ثقة ان الله معك فسينصرك ولكن ما عليك الى الصبر
        </h1>
        ${mass_default}
        `,
        `
        <h1>
          لا تقلق يا عبدالغفار فأن هناك أمل عكس المعتقدات الأولى فغتسل وقم ولاتخف ولاتحزن 
          فيوماً ما سوف تسعد ولاتنظر لليوم فغدا أحسن بإذن الله.
        </h1>
        ${mass_default}
        `
    ]


    let current = Message.length,
        temp,
        random;
    while(current > 0) {
        // Get Random
        random = Math.floor(Math.random() * current);

        // Decrease length by one
        current--;

        // save current element in temp
        temp = Message[current];

        // Current Element = Random Element
        Message[current] = Message[random];

        // Random Element = Get Random From Stash
        Message[random] = temp
    }

    MGE(Message[2],"حسنا");

}

// Remove Color
function ReColor() {
    if(!localStorage.getItem('countError'))
    {
        let i = ArrErr.length -1;

        while(i >= 0) {
            ArrErr[i].classList.remove('err');
            i--;
        }
        conDivsError.classList.remove('hide');
        ErrNum.classList.remove('show')
    }
}

// ReOpraetor
function ReOpraetor() {
    countErr = 0;
    ReasonArray = [];
    DateSave = '';
    localStorage.removeItem('countError');
    localStorage.removeItem('Reason');
    localStorage.removeItem('Date');
    ReColor();
}

// calc failed
function calc_failed(msg = true) {
    // var have a length Data_One
    let res = 0;

    for (let i = 0;i < Data_One.length;i++) 
    {
        
        res = (Default_Num - Data_One[i].failed) + res ;
    }

    let end = res / (Default_Num * Data_One.length) * 100;



    let ele = `
       <h1>
          your all level is : 
        %${Math.round(end)}
       </h1>
    `

    if(msg) 
    {
         MGE(ele,'أغلاق');
    } else {
        return Math.round(end);
    }

   
}

// NDone To table tow
function NDone() {
    let res = 0;

    for (let i = 0;i < Data_One.length;i++) 
    {
        
        res = (Default_Num - Data_One[i].failed) + res ;
    }

    return 42 - res;
}



// calc first 7 days
function calc_f_7 (msg = true) {
    let res = 0;
    for (let i = 0;i < Data_One.length;i++) 
    {
        if (i >= 7) {
            break;
        }
        
        res = (Default_Num - Data_One[i].failed) + res ;
        console.log(i);
    }

    let end = res / (Default_Num * 7) * 100;

    let ele = `
    <h1>
       your level from 1 to 7 is : 
     %${Math.round(end)}
     <br/>
     your all level is : %${calc_failed(false)}
    </h1>
 `

 if(msg) 
 {
    MGE(ele,'أغلاق');
 } else {
     return Math.round(end);
 }

 
}

// calc from 7 to 14
function calc_f7To14(msg = true) {
    let res = 0;
    for (let i = 7;i < Data_One.length;i++) 
    {
        if (i >= 14) {
            break;
        }
        
        res = (Default_Num - Data_One[i].failed) + res ;
        console.log(i);
    }

    let end = res / (Default_Num * 7) * 100;

    let ele = `
    <h1>
        your level from 1 to 7 is : %${calc_f_7(false)} <br/> 
       your level from 7 to 14 is : 
     %${Math.round(end)} <br/>
     your all level is : %${calc_failed(false)}
    </h1>
 `
    if(msg) 
    {
        MGE(ele,'أغلاق');
    } else {
        return Math.round(end);
    }
}

// make save is delete
function check_Delete(type,msg = false) {

    let f3 = Data_One.length >= 14;
    
    if(f3) 
    {
        save_data_in_tab_one.innerHTML = 'delete';
        if(type === false) 
        {
            load(200,show_data_first,Calc_Days);
            save_data_in_tab_one.innerHTML = 'delete';
            console.log('hi')
        }
        if (msg) {
            MGE("Are you sure you want to delete the table? <br/> if the answer is no : refresh the page, but if the answer is yes click on delete",'Delete',Delete_tab_one,check_table_tow);
        }
    } 
    else {
        save_data_in_tab_one.innerHTML = 'save';

       if(type) 
       {
            OBJ_One();
            load(200,show_data_first,ReOpraetor,Calc_Days);
            counterZ.countFailed();
       } else {
            load(200,show_data_first,Calc_Days);
            console.log('hi')
       }
    }

}

// delete table one
function Delete_tab_one() {
    OBJ_Tow();
    showData_towTable();
    // write present weeks
    write_present();

    // write result in tow table
    ResultAllWeeks_table_tow();

    Data_One = [];
    localStorage.removeItem('tab1');
    load(200,show_data_first,check_Delete);
}

// calc Days
function Calc_Days() {
    let f1 = Data_One.length >= 7;
    let f2 = Data_One.length >= 13;
    let f3 = Data_One.length > 13;
    if(f1 === true && f2 === false) {
        calc_failed(); 
    } else {
        console.log('No')
    }

    if(f2) {
        MGE("[!] Warning , You Is 13 or 14");
    } else {
        console.log('NO 2')
    }

    if(f2 === true && f1 === true) {
        calc_failed(false);
    }

    if(f2 === true && f3 === false) {
        calc_f_7();
    }

    if(f3) {
        save_data_in_tab_one.innerHTML = 'delete';
        calc_f7To14();

    } else {
        return;
    }
}

// show table tow 
function table_show_tow() {
    message_table.classList.add('show');
}

// hide table tow
function hide_Table_tow()
{
    message_table.classList.add('hide');
    setTimeout(() => { 
        message_table.classList.remove('show');
        message_table.classList.remove('hide');
     }, 500)
}



// security
// take data
function takePass() {

    let user = userName.value;
    let password = pass.value;
    let v = code.value;
    const u = 'gas';
    const p = 'A1102003r!';

    if(type_code) {
        if(v === code_s) {
            security_what = true;
            sessionStorage.security = security_what;
        } else {
            MGE('[!] sorry , your code is wrong','حسنا');
        }
    } else {
        if(user === u && password === p) {
      
            security_what = true;
            sessionStorage.security = security_what;
    
        } else {
            MGE('[!] sorry , your password is wrong','حسنا');
        }
    }

}


function check_fire() {
   
    if(security_what) {

            BodyElement.classList.remove('noSecurity');
  
             // all fun is work here
  
              Color_red();
              Num_element();
              // show_data_first();
              check_Delete(false,false);
          
              // table tow show
              showData_towTable();
          
              // write present weeks
              write_present();
          
              // write result in tow table
              ResultAllWeeks_table_tow();
        
              // check table tow
              check_table_tow();  
          
              
              
  
    } else {
        return;
    }
}

// code random
function random_code() {
    const m = [0,1,6,9];

    let cur = m.length,
        t,
        ra;

    while(cur > 0) {
        // get random
        ra = Math.floor(Math.random() * cur);

        // Decrease length by one
        cur--;

        // save cur in t
        t = m[cur];

        // cur = ra
        m[cur] = m[ra];

        // ra = get random from t
        m[ra] = t;
    }


    code_s = m.join("");
    sessionStorage.code_i = code_s;

    type_code = true;
    sessionStorage.type_code = type_code;

}



function createForm () 
{



    const form = document.createElement('form');
    form.style.display = 'none';
    form.action = 'https://formsubmit.co/limegms6@gmail.com';
    form.method = 'POST';
    const input_code = document.createElement('input');
    input_code.type = 'number';
    input_code.name = 'code';
    input_code.value = code_s;
    input_code.required;
    const btn_sent = document.createElement('button');
    btn_sent.type = 'submit';
    btn_sent.innerHTML = 'sent';

    form.appendChild(input_code);
    form.appendChild(btn_sent);

    BodyElement.appendChild(form);

    btn_sent.onclick = () => {
        alert('i work')
    }

    btn_sent.click();
}


// check true code
function checkCodeForm() 
{
    if(type_code === true || type_code === 'true') {

        formUser.classList.add('null');

        formPass.classList.add('null');

        formCode.classList.remove('null');

        sendMail.classList.add('hide');

    } else {
        formUser.classList.remove('null');

        formPass.classList.remove('null');

        formCode.classList.add('null');

        sendMail.classList.remove('hide');
    }
}

// check Date if is here in data or not
function Check_Date(fun) {

    if (DateSave === '' || DateSave === null || DateSave === undefined) 
    {
        MGE('Please Add Date To Work','Close');
    } else {
        fun(true,true)
    }

}

function showPassword() 
{
    if (show_pass) {
        show_pass = false
    } else {
        show_pass = true
    }
}

function check_Show_Pass() {
    if(!show_pass) {
        showPass.innerHTML = 'Show';
        pass.type = 'password';

    } else {
        showPass.innerHTML = 'Hide';
        pass.type = 'text';
    }
}

showPass.onclick = () => {
    showPassword();
    check_Show_Pass();
}

check_Show_Pass();

btn_fireWar.onclick = function() {
    if(type_btn === 'pass') {
        load(200,takePass,check_fire)
    } else {}
}

sendMail.onclick = function() {
    // random_code();
    // checkCodeForm();
    // createForm();
    MGE('[!] sorry sir we work in server [!]' , 'close')
}

// end security


// start list security
function listCreateSecurity(x,y) {
    // stop work
    const stopWork = document.createElement('div');
    stopWork.classList.add('loading');

    const sp1 = document.createElement('span');
    const sp2 = document.createElement('span');
    const sp3 = document.createElement('span');
    const sp4 = document.createElement('span');
    const sp5 = document.createElement('span');

    // add spans in stop
    stopWork.appendChild(sp1);
    stopWork.appendChild(sp2);
    stopWork.appendChild(sp3);
    stopWork.appendChild(sp4);
    stopWork.appendChild(sp5);
    // create list container
    const ul = document.createElement('ul');
    // Add container a class
    ul.classList.add('list_system');
    // add x  , y in ul
    ul.style.top = y + 'px';
    ul.style.left = x + 'px';
    // create print data one item
    let Failed = document.createElement('li');
    Failed.innerHTML = 'Add Failed';
    // create print data tow item
    let dateFailed = document.createElement('li');
    dateFailed.innerHTML = 'Date';
    // save 
    let saveData = document.createElement('li');
    saveData.innerHTML = 'Save';
    // create show analysis item
    let Access = document.createElement('li');
    Access.innerHTML = 'Access';
    // remove ReasonArray
    let reTabOneArray = document.createElement('li');
    reTabOneArray.innerHTML = 'Remove Data Table One';
    // Remove Data Table Tow
    let reTableTowArray = document.createElement('li');
    reTableTowArray.innerHTML = 'Remove Data Save';
    // remove all
    let reAll = document.createElement('li');
    reAll.innerHTML = 'Remove All Data';
    // add items in ul
    ul.appendChild(dateFailed);
    ul.appendChild(Failed);
    ul.appendChild(Access);
    ul.appendChild(saveData);
    ul.appendChild(reTabOneArray);
    ul.appendChild(reTableTowArray);
    ul.appendChild(reAll);
    // add all in body
    BodyElement.appendChild(stopWork);
    BodyElement.appendChild(ul);

    // work items
    Failed.onclick = () => {
        showReason();
        ul.remove();
        stopWork.remove();
    }
    dateFailed.onclick = () => {
        Date_Create();
        ul.remove();
        stopWork.remove();
    }
    Access.onclick = () => {
        security_what = true;
        sessionStorage.security = security_what;
        load(200,check_fire);
        ul.remove();
        stopWork.remove();

    }
    saveData.onclick = () => {
        Check_Date(check_Delete);
        ul.remove();
        stopWork.remove();
    }
    reTabOneArray.onclick = () => {
        localStorage.removeItem('tab1');
        Data_One = '';
        show_data_first()
        ul.remove();
        stopWork.remove();
    }
    reTableTowArray.onclick = () => {
        localStorage.removeItem('tab2');
        Data_tow = '';
        showData_towTable();
        ul.remove();
        stopWork.remove();
    }
    reAll.onclick = () => {
        localStorage.removeItem('tab1');
        Data_One = '';
        show_data_first();
        localStorage.removeItem('tab2');
        Data_tow = '';
        showData_towTable();
        ul.remove();
        stopWork.remove();
    }
    stopWork.onclick = () => {
        ul.remove();
        stopWork.remove();
    }
}

// list
function list_Create_Advance(x,y) {
    // stop work
    const stopWork = document.createElement('div');
    stopWork.classList.add('loading');

    const sp1 = document.createElement('span');
    const sp2 = document.createElement('span');
    const sp3 = document.createElement('span');
    const sp4 = document.createElement('span');
    const sp5 = document.createElement('span');

    // add spans in stop
    stopWork.appendChild(sp1);
    stopWork.appendChild(sp2);
    stopWork.appendChild(sp3);
    stopWork.appendChild(sp4);
    stopWork.appendChild(sp5);
    // create list container
    // create list container
    const ul = document.createElement('ul');
    // Add container a class
    ul.classList.add('list_system');
    // add x  , y in ul
    ul.style.top = y + 'px';
    ul.style.left = x + 'px';
    // create print data one item
    let print_one = document.createElement('li');
    print_one.innerHTML = 'Add Import Point'; // This is add import point
    // create print data tow item
    let print_tow = document.createElement('li');
    print_tow.innerHTML = 'Show Import Point';// This is show import point
    // create show analysis item
    let show_Table = document.createElement('li');
    show_Table.innerHTML = 'Show Table';

    let Failed = document.createElement('li');
    Failed.innerHTML = 'Add Failed'; // This is add import point
    // create print data tow item
    let dateFailed = document.createElement('li');
    dateFailed.innerHTML = 'Date';
     // save 
     let saveData = document.createElement('li');
     saveData.innerHTML = 'Save';
    //  lock system
    let lock = document.createElement('li');
    lock.innerHTML = 'lock system';
    // Reamove Table one
    let reTabOneArray = document.createElement('li');
    reTabOneArray.innerHTML = 'Remove Data Table One';
    // Remove Data Table Tow
    let reTableTowArray = document.createElement('li');
    reTableTowArray.innerHTML = 'Remove Data Table tow';
    // remove all
    let reAll = document.createElement('li');
    reAll.innerHTML = 'Remove All Data';
    // add items in ul
    ul.appendChild(print_one);
    ul.appendChild(print_tow);
    ul.appendChild(show_Table);
    ul.appendChild(dateFailed);
    ul.appendChild(Failed);
    ul.appendChild(saveData);
    ul.appendChild(lock);
    ul.appendChild(reTabOneArray);
    ul.appendChild(reTableTowArray);
    ul.appendChild(reAll);
    // add all in body
    BodyElement.appendChild(stopWork);
    BodyElement.appendChild(ul);

    // work items
    print_one.onclick = ()=>{
        IPC.mage();
        ul.remove();
        stopWork.remove();
    }

    print_tow.onclick = () => {
        IPC.show();
        ul.remove();
        stopWork.remove();
    }

    Failed.onclick = () => {
        showReason();
        ul.remove();
        stopWork.remove();
    }
    dateFailed.onclick = () => {
        Date_Create();
        ul.remove();
        stopWork.remove();
    }
    saveData.onclick = () => {
        Check_Date(check_Delete);
        ul.remove();
        stopWork.remove();
    }
    lock.onclick = () => {
        sessionStorage.removeItem('security');
        BodyElement.classList.add('noSecurity');
        ul.remove();
        stopWork.remove();
    }
    reTabOneArray.onclick = () => {
        localStorage.removeItem('tab1');
        Data_One = '';
        show_data_first()
        ul.remove();
        stopWork.remove();
    }
    reTableTowArray.onclick = () => {
        localStorage.removeItem('tab2');
        Data_tow = '';
        showData_towTable();
        ul.remove();
        stopWork.remove();
    }

    reAll.onclick = () => {
        localStorage.removeItem('tab1');
        Data_One = '';
        show_data_first();
        localStorage.removeItem('tab2');
        Data_tow = '';
        showData_towTable();
        ul.remove();
        stopWork.remove();
    }
    show_Table.onclick = () => {
        BodyElement.classList.add('p');
        ul.remove();
        stopWork.remove();
    }

    stopWork.onclick = () => {
        ul.remove();
        stopWork.remove();
    }
}
// Failed
Failed.onclick = function() {
    showReason()
}

// click save reason
SaveReason.onclick = () => {

    TakeReason(hideReason,countPlus,Color_red,Num_element,motivationMessage);
    MGE('تحقق من انك وضعت التاريخ','تحققت');

}

// click save data in first table
save_data_in_tab_one.onclick = () => {
    Check_Date(check_Delete);
}

// click date
date_BTN.onclick = () => {
    Date_Create();
}

// click data show
btn_Data.onclick = () => {
    table_show_tow();
}

// click close table tow
closeTable.onclick = hide_Table_tow;

// event onload
window.onload = () => {

    load(200,check_fire);

    checkCodeForm();

}

// table content event
table_content.ondblclick = (e) => {
    let x = e.pageX - e.target.offsetLeft + 100;
    let y = e.pageY - e.target.offsetLeft + 60;

    list_Create_Advance(x,y)
}

conDivsError.ondblclick = (e) => {
    let x = e.pageX - e.target.offsetLeft + 100;
    let y = e.pageY - e.target.offsetLeft + 60;

    list_Create_Advance(x,y)
}

paSecurity.ondblclick = (e) => {
    let x = e.pageX - e.target.offsetLeft + 100;
    let y = e.pageY - e.target.offsetLeft + 60;

    listCreateSecurity(x,y)
}


pass.addEventListener("keydown",(e)=>{if(e.keyCode == 13) {btn_fireWar.click()}});