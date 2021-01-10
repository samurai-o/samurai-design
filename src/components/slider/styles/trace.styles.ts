import { makeStyles } from '../../styles';

export default makeStyles({
    traceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    traceItem: {
        '& img': {
            width: '100%',
            verticalAlign: 'middle'
        }
    }
});