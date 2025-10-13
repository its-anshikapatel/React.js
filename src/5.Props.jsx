

function Props({ user1, user2 }) {
    return (
        <div>

            <h1>Props in React Js</h1>
            {/* tag for full line */}
            <hr />
            <h2>My name is: {user1.name}</h2>
            <h2>My age is: {user1.age}</h2>
            <hr />
            <h2>User2 name is: {user2.name}</h2>
            <h2>User2 age is: {user2.age}</h2>

        </div>
    )
}
export default Props