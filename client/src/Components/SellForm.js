import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SellForm() {
  return (
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label >Price</Form.Label>
          <Form.Control  placeholder="$" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="">Size</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Select Size</option>
            <option>7</option>
            <option>7.5</option>
            <option>8</option>
            <option>8.5</option>
            <option>9</option>
            <option>9.5</option>
            <option>10</option>
            <option>10.5</option>
            <option>11</option>
            <option>11.5</option>
            <option>12</option>
            <option>12.5</option>
            <option>13</option>
            <option>13.5</option>
            <option>14</option>
            <option>14.5</option>
            <option>15</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit">Sell</Button>
      </fieldset>
    </Form>
  )
}

export default SellForm 