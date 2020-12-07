import Header from '../organisms/Header/Header';
import WorkSpace from '../organisms/WorkSpace/WorkSpace';
import { Container } from '@material-ui/core';

import useStyles from './workSpaceTemplate.styles';

const WorkSpaceTemplate = () => {
  const classes = useStyles();

  return (
  <>
    <Header />
    <Container className={classes.root}>
      <WorkSpace />
    </Container>
  </>
  )
}
export default WorkSpaceTemplate;

