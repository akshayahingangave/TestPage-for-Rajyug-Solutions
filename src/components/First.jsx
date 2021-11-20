import '../App.css';
import imagee from './avtar.png'

function App() {
    return (
        <div>
            <h2 className="left">
                <br />
                Book Appoinment
                <br /><br />
            </h2>
            <div className="row">
                <br />
                <div className="col-md-4 table1">
                    <br />
                    <input type="text" id="validationCustom01" placeholder="Search By Name" required />&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn1">View profile</button>

                    <div className="info">
                        <br />
                        <table className="table">
                            <thead className="tablehead" style={{ borderTopLeftRadius: '20px' }}>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>DOB</th>

                            </thead>
                            <tbody className="tablebody scroll">
                                <tr>
                                    <td>JHON WICK</td>
                                    <td>3848848222</td>
                                    <td>29/10/1993</td>
                                </tr>

                                <tr>
                                    <td>JHON WICK</td>
                                    <td>3848875321</td>
                                    <td>12/02/1990</td>
                                </tr>

                                <tr>
                                    <td>JHON WICK</td>
                                    <td>3848848433</td>
                                    <td>01/01/1983</td>
                                </tr>
                            </tbody>
                        </table>
                        <br /><br /><br />

                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={imagee} className="img-fluid rounded-start" alt="..." />
                                <p style={{ paddingLeft: '2em' }}>Jhon wick</p>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" style={{ color: 'gray' }}>
                                    <table className="card-text">
                                        <tr>
                                            <td>Gender:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <td >Age:</td>
                                            <td >24</td>
                                        </tr>
                                        <tr>
                                            <td>City:</td>
                                            <td >City Avenue, Wakad, Pune, Maharashtra</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-8">
                    <div className="row table1">
                        <div className="col-md-6">
                            <p style={{ color: '#5a77f5', fontSize: '34px' }}>Details</p>
                            <input type="text" class="form-control" id="validationCustom01" value="Appointment Title" required />
                            <div class="form-group">
                                <label for="inputState"></label>
                                <select id="inputState" class="form-control">
                                    <option selected>Appoinment Channel</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="inputState" ></label>
                                <select id="inputState" class="form-control" >
                                    <option selected >Dr.Peter Parker</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6" style={{ borderLeft: '1px solid gray' }}>
                            <p style={{ color: '#5a77f5', fontSize: '34px' }}>Appoinment details</p>
                            <table className="table">
                                <tr>
                                    <td><p style={{ color: 'gray' }}>John Wick</p></td>
                                    <td><p style={{ color: 'gray' }}>M-9848848222</p></td>
                                </tr>
                                <tr>
                                    <td><p style={{ color: 'gray' }}>Walk-In Appoinment</p></td>
                                    <td>
                                        <label class="switch">
                                            <input type="checkbox" id="togBtn" />
                                            <div class="slider round"></div>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="form-group">
                                        <p style={{ color: 'gray' }}>Schedule</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="form-group">
                                        <label for="inputState"></label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Date</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="form-group">
                                        <label for="inputState"></label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Time</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputState"></label>
                                <select id="inputState" class="form-control">
                                    <option selected style={{ color: 'gray' }}>Previous Oppointment (If any)</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <hr />
                            <br />
                            <p style={{ color: '#5a77f5', fontSize: '34px' }}>Vital Information</p>
                            <br />

                        </div>
                        <div className="col-md-2">
                            <div className="col-md-9" style={{ background: 'grey', textAlign: 'left' }}>
                                Blood Pressure
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="col-md-2" >
                            <div className="col-md-9" style={{ background: 'grey', align: 'left' }}>
                                Height
                            </div>
                            <div className="col-md-3" style={{ border: '1px solid grey' }}></div>
                        </div>
                        <div className="col-md-2">
                            <div className="col-md-9" style={{ background: 'grey', align: 'left' }}>
                                SPo2
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="col-md-2">
                            <div className="col-md-9" style={{ background: 'grey', align: 'left' }}>
                                Temp
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="col-md-2">
                            <div className="col-md-9" style={{ background: 'grey', align: 'left' }}>
                                Weight
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="col-md-2">
                            <div className="col-md-9" style={{ background: 'grey', align: 'left' }}>
                                pulse rate
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value="Reason"></textarea>
                        </div>

                        <div className="col-md-6">
                            <br />
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value="Note for Doctor"></textarea>

                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3" style={{marginBottom:'20px'}}>
                            <div>
                                <button className="btn2" type="submit">Cancel</button>
                            </div>
                        </div>
                        <div className="col-md-3" style={{marginBottom:'20px'}}>
                            <button className="btn2" type="reset">Book</button>
                        </div>
                        <div className="col-md-3"></div>
                        
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
