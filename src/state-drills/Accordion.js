import React from 'react'; 
import './Accordion.css';

class Accordion extends React.Component {
  static defaultProps = { sections: [] };
  state = { currentSectionIndex: null };

  handleButtonClick = (index) => {
    this.setState({ currentSectionIndex: index })
  }
  
  render() {
    return (
      <ul>
        {this.props.sections.map((section, index) => (
          <li key={section.title} className='accordion-title'>
            <button className='accordion-button' onClick={ () => this.handleButtonClick(index) }>
              {section.title}
            </button>
            {this.state.currentSectionIndex == index && <p className='accordion-content'>{section.content}</p>}
          </li>
        ))}
      </ul>
    )
  }
}

export default Accordion;