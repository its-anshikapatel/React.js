function Loops() {
    //Array of Object
    const userData = [
        {
            name: "anshika",
            age: "21",
            email: "anshika@test.com",
        },
        {
            name: "sam",
            age: "32",
            email: "sam@test.com",
        },
        {
            name: "bruce",
            age: "20",
            email: "bruce@test.com",
        },
        {
            name: "ali",
            age: "16",
            email: "ali@test.com",
        }
    ]
    return (
        <div>
            <h1>Loops in JSX with Map Function</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Age</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody >
                    {/* loops */}
                    {
                        userData.map((user)=>(
                            <tr key={user.age}>
                                <td>{user.age}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                
                </tbody>
            </table>

        </div>
    )
}
export default Loops;