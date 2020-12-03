import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../Reducers/patientReducer';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const PatientManagement = () => {
    const nameRef = useRef();

    const [state, dispatch] = useReducer(patientReducer, patientState);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
        nameRef.current.value = '';
    }

    return (
        <div className="container text-center mt-5">
            <h1> &#127752; Patient Management</h1>
            <h3>Total Patient: <span className="text-muted bg-light">{state.patients.length}</span> </h3>
            <br />
            <div>
                <form className="md-form" onSubmit={handleSubmit}>
                    <h1><PersonAddIcon fontSize="large" style={{ color: "green" }} /></h1>
                    <input type="text" id="inputIconEx2" className="form-control" placeholder="Type Patient Name then enter" ref={nameRef}></input>

                </form>
            </div>
            <br />

            <div>
                {
                    state.patients.map(pt => <div className="card text-center m-2 p-2" >
                        <div className="card-body">
                            <h5 className="card-title"> Patient Name: {pt.name}</h5>
                            <p className="card-text text-muted"> Patient Id: {pt.id}</p>
                            <button onClick={() => dispatch({
                                type: 'REMOVE_PATIENT',
                                id: pt.id
                            })} className="btn btn-warning" ><HighlightOffIcon fontSize="large" /></button>

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default PatientManagement;