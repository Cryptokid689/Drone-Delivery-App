const API_URL = "http://localhost:8000"

export const userPostRequest = async ({postDetails, route}) => {
    console.log("postdetails", postDetails)
    console.log("route", route)
    const response =  await fetch(`${API_URL}/users/${route}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postDetails)
    })

    const data = await response.json()
    return data
}
