import React from 'react';
import PropTypes from 'prop-types';
import toneAnalyzerResponse from './mock.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const ClientEmotionsContainer = ({ clientEmotions }) => (
<Card>
<CardContent>
  empty
</CardContent>
</Card>
      // clientEmotions && clientEmotions.map(emotion => (<Card key={emotion.tone + emotion.score}>
      //     <CardContent>
      //     { emotion.tone == 'Anger' ?
      //      <FontAwesomeIcon icon="poo" />
      //     : <FontAwesomeIcon icon="frown" />
      //     }
         
      //       <Typography color="textSecondary">
      //         Emotion:  {emotion.tone} <br />
      //       </Typography>
      //       <Typography component="p">
      //         Score: {emotion.score}
      //         <br />
      //       </Typography>
      //     </CardContent>
          
      //   </Card>)
        
      );

ClientEmotionsContainer.propTypes = {
  clientEmotions: PropTypes.object.isRequired
}

export default ClientEmotionsContainer
