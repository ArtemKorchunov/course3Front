import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 150
  }
});

const rows = [
  {
    id: 111,
    name: "Toshiba v543",
    description: "Fridge for restaurant",
    status: "active"
  }
];

function DeviceTable({ classes, rows, onEditBtnClick, onDeleteBtnClick }) {
  return (
    <div className="table-wrap">
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell numeric />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.status ? "active" : "non active"}</TableCell>
                <TableCell numeric className="action-row">
                  <Button
                    mini
                    variant="fab"
                    aria-label="Edit"
                    onClick={() => onDeleteBtnClick(row.id)}
                  >
                    <Delete />
                  </Button>
                  <Button
                    mini
                    variant="fab"
                    color="secondary"
                    aria-label="Edit"
                    className="m-r-10"
                    onClick={() => onEditBtnClick(row.id)}
                  >
                    <Edit />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default withStyles(styles)(DeviceTable);
