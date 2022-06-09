import { height, width } from "@mui/system";

export const classes = {
    background: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0, 0.8)',
        top: '0',
        left: '0',
        display: 'flex'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
    },
    header: {
        height: '42px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid #dadada'
    },
    create: {
        width: '867px',
        height: '570px',
        backgroundColor: 'white',
        borderRadius:'20px'
    },
    body: {
        height: 'calc(100% - 42px)',
        overflow: 'hidden',
    },
    uploadSection:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        '& > *':{
            margin: '10px 0'
        }
    },
    uploadButton:{
        '& input':{
            right: '0',
            position: 'absolute',
            top: '0',
            width: '100%',
            opacity: 0,
            height: '100%',
        }
    },
        border: {
        position: 'absolute',
        top: '-1px',
        left: '-1px',
        border: '1px solid #dadada',
        borderRadius: '50%',
        width: '35px',
        height: '35px'
    },
    ppHolder:{
        height: '35px',
        width: '35px',
        margin: '0',
        position: 'relative',
        marginRight: '10px',
        display: 'inline-block',
        verticalAlign: 'middle',
        '& img': {
            height: '100%',
            width: '100%',
            clipPath: 'circle(50% at 50% 50%)',
            display: 'block',
            zIndex: '5',
            objectFit: 'cover',
        }
    },
    nameContainer: {
        padding: '0',
        height: '30%'
    },
    locationText:{
        borderTop: '1px solid #dadada',
        height: '45px',
        padding: '0 15px',
        width:'100%',
        '& > div':{
            height :'50px'
        },
        '& input':{
            width:'100%',
            height:'100%'
        }
    },
}