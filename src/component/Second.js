import React, { useState } from 'react';
import { Container, Form, Button, Table ,Row, Col } from 'react-bootstrap';

function AboutPage() {
  
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, { name, age }]);
    setName('');
    setAge('');
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="about-container">

    <Container>
      
      
      <h1>Data Siswa</h1>
      <Row>
      <Col >
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Masukkan Nama" value={name} onChange={(event) => setName(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Usia</Form.Label>
          <Form.Control type="number" placeholder="Masukkan Usia" value={age} onChange={(event) => setAge(event.target.value)} />
        </Form.Group>

        <Button variant="primary mt-3" type="submit">
          Tambah Data
        </Button>
      </Form>
      </Col>
      <Col className='outputp' >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Usia</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Col>
      </Row>
    </Container>
    </div> 
  );
}

export default AboutPage;


