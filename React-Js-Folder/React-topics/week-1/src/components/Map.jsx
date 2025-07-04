
const Map = () => {
    let user = [
        {Name: 'Nasir',
        age: 20
        },
        {Name: 'Ali',
        age: 25
        },
        {Name: 'Ahmad',
        age: 28
        },
        
    ]
  return (
    <>
        <ul>
            {user.map((User, index) => (
                <li key={index}>{User.Name} - {User.age}</li>
            ))}
        </ul>
    </>
  )
}

export default Map