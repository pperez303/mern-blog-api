import "./contact.css";
import neo from "../../images/neo.jpg"
import Sidebar from "../../components/sidebar/Sidebar";

function Contact () {  
    return (
    <main className="main">
        <div className="contactsection">
            <h2>Contact me</h2>
            <section className="contact">
                <header className="contactHeader">
                    <img className = "contactImg" src={neo} alt="" />
                    <div className="contactInfo">
                        <h3>Peter Perez</h3>
                        <p>Technical Project Manager</p>
                    </div>
                </header>
                <p className="contact_Phone">
                    1-702-468-8210
                </p>
                <p className="contact_Email">
                    peteperez.lv@gmail.com
                </p>
            </section>
            
            <section className="MERN">
                <h3>MERN</h3>
                <p>MongoDB</p>
                <p>ExpressJS</p>
                <p>ReactJS</p>
                <p>NodeJS</p>
            </section>
        </div>
        <Sidebar className="sidebar" />
    </main>
    )
}  
export default Contact;  