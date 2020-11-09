
import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    divider : {
        margin: [[theme.spacing(3), 0]]
        // margin: 
    },
    drawerUserProfile: {
        padding: theme.spacing(3)
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
    },
  }),
);

export default useStyles;