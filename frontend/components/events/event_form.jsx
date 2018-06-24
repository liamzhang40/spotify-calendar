import React from 'react';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { start_time, end_time } = this.state;
    const { year, month, date, processForm, toggleModal } = this.props;
    const event = Object.assign({}, this.state, {
      start_time: `${year}-${month + 1}-${date}T${start_time.slice(0, 2)}:${start_time.slice(3, 5)}`,
      end_time: `${year}-${month + 1}-${date}T${end_time.slice(0, 2)}:${end_time.slice(3, 5)}`
    });

    processForm(event).then(() => toggleModal());
    console.log(event);
  }

  generateTimeOptions() {
    const timeOptions = [];
    for (let time = "00:00", i = 0; time < "24:00"; i++) {
      timeOptions.push(<option key={ i } value={time}>{time}</option>);
      let hour = parseInt(time.slice(0, 2));
      let min = parseInt(time.slice(3, 5));
      if (min === 45) {
        min = "00";
        hour += 1;
      } else {
        min += 15;
      }
      if (hour < 10) hour = "0" + hour;
      time = hour + ":" + min;
    }

    return timeOptions;
  }

  render() {
    const { toggleModal } = this.props,
          { start_time, end_time, description } = this.state,
          timeOptions = this.generateTimeOptions();

    return (
      <div className="modal-background" onClick={ toggleModal }>
        <div className="modal-child" onClick={ e => e.stopPropagation() }>
          <button className='close' onClick={ toggleModal }>&times;</button>

          <div className="event-form">
            <form onSubmit={this.handleSubmit}>
              <label>Start Time
                <select
                  size="4"
                  onChange={ this.update("start_time") }
                  value={ start_time }>
                  { timeOptions }
                </select>
              </label>

              <label>End Time
                <select
                  size="4"
                  onChange={ this.update("end_time") }
                  value={ end_time }>
                  { timeOptions }
                </select>
              </label>

              <label>Description
                <textarea
                  type="text"
                  onChange={ this.update("description") }
                  value={ description }/>
              </label>

              <button>Submit</button>
            </form>
          </div>

        </div>
      </div>
    );
  }

}

export default EventForm;
