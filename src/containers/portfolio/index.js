import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import './styles.css';

const styles = theme => ({
    root: {
        width: '80vw',
        height: '80vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    subheader: {
        width: '100%',
    },
});

function ImageGridList(props) {
    const { classes } = props;

    return (
        <div className="App">
            <header className="App-header with-padding">
                <p>
                    Done by me
                </p>
                <div className={classes.root}>
                    <GridList cellHeight={360} className={classes.gridList} cols={3}>
                        {tileData.map(tile => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </header>
        </div>
    );
}

ImageGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);