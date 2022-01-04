import React ,{useState} from 'react'

export default function Textform(props) {

    // const mystyle=()=>{
    //     document.body.style.backgroundColor="dark";
    // }
    const handleUpClick=()=>{
        let settext=text.toUpperCase();
        newtext(settext);
        console.log(newtext)
        props.showAlert("Converted to upper case","success");
    }
    // let hello="hello buddy";
    const handleOnChange=(event)=>{
        // console.log("0n Change");
        newtext(event.target.value);
    }
    const emailExtract=()=>{
        let string=text.split(" ");
        for(let i=0;i<string.length;i++)
        {
            let email=string[i].substr(string[i].length-9,string[i].length);
            if(email==="gmail.com")
            {
                console.log(string[i]);
                props.showAlert("Email found","success");
            }
        }
    }

    const date_Time=()=>{
        let todays=new Date();
        let date=todays.getFullYear()+"/"+todays.getMonth()+"/"+todays.getDate()+" "+todays.getDay();
        let time=todays.getHours()+":"+todays.getMinutes()+":"+todays.getSeconds()+" "+todays.getTimezoneOffset();
        console.log(date+" "+time);
        props.showAlert("time and date is being rendered","success");
    }

    const [text,newtext]=useState("Enter your text here")
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
            <textarea className="form-control" id="mytext" value={text} rows="6" onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":"gray",
        color:props.mode==="light"?"black":"white"}}></textarea>

            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>convert to upper case</button>
            <button className="btn btn-primary" onClick={emailExtract}>Email</button>
            <button className="btn btn-primary" onClick={date_Time}>Date Time</button>

            
        </div>
    )
}
