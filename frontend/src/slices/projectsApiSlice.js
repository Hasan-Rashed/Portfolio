import { apiSlice } from "./apiSlice";
const PROJECTS_URL = "/api/projects";


export const projectsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProject: builder.mutation({
            query: (data) => ({ // data is our form data from the create project form
                url: `${PROJECTS_URL}`,
                method: "POST",
                body: data // data is the name, description, image url and other data
            }),
        }),

        getProjects: builder.query({
        query: () => ({ 
            url: `${PROJECTS_URL}`,
            method: "GET",
            }),
        }),

        getSingleProject: builder.query({
            query: (projectId) => ({
                url: `${PROJECTS_URL}/${projectId}`,
                method: "GET",
            }),
        }),

        updateProject: builder.mutation({
            query: (data) => ({ // data is our email and password for login
                url: `${PROJECTS_URL}/${data.projectId}`,
                method: "PUT",
                body: data // data is the name, email, and password
            }),
        }),

        deleteProject: builder.mutation({
            query: (projectId) => ({
                url: `${PROJECTS_URL}/${projectId}`,
                method: "DELETE",
            }),
        }),
})
});

export const {
    useCreateProjectMutation,
    useGetProjectsQuery,
    useGetSingleProjectQuery,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
} = projectsApiSlice;