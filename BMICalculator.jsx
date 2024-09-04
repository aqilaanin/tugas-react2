import React, {useState} from 'react';
import {Container,Form,Button,Row,Col,Alert, FormLabel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      let bmiMessage = '';
      if (bmiValue < 18.5) {
        bmiMessage = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiMessage = 'Normal';
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        bmiMessage = 'Overweight';
      } else {
        bmiMessage = 'Obesity';
      }
      setMessage(bmiMessage);
    }
  };

  return (
    <Container>
      <Row className="justify-content">
        <Col xs={12} md={6}>
        <h2>BMI Calculator</h2>
        <Form>
          <Form.Group controlId="formWeight">
            <FormLabel>Weight (kg)</FormLabel>
            <Form.Control
              type ="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
          </Form.Group>
          <Form.Group controlId="formHeight">
            <FormLabel>Height (cm)</FormLabel>
            <Form.Control
              type ="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
            />
          </Form.Group>
          <Button variant="primary" onClick={calculateBMI} className="mt-3">
            Calculate BMI
          </Button>
        </Form>
        {bmi && (
          <Alert variant="info" className="mt-4">
            Your BMI is {bmi} ({message})
          </Alert>
        )}
        </Col>
      </Row>
    </Container>
  );
}

export default BMICalculator;