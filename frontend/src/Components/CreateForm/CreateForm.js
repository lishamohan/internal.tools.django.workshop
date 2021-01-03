import React, {useState} from 'react';
import './CreateForm.css'

function CreateForm(props) {
    const [name, setName] = useState('');
    const [org, setOrg] = useState('');
    const [phoneNums, setPhoneNums] = useState('');
    const [emails, setEmails] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = () => {
        const newSource = {
            'name': name,
            'org': org,
            'phone_nums': phoneNums,
            'emails': emails,
            'notes': notes
        }
        props.onCreate(newSource);
        setName(''); setOrg(''); setPhoneNums(''); setEmails(''); setNotes('');
    }

    return (
        <div className="form">
            <h3>Create a source</h3>
            <label for="name">Name:</label>
            <input id="name" type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
            <label for="org">Organization:</label>
            <input id="org" type="text" value={org} onChange={(e) => {setOrg(e.target.value)}}/>
            <label for="phone-nums">Phone numbers:</label>
            <input id="phone-nums" type="text" value={phoneNums} onChange={(e) => {setPhoneNums(e.target.value)}}/>
            <label for="emails">Emails:</label>
            <input id="emails" type="text" value={emails} onChange={(e) => {setEmails(e.target.value)}}/>
            <label for="notes">Notes:</label>
            <input id="notes" type="text" value={notes} onChange={(e) => {setNotes(e.target.value)}}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default CreateForm;