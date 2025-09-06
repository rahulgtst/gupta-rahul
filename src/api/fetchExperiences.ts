import { client } from "./client.ts";

export const fetchExperiences = async () => {
    const response = await client.getEntries({ content_type: "experiences" });
    return response.items.map((item: any) => ({
        company: item.fields.company,
        position: item.fields.position,
        period: item.fields.period,
        techstack: item.fields.techStack,
    }));
};
