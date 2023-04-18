import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import SideBar from './Scheduler/Sidebar';

export const ChatPage = ({ groupData }) => {
    let username = "aryan";
    let group_id=1;
    const [messages, setMessages] = useState([]); // State to store chat messages
    const [members, setMembers] = useState(['']);
    let k = messages.length - 1;
    const [input, setInput] = useState(''); // State to store input message
    useEffect(() => { 
        // console.log( props.startDate)
        fetch("http://127.0.0.1:8000/1/1/messages/")
          .then((response) => response.json())
          .then((data) => {setMessages(data); console.log(messages);return fetch(`http://localhost:8000/1/1/attendees`)})
          .then((response) => response.json())
          .then((data) => setMembers(data));
        console.log(messages);
    
      }, [])
    const handleInputChange = (event) => {
        setInput(event.target.value); // Update input state with user's input
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (input.trim() === '') return; // Do not submit empty messages
        k = k + 1;
        let mymsg = {
            sender: username,
            message: input,
            group_id:group_id
        };
        console.log(input);
        fetch('http://127.0.0.1:8000/1/1/post/',{
            // mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({
              sender: "Anupriya",
              message: input,
              group_id:group_id
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((res) => { console.log(res); return res.json(); })
            .then((data) => { setMessages([...messages,data]); setInput(''); })
            .catch((err) => {
              console.log(err.message);
            });     
    };

    return (
        <div>
            <Navbar variant="dark"
                style={{ backgroundColor: "#E28616", color: "#000000", height: "50px" }}>
                <SideBar groupName={"PKP+2"} />
                <Container>
                    <Navbar.Brand style={{ fontSize: "30px" }}><strong>TRIP  ROYALE</strong></Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar
                style={{ backgroundColor: "#F6AD52", color: "#000000", textAlign: "center", display: "inline-block", width: "100%" }}>
                <h4>GENERAL</h4>
            </Navbar>

            <div
                style={{
                    display: 'flex',
                    height: '100vh',
                    backgroundColor: '#FFE193',
                }}>
                <div style={{ flexBasis: '20%', }}>
                    <ListGroup>
                        {members.map(member => (
                            <ListGroup.Item
                                key={member.id}
                                style={{
                                    backgroundColor: "#FFE193",
                                    fontSize: '30px',
                                }}
                            >
                                {member.Name} 
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
                <div
                    style={{
                        flexBasis: '80%',
                        backgroundColor: '#fff',
                        padding: '20px',
                    }}>
                    {messages.map((m) => (
                        <div key={m.id} className="d-flex mb-3">
                            <Card
                                style={{
                                    backgroundColor: "#FFE193",
                                    width: "50%",
                                    height: "30%",
                                    borderRadius: "5%"
                                }}
                            >
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        {m.sender}
                                    </blockquote>
                                    <footer >{m.message}</footer>
                                </Card.Body>
                            </Card>

                        </div>
                    ))}
                    <form onSubmit={handleFormSubmit} >
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

