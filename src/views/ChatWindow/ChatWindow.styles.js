const drawerWidth = 240;

export const styles = theme => ({
  root: {
    display: 'flex',
  },
  iconStyleAngry: {
    color: "red"
  },
  iconStyleHappy: {
    color: "green"
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 35,
    margin: 4,
  },
  avatarBot: {
    backgroundColor: "brown",
    marginLeft:20,
    marginRight: -15,
    textAlign: "right",
  },
  avatarClient: {
    backgroundColor: "lightblue",
    marginLeft:0,
    marginRight:0,
    paddingRight:0,
  },
  cardBot: {
    maxWidth: `calc(100%)`,
    marginBottom: 20,
    textAlign: "right",
  },
  cardClient: {
    maxWidth: `calc(100%)`,
    marginBottom: 20,
  },
  clientAnger: { //raudona
    boxShadow: '0 4px 6px 3px rgba(255, 105, 135, .6)',
    marginBottom: 10,
  },
  clientDisgust: { //tamsiai zalia
    boxShadow: '0 4px 6px 3px rgba(39, 174, 96, .5)',
    marginBottom: 10,
  },
  clientFear: { //violetine
    boxShadow: '0 4px 6px 3px rgba(142, 68, 173, .6)',
    marginBottom: 10,
  },
  clientJoy: { //auksine
    boxShadow: '0 4px 6px 3px rgba(230, 126, 34, .6)',
    marginBottom: 10,
  },
  clientSadness: { //melyna
    boxShadow: '0 4px 6px 3px rgba(52, 152, 219, .6)',
    marginBottom: 10,
  },
  paper: {
    backgroundColor: 'transparent',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 6 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});