const borderColor = '#dadada'
const bgColor = 'white'
const colorBorder = 'linear-gradient(orange, red)'

const classes = {
    container: {
        border: `1px solid ${borderColor}`,
        backgroundColor: bgColor,
        borderRadius: '3px',
        height: '114px',
        maxWidth: '614px',
        margin: '20px 0',
        overflow: 'auto',
        scrollbarwidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    ul: {
        margin: '0',
        padding: '0',
        height: '100%',
        display: 'flex',
        flexFlow: 'row',

    },
    listItem: {
        listStyle: 'none',
        // height: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column',
        height: '100%',
        width: 'fit-content',
        margin: '0 10px',
        '&listItem > li': {
            marginLeft: '0'
        }
    },
    thumbPPHolder:{
        width: '60px',
        height: '60px',
        position: 'relative',

        // borderRadius: '50%',

    },
    thumbPP: {
        display: 'block',
        margin: '0 auto',
        height: '100%',
        zIndex: '5',
        clipPath: 'circle(50% at 50% 50%)',
    },
    userName: {
        fontSize: '12px',
        listStyle: 'none',
        marginTop: '10px',
        fontWeight: '300'
    },
    colorBorder: {
        position: 'absolute',
        width: '61px',
        height: '61px',
        border: `3px solid red`,
        borderRadius: '50%',
        top: '-4px',
        left: '-4px',

    },
    whiteBorder: {
        position: 'absolute',
        width: '61px',
        height: '61px',
        border: '3px solid grey',
        borderRadius: '50%',
        top: '-4px',
        left: '-4px',
    }
}

export {classes}