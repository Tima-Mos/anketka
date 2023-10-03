import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import PostItem from "./PostItem";

const Convert = ({curencys}) => {
    return (
        <div>
            <div className="converter">
                <InputGroup size="lg" className="input">
                    <Form.Control style={{fontSize: "50px"}}
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="деньга"
                        />
                </InputGroup>
                <img style={{height: "70px"}} src="https://cdn-icons-png.flaticon.com/512/21/21122.png" />
                <InputGroup size="lg" className="input">
                    <Form.Control style={{fontSize: "50px"}}
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="деньга"
                    />
                </InputGroup>
            </div>
                <div className="buttons">
                    <Form.Select aria-label="Default select example" style={{width:"45%"}}>
                        {curencys.map(curency =>
                            <option value={curency.id} key ={curency.id}>{curency.name}</option>
                        )}
                    </Form.Select>
                    <Button variant="primary" size="lg" className="button">
                        перевести
                    </Button>
                </div>
        </div>
    );
};

export default Convert;