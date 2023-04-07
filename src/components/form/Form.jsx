import "./form.scss"
import {useState} from "react";

export default function Form({  }){
    const[fullName,setFullName] = useState("")
    const[email,setEmail] = useState("")
    const[messages,setMessages] = useState("")
    const[errors,setErrors] = useState([])
    const[submitted,setSubmitted] =useState(false)

    function validate(){
        const errors = [];
        if(!fullName || /\d/.test(fullName)){
            errors.push("Please enter a valid full name.Name cannot contain numbers and should not be empty")
        }
        if(!email || !/@/.test(email)){
            errors.push("Please enter a valid email address.Here is an example : d@gmail.com")
        }
        if(!messages || messages.length<5){
            errors.push("Please enter your message below.It should be at least 5 characters long")
        }
        setErrors(errors)
        return errors.length===0;
    }

    function submit(e) {
        e.preventDefault()
        if(validate()){
            alert("Message sent")
            setSubmitted(true)
        }
    }
   if(submitted){
       return <p>Thank you for your message.We will get back to you soon!!!</p>
   }

    return(
        <>
            <div className="form">
                <form className="form-h" onSubmit={submit}>
                    <div className="form-head">Please enter your details below and we will get back to you as soon as possible!!</div>
                    <div className="f1">
                        <label htmlFor="fname">Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e)=>setFullName(e.target.value)}
                            placeholder="Enter your full name"
                            className="f-input"
                            id="fname"/>
                    </div>
                    <div className="f1">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="f-input"
                            id="email"/>
                    </div>
                    <div className="f1">
                        <label htmlFor="message">Message</label>
                        <textarea
                            placeholder="Please enter your message"
                            className="f-input"
                            value={messages}
                            onChange={(e)=>setMessages(e.target.value)}
                            id="message"/>
                    </div>
                    {errors.length > 0 && (
                        <div style={{color: 'red'}}>
                            {errors.map((error) => (
                                <div key={error}>{error}</div>
                            ))}
                        </div>
                    )}
                    <button type="submit" className="btn">Submit</button>

                </form>


            </div>


        </>
    )
}