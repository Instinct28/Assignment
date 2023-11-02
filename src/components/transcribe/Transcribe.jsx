import React from "react";
import { Form, FormGroup, Label, Input, Card, Col, Row, Button} from "reactstrap";

function Transcribe() {

  return(
    <Card style={{ marginTop: '20px', width: "900px",borderRadius: "5px", height: "400px", backgroundColor: 'white' }}>
        <Form>
    
            <FormGroup Row>
                <h1>Transcribe File</h1>
                <div style={{marginTop: '40px', marginLeft: '30px'}}>
                <Label for="exampleUrl" sm={2}>
                    Transcription Language
                </Label>
                <Col sm={10}>
                <Input className="input-wrapper"
                id="exampleSelect"
                name="select"
                type="select"
                >
                <option>
                    Default
                </option>
                <option>
                    English
                </option>
                <option>
                    Hindi
                </option>
                <option>
                    French
                </option>
                <option>
                    SpanishS
                </option>
                </Input>
                </Col>
                </div>
            </FormGroup>

            <FormGroup Row>
            <Col sm={10}>
                <Label style={{marginTop: '150px', marginLeft: '30px'}} for="exampleFile">
                Click to upload file 
                </Label>
                <Input style={{marginTop: '40px', marginLeft: '30px'}}
                id="exampleFile"
                name="file"
                type="file"
                />
                </Col>
            </FormGroup>

            <FormGroup Row>
                <h6 style={{marginTop: '40px', marginLeft: '30px'}}>Import from Link</h6>
                <div style={{marginLeft: '30px'}}>
                <Label for="exampleUrl" sm={2}>
                </Label>
                <Col sm={10}>
                <input className="input-wrapper" placeholder="Paste a Dropbox, Google Drive or Youtube URL here" type='search'></input>
                </Col>
                </div>
            </FormGroup>
            <Button style={{marginTop:'50px', width:'850px', height:'25px', marginLeft: 'auto', marginRight: 'auto', display: 'block',}}>Transcribe File</Button>
        </Form>
    </Card>
  )

}

export default Transcribe;