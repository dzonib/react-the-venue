import React from 'react';
import Button from '@material-ui/core/Button';

import ticketIcon from '../../resources/images/icons/ticket.png';

const CoolButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img 
        src={ticketIcon}
        alt='Icon button'
        className="iconImage"
      />
      {props.text}
    </Button>
  )
}

export default CoolButton;