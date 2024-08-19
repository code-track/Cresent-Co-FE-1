import { Fragment } from "react"

export function Instructions() {
  return (
    <Fragment>
      <h1 className="CresentTextHeading--l">Approve transactions</h1>
      <div className="CresentBreak--l" />
      <p className="CresentText">
        Cresent Co. has an expense approval system. A user can see all expenses as well as filter 
        expenses by employee. You are a manager and you need to approve the transactions 
        made by your employees. 
      </p>
      <p className="CresentText">  
        Select the checkbox on the right to approve or decline the 
        transactions. You can filter transactions by employee.
      </p>
      <p className="CresentText">
        There are multiple bugs in this application but please limit your changes to fix the bug 
        outlined in the README.md.
      </p>
    </Fragment>
  )
}
