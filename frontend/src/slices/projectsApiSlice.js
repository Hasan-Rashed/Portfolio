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
    })
})
});

export const {
    useCreateProjectMutation
} = projectsApiSlice;