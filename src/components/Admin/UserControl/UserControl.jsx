import React, { useState, useEffect } from "react";
import { Trans } from "react-i18next";

import { User as UserRequests } from "services/API";
import DashboardWrap from "components/DashboardWrap";
import UserTable from "./UserTable";
import "./UserControl.scss";

function UserControl({ history }) {
  const [rows, setRows] = useState([]);
  useEffect(
    () => {
      if (history.location.pathname === "/dashboard/admin/user-control") {
        UserRequests.get().then(res => {
          setRows(res.data.data);
        });
      }
    },
    [history.location.pathname]
  );
  async function onDelete(id) {
    setRows(rows.filter(item => item.id !== id));
    try {
      await UserRequests.delete(id);
    } catch (err) {}
  }
  async function onBanned(id, checked) {
    setRows(
      rows.map(
        item => (item.id === id ? { ...item, banned: !item.banned } : item)
      )
    );
    try {
      await UserRequests.update(
        {
          banned: checked
        },
        id
      );
    } catch (err) {}
  }
  return (
    <DashboardWrap
      headlineTitle={<Trans>User Control</Trans>}
      contentComponent={
        <UserTable
          rows={rows}
          onEditBtnClick={id =>
            history.push(`/dashboard/admin/user-control/edit/${id}`)
          }
          onDeleteBtnClick={onDelete}
          onBannedSwitch={onBanned}
        />
      }
    />
  );
}
export default UserControl;
