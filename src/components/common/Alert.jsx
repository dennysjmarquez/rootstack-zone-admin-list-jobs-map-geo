import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Alert = function Alert({ title = '', open, onAccept = () => {}, onClose = () => {}, children }) {
	return (
		<>
			<Dialog
				open={open}
				onClose={onClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				fullWidth={true}
				maxWidth="xs"
			>
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">{children}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Cancelar</Button>
					<Button onClick={onAccept} autoFocus>
						Aceptar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default Alert;
