import React, {useState} from 'react';
import './SourcesTable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faTimes, faCheck} from '@fortawesome/free-solid-svg-icons'

function SourcesTable(props)
{
    const [sourceToEdit, setSourceToEdit] = useState(-1);
    const [name, setName] = useState('');
    const [org, setOrg] = useState('');
    const [phoneNums, setPhoneNums] = useState('');
    const [emails, setEmails] = useState('');
    const [notes, setNotes] = useState('');

    const listSources = () => {
        return props.sources.map((source) => {
            if (source.id === sourceToEdit)
            {
                return (
                    <tr key={source.id}>
                        <td><input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/></td>
                        <td><input type="text" value={org} onChange={(e) => {setOrg(e.target.value)}}/></td>
                        <td><input type="text" value={phoneNums} onChange={(e) => {setPhoneNums(e.target.value)}}/></td>
                        <td><input type="text" value={emails} onChange={(e) => {setEmails(e.target.value)}}/></td>
                        <td><input type="text" value={notes} onChange={(e) => {setNotes(e.target.value)}}/></td>
                        <td>
                            <button onClick={() => {setSourceToEdit(-1);}}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <button onClick={() => {handleUpdateClick(source.id)}}>
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </td>
                    </tr>
                );
            }
            else
            {
                return (
                    <tr key={source.id}>
                        <td>{source.name}</td>
                        <td>{source.org}</td>
                        <td>{source.phone_nums}</td>
                        <td>{source.emails}</td>
                        <td>{source.notes}</td>
                        <td>
                            <button onClick={() => {handleEditClick(source);}}>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button onClick={() => {props.onDelete(source.id);}}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </td>
                    </tr>
                );
            }
        })
    }

    const handleEditClick = (source) => {
        setSourceToEdit(source.id);
        setName(source.name);
        setOrg(source.org);
        setPhoneNums(source.phone_nums);
        setEmails(source.emails);
        setNotes(source.notes);
    }

    const handleUpdateClick = (id) => {
        const updatedSource = {
            'name': name,
            'org': org,
            'phone_nums': phoneNums,
            'emails': emails,
            'notes': notes,
            'id': id
        }
        props.onUpdate(updatedSource);
        setSourceToEdit(-1);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Organization</th>
                        <th>Phone Numbers</th>
                        <th>Emails</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>{listSources()}</tbody>
            </table>
        </div>
    );
}

export default SourcesTable;