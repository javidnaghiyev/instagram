
const bgColor = 'white'
const borderColor = '#dadada'

const classes = {
    container: {
        width: '614px',
        padding: '0 !important',
        float: 'left'
    },
    
    postArticle: {
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        borderRadius: '3px',
        marginBottom: '20px',
        
    },
    header: {
        height: '60px',
        width: 'object-fit',
        background: `${bgColor}`,
        position: 'relative',
    },
    headerContainer: {
        position: 'absolute',
        top: '25%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 'none !important'
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
        '& img': {
            margin: '0 auto',
            height: '100%',
            width: '100%',
            clipPath: 'circle(50% at 50% 50%)',
            display: 'block',
            zIndex: '5',
            objectFit: 'cover',
        }
    },
    accountName: {
        width: 'fit-content'
    },
    imgHolder: {
        width: '614px',
        position: 'relative',

    },
    img: {
        width:'100%',
        objectFit: 'cover'
    },

    details: {
        padding: '10px !important'
    },
    detailsButtons:{
        '& svg': {
            margin: '0 7px'
        },
        '& :nth-child(4)': {
            float: 'right'
        }
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    }

}

export {classes}