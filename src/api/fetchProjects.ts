import { client } from "./client.ts";

export const fetchProjects = async () => {
    const response = await client.getEntries({ content_type: "projects" });
    return response.items.map((item: any) => ({
        id: item.sys.id,
        title: item.fields.title,
        description: item.fields.description,
        image: item.fields.image, //.fields.file.url,
        technologies: item.fields.technologies,
        githubUrl: item.fields.githubUrl,
        liveUrl: item.fields.liveUrl,
        status: item.fields.status,
        featured: item.fields.featured,
    }));
};
