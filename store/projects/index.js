import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../firebase/cloudFirestore'

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    fetchProjects: builder.query({
      async queryFn() {
        
        try {
            const projectRef = collection(db, 'projects')
            const querySnapshot = await getDocs(projectRef)
            let projects = []
            querySnapshot?.forEach((doc) => {
                const {name, link, github_link, image_page, image_logo} = doc.data()

                const projectObject = {
                    id: doc.id,
                    name, link, github_link, image_page, image_logo
                }
            
                projects.push(projectObject)
            })

            return {data: projects}
        } catch (e) {
            console.log(e)
        }
      },
    }),
  }),
})

export const { useFetchProjectsQuery } = projectsApi
