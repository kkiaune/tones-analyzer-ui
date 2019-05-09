import React from 'react';
import PropTypes from 'prop-types';
import toneAnalyzerResponse from './mock.json';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import PropTypes from 'prop-types';

// import mockClientEmotions from './mock.json';

const ClientEmotionsContainer = ({ clientEmotions }) => clientEmotions && clientEmotions.map(emotion => (<Card key={emotion.tone + emotion.score}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Client Tone Analysis
      </Typography>

      <Typography color="textSecondary">
        Emotion:
      </Typography>
      <Typography component="p">
        {emotion.tone}
        <br />
      </Typography>

      <Typography color="textSecondary">
        Emotion Tendencies:
      </Typography>
      <Typography component="p">


      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">BUTTON</Button>
    </CardActions>
  </Card>));

ClientEmotionsContainer.propTypes = {
  clientEmotions: PropTypes.object.isRequired
}


export default ClientEmotionsContainer
