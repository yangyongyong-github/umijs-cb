import React from 'react'

const index = (props: { name: string }) => {

  // const defaultProps = {
  //   name: '***',
  //   age: '***'
  // }

  // props = Object.assign{{}, defaultProps, props}

  const pageTitle = (flag: String) => {
    if (flag === 'useri') {
      return <div className="title">UserI Loan</div>
    } else if (flag === 'userii') {
      return <div className="title">UserII Deposit</div>
    } else {
      <div>Null</div>
    }
  }

  return (
    // pageTitle(props.userFlag : String ) }

    <div> UserName: {props.name}</div >
  )
}

export default index