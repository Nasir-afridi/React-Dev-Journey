const Message = () => {
    const IsLoggedIn = true;
  return (
   <>
    {IsLoggedIn === true ? <p>Welcome Nasir</p>: <p>please login</p>}
   </>
  )
}

export default Message