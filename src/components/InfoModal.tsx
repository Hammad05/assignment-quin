import React from "react";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export interface InfoModalProps {
  open: boolean;
  onClose: () => void;
  fields: Array<Field>;
}

export type Field = {
  label: string;
  value: string;
};

export const InfoModal = (props: InfoModalProps) => {
  const { open, fields, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Information</DialogTitle>
      <List>
        {fields.map((field: Field) => (
          <ListItem>
            <ListItemText primary={field.label} />
            <ListItemText secondary={field.value} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};
