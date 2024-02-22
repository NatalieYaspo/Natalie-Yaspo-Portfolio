export default function Contact() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isGoing: true,
  //     numberOfGuests: 2
  //   };

  //   this.handleInputChange = this.handleInputChange.bind(this);
  // }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });

  return (
    <div>
      <h2>Contact Me:</h2>
      <form>
      <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Name:</label>
          <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name Goes Here..." />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address:</label>
          <input type="email" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="name@example.com..." />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Message:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </div>
  );
}



