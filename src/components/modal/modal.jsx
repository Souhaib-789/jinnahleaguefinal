import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid, TextField } from '@mui/material';
import styles from '../../assets/style';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from 'antd';

const { TextArea } = Input;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = React.useState();
    const [category, setCategory] = React.useState('');
    const [description, setDescription] = React.useState('')
    const handleChange = (event) => {
        setCategory(event.target.value);

    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* <Button
                onClick={handleClickOpen}
                size="large"
                color="inherit"
                sx={[
                    styles.bgLight,
                    { color: "#ffffff", marginRight: "10px" },
                ]}
            >
                <AddIcon sx={{ color: "black" }} />
            </Button> */}
            <BootstrapDialog
                onClose={props?.onClose}
                aria-labelledby="customized-dialog-title"
                open={props?.visible}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Details
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Container>
                        <Box sx={[styles.justifyContentBetween, styles.flexWrap, { display: 'flex', marginBottom: "5px" }]}>

                            <Typography gutterBottom sx={{ marginRight: '10px' }}>
                                Category
                            </Typography>

                            <FormControl sx={{ width: "300px" }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={props?.categoryValue}
                                    label="Age"
                                    onChange={props?.setCategory}
                                >
                                    <MenuItem value={"Expense"}>Expense</MenuItem>
                                    <MenuItem value={"Income"}>Income</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={[styles.justifyContentBetween, styles.flexWrap, { display: 'flex', marginBottom: "5px" }]}>

                            <Typography gutterBottom sx={{ marginRight: '10px' }}>
                                Amount
                            </Typography>

                            <TextField onChange={props?.setAmount} value={props?.amountValue} sx={{ width: "300px" }} id="outlined-basic" label="Enter Qunatity" variant="outlined" />
                        </Box>

                        <Box sx={[styles.justifyContentBetween, styles.flexWrap, { display: 'flex', marginBottom: "5px" }]}>

                            <Typography gutterBottom sx={{ marginRight: '10px' }}>
                                Descripton
                            </Typography>
                            <TextArea  style={{ width: "300px" }} rows={4} onChange={props?.setDescription} value={props?.descriptionValue} placeholder="Enter description" maxLength={15} />


                        </Box>
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Button
                        size="large"
                        color="inherit"
                        onClick={props?.Add}
                        sx={[
                            // styles.bgColor1,
                            { backgroundColor: "#6600ff",color:"#ffffff", marginRight: "10px" },
                        ]}
                    >
                        ADD
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}