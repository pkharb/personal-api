module.exports = {
    documentation_url : 'https://github.com/pkharb/personal-api.git',
    base_url :'',
    endpoints: [
        {
            method: "GET",
            path: "/api",
            description: "Describes all available endpoints"
        },
        {
            method: "GET",
            path: "/api/profile",
            description: "About me"
        },
        {
            method: "GET",
            path: "/api/projects",
            description: "Index of all my projects"
        },
        {
            method: "POST",
            path: "/api/projects",
            description: "Create a new project entry"
        },
        {
            method: "PUT",
            path: "/api/projects/:id",
            description: "Edit a project"
        },
        {
            method: "DELETE",
            path: "/api/projects/:id",
            description: "Delete a project"
        },

    ]
}