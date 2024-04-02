import React from 'react'

const ErrorBanner = ({ message }) => {
  let ErrorMessage = message || "에러가 발생 했습니다."
  return (
    <div
      style={{ backgroundColor: "red"}}
    >{ message } </div>
  )
}

export default ErrorBanner