const bgColor = 'white';
const borderColor = '#dadada'
const classes = {
    headerHolder: {
        borderBottom: '1px solid #dadada', 
        margin: 'auto', 
        width: '100vw', 
        position: 'fixed',
        top: '0',
        backgroundColor: 'white',
    },
    header: {
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '975px',
        padding: '0 !important'
    },
    search: {
        backgroundColor: bgColor,
        border: 'none !important',
        outline: 'none',
        borderRadius: '8px !important',
        '& input': {
            borderRadius: '8px !important',
            height: '36px',
            padding: '0 15px',
            paddingLeft: '25px'
        }
},  
    searchIcon: {
        position: 'absolute',
        zIndex: '5',
        top: '35%',
        marginLeft: '5px',
        color: '#aaa'
    },
    iconsHolder:{
        width: '40%',
        display: 'flex',
        justifyContent: 'flex-end',
        '& > *': {
            padding: '0 10px'
        }
    }
}
export {classes}