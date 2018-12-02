import React, { useState } from "react";
import { useMount } from "react-use";
import { Trans } from "react-i18next";

import { User as UserRequests } from "services/API";
import { formErrorsWrap } from "components/util/form";
import UserDialog from "../UserDialog.view";
import Form from "../UserForm";

function UserEdit({ history, match }) {
  console.log(match);
  const [userValues, setUserValues] = useState({});
  useMount(() => {
    UserRequests.getById(match.params.id).then(res => {
      const { id, banned, ...other } = res.data.data;
      setUserValues({ ...other });
    });
  });
  function onClose() {
    history.push("/dashboard/admin/user-control");
  }
  async function onSubmit(values, { setErrors }) {
    try {
      await UserRequests.update(
        {
          ...values
        },
        match.params.id
      );
      history.push("/dashboard/admin/user-control");
    } catch (err) {
      formErrorsWrap(setErrors, err);
    }
  }
  return (
    <UserDialog
      onClose={onClose}
      formComponent={
        !!Object.keys(userValues).length && (
          <Form
            values={userValues}
            btnText={<Trans>Edit User</Trans>}
            onSubmit={onSubmit}
          />
        )
      }
    />
  );
}
export default UserEdit;
