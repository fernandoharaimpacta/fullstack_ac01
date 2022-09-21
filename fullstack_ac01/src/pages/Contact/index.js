import { useState } from "react";
import Header from "../../components/Header";

function Contact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""        
    }) 
    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <Header />

            <h1>Você está na Contact</h1>
            <form>
                Nome:<br/>
                <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text"></input><br/>
                E-mail:<br/>
                <input onChange={(e) => handle(e)} id="email" value={data.email} placeholder="e-mail" type="text"></input><br/>
                Message:<br/>
                <input onChange={(e) => handle(e)} id="message" value={data.message} placeholder="message" type="text"></input>
            </form>
        </div>
    );
}

export default Contact;